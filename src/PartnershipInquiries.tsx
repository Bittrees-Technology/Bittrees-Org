import { FormEvent, useRef, useState } from "react";
import { Link } from "react-router-dom";

const inquiryEndpoint = "https://insights.bittrees.org/api/partnership-inquiries";

export default function PartnershipInquiries() {
  const sending = useRef(false);
  const retry = useRef<{ details: string; id: string } | null>(null);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed" | "limited">("idle");

  async function sendInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.stopPropagation();
    if (sending.current) return;
    sending.current = true;
    setState("sending");
    const form = event.currentTarget;
    try {
      const fields = Object.fromEntries(new FormData(form));
      const details = JSON.stringify(fields);
      if (retry.current?.details !== details) {
        retry.current = { details, id: crypto.randomUUID() };
      }
      const response = await fetch(inquiryEndpoint, {
        method: "POST",
        credentials: "omit",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, id: retry.current.id }),
        signal: AbortSignal.timeout(12000),
      });
      if (response.status === 429) {
        setState("limited");
        return;
      }
      if (!response.ok || (await response.json())?.accepted !== true) {
        setState("failed");
        return;
      }
    } catch {
      setState("failed");
      return;
    } finally {
      sending.current = false;
    }

    retry.current = null;
    form.reset();
    setState("sent");
    const analytics = window as Window & {
      bittreesConsent?: { recordPartnershipLead?: () => void };
    };
    try {
      analytics.bittreesConsent?.recordPartnershipLead?.();
    } catch {
      // A measurement failure must not change the successful delivery status.
    }
  }

  return (
    <>
      <a className="skip-link" href="#inquiry-form">Skip to inquiry form</a>
      <main className="landing">
        <div className="front-door about-page">
          <header className="identity">
            <Link reloadDocument to="/" className="emblem-link" aria-label="Bittrees home">
              <picture>
                <source srcSet="/bittrees.webp" type="image/webp" />
                <img src="/bittrees.png" alt="Bittrees" width={104} height={104} />
              </picture>
            </Link>
            <h1>Partnership inquiries</h1>
          </header>
          <div className="inquiries" id="inquiry-form">
            <p>Tell us what you’d like to work on together. We’ll use your details to respond to your inquiry.</p>
            <form method="post" onSubmit={sendInquiry} data-insights-ignore="true">
              <fieldset disabled={state === "sending"}>
                <label htmlFor="inquiry-name">Name</label>
                <input id="inquiry-name" name="name" autoComplete="name" maxLength={100} required />
                <label htmlFor="inquiry-email">Email</label>
                <input id="inquiry-email" name="email" type="email" autoComplete="email" maxLength={254} required />
                <label htmlFor="inquiry-message">Message</label>
                <textarea id="inquiry-message" name="message" rows={4} maxLength={2000} required />
                <input hidden tabIndex={-1} name="website" autoComplete="off" />
                <button type="submit">{state === "sending" ? "Sending…" : "Send inquiry"}</button>
              </fieldset>
            </form>
            {state === "sent" && <p role="status">Your inquiry was sent.</p>}
            {state === "failed" && <p role="alert">We couldn’t confirm your inquiry was sent. Please try again.</p>}
            {state === "limited" && <p role="alert">Please wait a few minutes before trying again.</p>}
          </div>
          <footer className="site-footer">
            <Link reloadDocument to="/info">About Bittrees</Link>
            <Link reloadDocument to="/">Back to home</Link>
          </footer>
        </div>
      </main>
    </>
  );
}

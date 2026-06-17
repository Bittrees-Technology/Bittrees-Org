const SITES = [
  { name: "Bittrees, Inc.", desc: "Governance & operations", href: "https://gov.bittrees.org", accent: "#F7931A" },
  { name: "Bittrees Capital", desc: "Treasury & holdings", href: "https://capital.bittrees.org", accent: "#B8860B" },
  { name: "Bittrees Research", desc: "Members research foundation", href: "https://research.bittrees.org", accent: "#3A923A" },
];

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        color: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Times New Roman', Tinos, serif",
      }}
    >
      <main
        style={{
          flex: 1,
          width: "100%",
          maxWidth: "540px",
          padding: "5rem 1.5rem 3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2.25rem",
        }}
      >
        <a href="/" style={{ display: "inline-block" }}>
          <img
            src="/bittrees_logo_tree.png"
            width={76}
            height={76}
            alt="Bittrees"
            style={{ display: "block", objectFit: "contain", transition: "transform 0.3s ease" }}
          />
        </a>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Georgia Pro', Georgia, serif",
              fontSize: "2.1rem",
              fontWeight: 700,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Bittrees
          </h1>
          <p style={{ color: "#5C5C5C", fontSize: "1rem", lineHeight: 1.6, margin: "0.6rem auto 0", maxWidth: "40ch" }}>
            A three-part organization advancing research, capital, and governance for a more
            equitable digital future.
          </p>
        </div>

        <nav style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.85rem" }}>
          {SITES.map((s) => (
            <a
              key={s.href}
              className="hub-card"
              href={s.href}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.9rem",
                padding: "1.1rem 1.25rem",
                border: "1px solid #EAE8E3",
                borderRadius: "3px",
                textDecoration: "none",
                color: "inherit",
                background: "#fff",
              }}
            >
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: s.accent, flexShrink: 0 }} />
              <span style={{ flex: 1 }}>
                <span style={{ display: "block", fontFamily: "'Georgia Pro', Georgia, serif", fontSize: "1.15rem", fontWeight: 700 }}>
                  {s.name}
                </span>
                <span style={{ display: "block", fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "#5C5C5C", marginTop: "0.1rem" }}>
                  {s.desc}
                </span>
              </span>
              <span aria-hidden style={{ color: "#9A8A6A", fontSize: "1.1rem" }}>↗</span>
            </a>
          ))}
        </nav>
      </main>

      <footer style={{ padding: "1.25rem", fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#707070" }}>
        © {new Date().getFullYear()} Bittrees
      </footer>
    </div>
  );
}

export default App;

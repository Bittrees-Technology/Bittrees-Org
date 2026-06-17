import { Link } from "react-router-dom";

const LINKS = [
  { name: "Bittrees, Inc.", href: "https://gov.bittrees.org", box: "border-orange-600 shadow-orange-600 hover:shadow-orange-800" },
  { name: "Research", href: "https://research.bittrees.org", box: "border-green-600 shadow-green-600 hover:shadow-green-800" },
  { name: "Capital", href: "https://capital.bittrees.org", box: "border-gray-400 shadow-gray-500 hover:shadow-gray-700" },
];

function Info() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
        boxSizing: "border-box",
      }}
    >
      <Link to="/" className="mx-auto">
        <img
          src="/bittrees.png"
          width="112px"
          height="112px"
          alt="Bittrees"
          className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
        />
      </Link>

      <p className="info-text">
        We’re dedicated to making business simpler and more impactful by harnessing the power of
        technology, all while nurturing and fortifying bonds within the metaverse community and
        extending these connections even further.
      </p>

      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          marginTop: "2rem",
          width: "100%",
          maxWidth: "32rem",
          alignItems: "stretch",
        }}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            className="text-black no-underline hover:underline font-newtimesroman"
            target="_self"
            rel="noreferrer"
            href={l.href}
            style={{ flex: "1 1 0", minWidth: 0, display: "flex" }}
          >
            <div
              className={`border px-3 py-2 shadow-md ${l.box}`}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                fontSize: "clamp(0.8rem, 3.2vw, 1rem)",
              }}
            >
              {l.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Info;

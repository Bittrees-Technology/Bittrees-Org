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

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginTop: "2rem" }}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            className="text-base text-black no-underline hover:underline font-newtimesroman"
            target="_self"
            rel="noreferrer"
            href={l.href}
          >
            <div className={`border px-4 py-2 flex justify-center items-center shadow-md ${l.box}`}>
              {l.name}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Info;

import { Link } from "react-router-dom";

const SITES = [
  { name: "Bittrees, Inc.", href: "https://gov.bittrees.org", box: "border-orange-600 shadow-orange-600 hover:shadow-orange-800" },
  { name: "Bittrees Research", href: "https://research.bittrees.org", box: "border-green-600 shadow-green-600 hover:shadow-green-800" },
  { name: "Bittrees Capital", href: "https://capital.bittrees.org", box: "border-gray-400 shadow-gray-500 hover:shadow-gray-700" },
];

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        boxSizing: "border-box",
      }}
    >
      <div className="flex flex-col gap-6 items-center">
        <Link to="/info" className="mx-auto">
          <img
            src="/bittrees.png"
            width="128px"
            height="128px"
            alt="Bittrees"
            className="max-w-xs transition duration-300 ease-in-out hover:scale-110"
          />
        </Link>

        {SITES.map((s) => (
          <a
            key={s.href}
            className="text-xl text-black no-underline hover:underline font-newtimesroman"
            target="_self"
            rel="noreferrer"
            href={s.href}
          >
            <div className={`mx-auto border p-4 w-80 flex flex-col justify-center items-center shadow-md ${s.box}`}>
              <div className="h-5"></div>
              {s.name}
              <div className="h-5"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;

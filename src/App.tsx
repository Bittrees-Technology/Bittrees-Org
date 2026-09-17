import { Link } from "react-router-dom";

import ecosystem from "./ecosystem.json";

const SITES = ecosystem.projects;

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
        <Link reloadDocument to="/info" className="mx-auto">
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
            className="text-2xl text-black no-underline hover:underline font-newtimesroman"
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

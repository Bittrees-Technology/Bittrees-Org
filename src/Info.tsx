import { Link } from "react-router-dom";

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
    </div>
  );
}

export default Info;

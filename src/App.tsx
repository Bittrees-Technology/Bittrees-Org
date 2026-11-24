import { Link } from "react-router-dom";
import ecosystem from "./ecosystem.json";

const DAO = ecosystem.projects.filter((site) => site.group === "dao");
const DIRECTORY = ecosystem.projects.find((site) => site.id === "bittrees-ecosystem")!;

function App() {
  return (
    <>
      <a className="skip-link" href="#destinations">Skip to destinations</a>
      <main className="landing">
        <div className="front-door">
          <header className="identity">
            <Link reloadDocument to="/info" className="emblem-link" aria-label="About Bittrees">
              <picture>
                <source srcSet="/bittrees.webp" type="image/webp" />
                <img src="/bittrees.png" alt="Bittrees" width={104} height={104} />
              </picture>
            </Link>
            <h1>Bittrees</h1>
          </header>
          <div id="destinations" className="destinations">
            <section aria-labelledby="dao-heading">
              <h2 id="dao-heading" className="group-label">DAO</h2>
              <nav className="destination-list" aria-label="The Bittrees DAO">
                {DAO.map((site) => (
                  <a key={site.id} className={`destination ${site.accent}`} href={site.href}>
                    <span>{site.name}</span>
                  </a>
                ))}
              </nav>
            </section>
            <section className="ecosystem" aria-labelledby="ecosystem-heading">
              <h2 id="ecosystem-heading" className="group-label">Ecosystem</h2>
              <a className="destination explore" href={DIRECTORY.href}><span>Explore products</span></a>
            </section>
          </div>
          <footer className="site-footer">
            <Link reloadDocument to="/info">About Bittrees</Link>
            <Link reloadDocument to="/info#partnership-inquiries">Partnership inquiries</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
export default App;

import { Link } from "react-router-dom";
import ecosystem from "./ecosystem.json";

const DAO = ecosystem.projects.filter((site) => site.group === "dao");
const DIRECTORY = ecosystem.projects.find((site) => site.id === "bittrees-ecosystem")!;

function Info() {
  return (
    <>
      <a className="skip-link" href="#about-content">Skip to content</a>
      <main className="landing">
        <div className="front-door about-page">
          <header className="identity">
            <Link reloadDocument to="/" className="emblem-link" aria-label="Bittrees home">
              <picture>
                <source srcSet="/bittrees.webp" type="image/webp" />
                <img src="/bittrees.png" alt="Bittrees" width={104} height={104} />
              </picture>
            </Link>
            <h1>About Bittrees</h1>
          </header>
          <div id="about-content" className="about-content">
            <p>We’re dedicated to making business simpler and more impactful by harnessing the power of technology, all while nurturing and fortifying bonds within the metaverse community and extending these connections even further.</p>
          </div>
          <section aria-labelledby="about-dao-heading">
            <h2 id="about-dao-heading" className="group-label">DAO</h2>
            <nav className="destination-list about-destinations" aria-label="The Bittrees DAO">
              {DAO.map((site) => (
                <a key={site.id} className={`destination ${site.accent}`} href={site.href}>{site.name}</a>
              ))}
            </nav>
          </section>
          <section className="ecosystem" aria-labelledby="about-ecosystem-heading">
            <h2 id="about-ecosystem-heading" className="group-label">Ecosystem</h2>
            <a className="destination explore" href={DIRECTORY.href}>Explore products</a>
          </section>
          <footer>
            <Link reloadDocument to="/">Back to home</Link>
          </footer>
        </div>
      </main>
    </>
  );
}
export default Info;

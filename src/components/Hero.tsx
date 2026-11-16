import { Link } from "react-router";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <h1 id="hero-title">
            Jag bygger det du ser och det som händer bakom.
          </h1>
          <p className="hero__lead">
            Hej, jag är Jonathan, student på Kyh-frontutbildning. Jag gillar att
            skapa snabba, tillgängliga gränssnitt och API:er som håller ihop.
            Just nu söker jag praktik, och lite senare jobb till sommaren 2027.
          </p>
          <div className="actions">
            <Link className="btn btn--primary" to="/#projekt">
              Se mina projekt
            </Link>
            <Link className="btn btn--secondary" to="/#kontakt">
              Kontakta mig
            </Link>
          </div>
        </div>

        <ul className="layers" aria-label="Det jag arbetar med">
          <li className="layer layer--front">
            <h2>Det du ser</h2>
            <p>Frontend</p>
            <ul>
              <li>React och TypeScript</li>
              <li>Responsiv design</li>
              <li>Tillgänglighet</li>
            </ul>
          </li>
          <li className="layer layer--back">
            <h2>Det som händer bakom</h2>
            <p>Backend</p>
            <ul>
              <li>Node.js och Express, C# .NET</li>
              <li>SQL och NoSQL</li>
              <li>REST-API och tester</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}

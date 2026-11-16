import portraitImg from "../assets/portrait.webp";

const portrait = {
  src: portraitImg,
  alt: "Porträtt av Jonathan Berhane",
  width: 400,
  height: 500,
  caption: "Jonathan, vid skrivbordet för det mesta.",
};

const facts = [
  { label: "Utbildning", value: "Frontend Developer" },
  { label: "Fokus", value: "Frontend och backend" },
  { label: "Intressen", value: "Fotboll, gaming, anime och D&D" },
  { label: "Söker", value: "Praktik och sommarjobb" },
];

export default function About() {
  return (
    <section
      id="om"
      tabIndex={-1}
      className="section section--surface"
      aria-labelledby="om-title"
    >
      <div className="container about">
        <figure className="about__figure">
          <img
            src={portrait.src}
            alt={portrait.alt}
            width={portrait.width}
            height={portrait.height}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{portrait.caption}</figcaption>
        </figure>

        <div>
          <h2 id="om-title">Om mig</h2>
          <p>
            Jag läser till frontendutvecklare med inriktning mot både frontend
            och backend. Jag trivs bäst när jag får följa en funktion hela
            vägen, från knappen användaren trycker på till raden som sparas i
            databasen.
          </p>
          <p>
            Jag bryr mig om att det jag bygger fungerar för alla: på mobilen,
            med tangentbord och med skärmläsare. Jag lär mig snabbt, ber gärna
            om feedback och jobbar bäst i team där man vågar fråga.
          </p>
          <dl className="about__facts">
            {facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

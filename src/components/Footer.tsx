import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="site-footer">
      <section
        id="kontakt"
        tabIndex={-1}
        className="container contact"
        aria-labelledby="kontakt-title"
      >
        <h2 id="kontakt-title">Kontakt</h2>
        <p>Hör gärna av dig om praktik, jobb eller samarbeten.</p>
        <ul className="contact__list">
          <li>
            <a href="mailto:jonathan91berhane@gmail.com">
              <MailIcon /> jonathan91berhane@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/TacoKrydda"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> GitHub
              <span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/jonathan-berhane-80383a227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon /> LinkedIn
              <span className="sr-only"> (öppnas i ny flik)</span>
            </a>
          </li>
        </ul>
      </section>
      <p className="container footer__note">
        © {CURRENT_YEAR} Jonathan Berhane. Byggd med React, TypeScript och Vite.
      </p>
    </footer>
  );
}

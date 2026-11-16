import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

const links = [
  { to: "/#om", label: "Om mig" },
  { to: "/#projekt", label: "Projekt" },
  { to: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="nav__brand">
          Jonathan Berhane
        </Link>

        <button
          ref={buttonRef}
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="huvudmeny"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Stäng" : "Meny"}
          <span className="sr-only"> huvudmeny</span>
        </button>

        <nav aria-label="Huvudmeny">
          <ul id="huvudmeny" className={`nav__list${open ? " is-open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

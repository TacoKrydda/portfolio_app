import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

const links = [
  { to: "/#om", label: "Om mig" },
  { to: "/projekt", label: "Projekt" },
  { to: "/#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const open = openKey === location.key;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
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
          onClick={() => setOpenKey(open ? null : location.key)}
        >
          {open ? "Stäng" : "Meny"}
          <span className="sr-only"> huvudmeny</span>
        </button>

        <nav aria-label="Huvudmeny">
          <ul id="huvudmeny" className={`nav__list${open ? " is-open" : ""}`}>
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpenKey(null)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

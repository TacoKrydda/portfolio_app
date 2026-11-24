import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { pathname, search, hash, key } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);
  const previous = useRef({ pathname, search, hash });

  useEffect(() => {
    const last = previous.current;
    previous.current = { pathname, search, hash };
    if (
      last.pathname === pathname &&
      last.hash === hash &&
      last.search !== search
    ) {
      return;
    }

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        el.scrollIntoView();
        el.focus({ preventScroll: true });
        isFirstRender.current = false;
        return;
      }
    }
    window.scrollTo(0, 0);
    if (!isFirstRender.current) {
      mainRef.current?.focus({ preventScroll: true });
    }
    isFirstRender.current = false;
  }, [pathname, search, hash, key]);

  return (
    <>
      <a className="skip-link" href="#main">
        Hoppa till huvudinnehåll
      </a>
      <Navbar />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

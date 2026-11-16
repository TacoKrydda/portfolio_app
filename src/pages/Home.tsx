import { useEffect } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  useEffect(() => {
    document.title = "Jonathan Berhane – Fullstackutvecklare";
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}

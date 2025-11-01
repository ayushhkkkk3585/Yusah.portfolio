import "./App.css";
import Home from "./components/Home";
import Lenis from "lenis";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Initialize Lenis
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Home />
      <Analytics />
    </>
  );
}

export default App;

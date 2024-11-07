import "./App.css";
import Home from "./components/Home";
import Lenis from "lenis";

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
    </>
  );
}

export default App;

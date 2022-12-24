import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Fade from "react-reveal/Fade";

function App() {
  return (
    <main className="text-white-400 bg-white body-font">
      <Navbar />
      <Hero />
      <Fade>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Fade>
    </main>
  );
}

export default App;

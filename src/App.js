import React from "react";

import Navbar from './components/Navbar'
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}

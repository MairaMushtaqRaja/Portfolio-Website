// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import MyWork from "./components/Mywork";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Services/>
      <MyWork />
      <Connect />
      <Footer />
    </div>
  );
}


export default App;

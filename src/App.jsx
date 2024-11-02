import React from "react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

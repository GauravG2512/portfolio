import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Experiences from "./sections/Experiences";
// import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import './index.css'; // or './main.css'
import Skills from "./sections/Skill";
import BackgroundMusic from "./components/BackgroundMusic";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Skills/>
      <Projects />
      <Certifications />
      <Experiences />
      {/* <Testimonial /> */}
      <Contact />
      <Footer/>
      <BackgroundMusic />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;

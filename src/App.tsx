import React, { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const Background3D = lazy(() => import("./components/Background3D"));
const Projects = lazy(() => import("./components/Projects"));

const App: React.FC = () => {
  return (
    <div className="antialiased text-slate-200 selection:bg-primary/30 selection:text-white min-h-screen relative">
      <Suspense fallback={<div className="fixed inset-0 bg-darker z-0" />}>
        <Background3D />
      </Suspense>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Projects />
          </Suspense>
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;

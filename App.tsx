import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background3D from './components/Background3D';

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
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
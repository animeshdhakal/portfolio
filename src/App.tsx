import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import RiscvSimulator from "./components/RiscvSimulator";
import TerminalPlayground from "./components/TerminalPlayground";
import Contact from "./components/Contact";
import BackgroundGrid from "./components/BackgroundGrid";
import CommandPalette from "./components/CommandPalette";
import { initAudio } from "./utils/audio";

const App: React.FC = () => {
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  useEffect(() => {
    initAudio();

    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Cmd + K (Mac) or Ctrl + K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090b10] text-[#e2e8f0] font-sans selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Constellation & Grid */}
      <BackgroundGrid />

      {/* Global Command Palette Modal (Cmd + K) */}
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={() => setIsPaletteOpen(false)}
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <RiscvSimulator />
          <TerminalPlayground />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;

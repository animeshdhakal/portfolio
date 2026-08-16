import React, { useState, useEffect, useRef } from "react";
import { Terminal, Search, Volume2, VolumeX, Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { playClickSound, toggleSound, isSoundEnabled } from "../utils/audio";

interface NavbarProps {
  onOpenPalette?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenPalette }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [soundOn, setSoundOn] = useState(true);
  const clickedRef = useRef<string | null>(null);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (clickedRef.current) return;

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 25;

      if (isAtBottom) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "simulator", "terminal", "contact"];
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (clickedRef.current) return;

        const isAtBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 25;
        if (isAtBottom) {
          setActiveSection("contact");
          return;
        }

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => {
            const aRect = a.boundingClientRect;
            const bRect = b.boundingClientRect;
            const aCenter = aRect.top + aRect.height / 2;
            const bCenter = bRect.top + bRect.height / 2;
            const target = window.innerHeight * 0.45;
            return Math.abs(aCenter - target) - Math.abs(bCenter - target);
          });
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.05, 0.2, 0.4, 0.6, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Focused, non-cluttered primary nav links
  const primaryNavLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Stack", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // All links for mobile menu
  const mobileNavLinks = [
    { name: "Overview", href: "#hero", id: "hero" },
    { name: "About", href: "#about", id: "about" },
    { name: "Stack", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "CPU Simulator", href: "#simulator", id: "simulator" },
    { name: "Terminal", href: "#terminal", id: "terminal" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    playClickSound("key");
    setActiveSection(id);
    clickedRef.current = id;
    setIsOpen(false);
    setTimeout(() => {
      clickedRef.current = null;
    }, 850);
  };

  const handleToggleAudio = () => {
    const newState = toggleSound();
    setSoundOn(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-3.5 transition-all duration-300">
      <div className="max-w-5xl mx-auto">
        <nav
          className={`flex items-center justify-between px-4 sm:px-5 py-2 rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-[#0c1018]/90 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
              : "bg-[#0f131c]/70 backdrop-blur-sm border-white/[0.06]"
          }`}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors group"
          >
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20 transition-all">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-mono text-xs font-semibold tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
              animesh.dhakal
            </span>
          </a>

          {/* Desktop Nav: Clean 4 Links */}
          <div className="hidden md:flex items-center gap-1">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors font-mono tracking-wide ${
                    isActive
                      ? "text-cyan-300 bg-cyan-500/10 border border-cyan-500/20"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5">
            {/* Search ⌘K */}
            {onOpenPalette && (
              <button
                onClick={() => {
                  playClickSound("action");
                  onOpenPalette();
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-all"
                title="Search commands (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-slate-300">Search</span>
                <kbd className="hidden sm:inline px-1 py-0.2 rounded bg-slate-800 text-[10px] text-slate-400 border border-slate-700">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Sound Toggle */}
            <button
              onClick={handleToggleAudio}
              className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] text-slate-400 hover:text-cyan-300 transition-colors"
              title={soundOn ? "Mute sounds" : "Enable sounds"}
              aria-label="Toggle mechanical sound"
            >
              {soundOn ? (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-slate-500" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => {
                  playClickSound("key");
                  setIsOpen(!isOpen);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-3 rounded-2xl bg-[#0c1018]/95 border border-white/10 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex flex-col space-y-1">
                {mobileNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono flex items-center justify-between ${
                      activeSection === link.id
                        ? "text-cyan-400 bg-cyan-500/10 font-semibold"
                        : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {activeSection === link.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    )}
                  </a>
                ))}
              </div>
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <a
                  href="https://github.com/animeshdhakal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 hover:underline flex items-center gap-1"
                >
                  GitHub <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://linkedin.com/in/animeshdhakal"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:underline flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
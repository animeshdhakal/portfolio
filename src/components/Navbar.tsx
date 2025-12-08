import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, Code, Cpu, Home, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scroll spy logic
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero", id: "hero", icon: <Home size={18} /> },
    { name: "About", href: "#about", id: "about", icon: <Terminal size={18} /> },
    { name: "Skills", href: "#skills", id: "skills", icon: <Code size={18} /> },
    { name: "Projects", href: "#projects", id: "projects", icon: <Cpu size={18} /> },
    { name: "Contact", href: "#contact", id: "contact", icon: <Mail size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`glass-high rounded-full px-6 py-3 transition-all duration-300 border-primary/20 ${scrolled || isOpen
          ? "w-full max-w-2xl shadow-[0_0_20px_rgba(59,130,246,0.15)] bg-darker/80"
          : "w-full max-w-4xl bg-transparent border-transparent"
          }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md rounded-lg group-hover:bg-primary/40 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-primary to-purple-600 p-2 rounded-lg text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                <Terminal size={18} strokeWidth={2.5} />
              </div>
            </div>
            <span className="font-mono font-bold text-lg tracking-tight group-hover:text-primary transition-colors text-gradient-light">
              animesh.dev
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:text-white group overflow-hidden ${activeSection === link.id ? "text-white" : "text-gray-400"
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.name}
                </span>
                {activeSection === link.id && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden mt-4 overflow-hidden border-t border-white/10 pt-2"
            >
              <div className="flex flex-col space-y-2 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors ${activeSection === link.id ? "text-white bg-white/5" : "text-gray-300"
                      }`}
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
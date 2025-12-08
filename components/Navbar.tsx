import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Code, Cpu, Home, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', icon: <Home size={18} /> },
    { name: 'About', href: '#about', icon: <Terminal size={18} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={18} /> },
    { name: 'Projects', href: '#projects', icon: <Cpu size={18} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`glass-high rounded-full px-6 py-3 transition-all duration-300 ${
          scrolled || isOpen ? 'w-full max-w-2xl shadow-2xl shadow-primary/10' : 'w-full max-w-4xl'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-purple-600 p-1.5 rounded-lg text-white">
               <Terminal size={18} />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight group-hover:text-primary transition-colors">
              animesh.dev
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {link.name}
                </span>
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
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            className="md:hidden mt-4 overflow-hidden border-t border-white/10 pt-2"
          >
            <div className="flex flex-col space-y-2 pb-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
};

export default Navbar;
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Binary,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  Command,
  X,
  ExternalLink,
} from "lucide-react";

interface PaletteItem {
  id: string;
  title: string;
  category: "Navigation" | "Repositories" | "Actions";
  icon: React.ReactNode;
  hint?: string;
  action: () => void;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const email = "theanimeshdhakal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  const openUrl = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  const items: PaletteItem[] = [
    // Navigation
    {
      id: "nav-hero",
      title: "Overview",
      category: "Navigation",
      hint: "Jump to hero",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("hero"),
    },
    {
      id: "nav-about",
      title: "About & Education",
      category: "Navigation",
      hint: "Pulchowk Campus background",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-skills",
      title: "Technical Stack",
      category: "Navigation",
      hint: "Systems, Embedded & Web stacks",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-projects",
      title: "Projects & Repositories",
      category: "Navigation",
      hint: "View GitHub engineering work",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-simulator",
      title: "RISC-V CPU Simulator",
      category: "Navigation",
      hint: "Step debugger & register telemetry",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("simulator"),
    },
    {
      id: "nav-terminal",
      title: "Interactive Console",
      category: "Navigation",
      hint: "In-browser terminal playground",
      icon: <Terminal className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("terminal"),
    },
    {
      id: "nav-contact",
      title: "Contact",
      category: "Navigation",
      hint: "Email & links",
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => scrollToSection("contact"),
    },

    // Repositories
    {
      id: "repo-riscv",
      title: "riscv-emulator",
      category: "Repositories",
      hint: "Rust • 32-bit RV32I emulator",
      icon: <Binary className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/riscv-emulator"),
    },
    {
      id: "repo-os",
      title: "animesh-os",
      category: "Repositories",
      hint: "C / Assembly • Operating system kernel",
      icon: <Binary className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/animesh-os"),
    },
    {
      id: "repo-socketiot",
      title: "SocketIoT",
      category: "Repositories",
      hint: "Java / Netty • High-throughput IoT broker",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/SocketIoT"),
    },
    {
      id: "repo-kyber",
      title: "post-quantum-cryptography-fpga",
      category: "Repositories",
      hint: "SystemVerilog • Crystals-Kyber FPGA",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/post-quantum-cryptography-fpga"),
    },
    {
      id: "repo-lang",
      title: "dhakal-lang",
      category: "Repositories",
      hint: "Rust • Interpreted programming language",
      icon: <Binary className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/dhakal-lang"),
    },
    {
      id: "repo-socketiot-rtos",
      title: "SocketIoTLibRTOS",
      category: "Repositories",
      hint: "C • FreeRTOS & ESP8266 client lib",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/SocketIoTLibRTOS"),
    },
    {
      id: "repo-dns",
      title: "dns-server",
      category: "Repositories",
      hint: "Rust • UDP DNS server daemon",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal/dns-server"),
    },

    {
      id: "act-matrix",
      title: "Launch Matrix Digital Rain",
      category: "Actions",
      hint: "Easter egg digital stream in terminal",
      icon: <Sparkles className="w-4 h-4 text-emerald-400" />,
      action: () => {
        scrollToSection("terminal");
        window.dispatchEvent(new CustomEvent("open-matrix-mode"));
      },
    },
    {
      id: "act-copy-email",
      title: "Copy Email Address",
      category: "Actions",
      hint: email,
      icon: copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />,
      action: handleCopyEmail,
    },
    {
      id: "act-github",
      title: "Open GitHub Profile",
      category: "Actions",
      hint: "github.com/animeshdhakal",
      icon: <Github className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://github.com/animeshdhakal"),
    },
    {
      id: "act-linkedin",
      title: "Open LinkedIn Profile",
      category: "Actions",
      hint: "linkedin.com/in/animeshdhakal",
      icon: <Linkedin className="w-4 h-4 text-cyan-400" />,
      action: () => openUrl("https://linkedin.com/in/animeshdhakal"),
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase()) ||
      (item.hint && item.hint.toLowerCase().includes(query.toLowerCase()))
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Palette Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl bg-[#0d121c] border border-slate-700/80 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-xs z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-[#101624]">
              <Search className="w-4 h-4 text-cyan-400 shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands, repositories, sections..."
                className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-xs font-mono"
              />
              <button
                onClick={onClose}
                className="p-1 rounded-md text-slate-500 hover:text-slate-300 hover:bg-slate-800 transition-colors"
                aria-label="Close command palette"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List Results */}
            <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="py-8 text-center text-slate-500 text-xs">
                  No matching commands found for "{query}".
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const isSelected = idx === selectedIndex;

                  return (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors ${
                        isSelected
                          ? "bg-cyan-500/15 text-cyan-200 border border-cyan-500/30"
                          : "text-slate-300 hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-1.5 rounded-lg ${
                            isSelected
                              ? "bg-cyan-500/20 text-cyan-300"
                              : "bg-slate-800/80 text-slate-400"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-xs text-slate-100">
                            {item.title}
                          </div>
                          {item.hint && (
                            <div className="text-[11px] text-slate-500">
                              {item.hint}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                          {item.category}
                        </span>
                        {isSelected && (
                          <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Hotkeys Hint */}
            <div className="px-4 py-2 bg-[#090d14] border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 font-mono">
              <div className="flex items-center gap-3">
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↑↓</kbd> navigate
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">↵</kbd> select
                </span>
                <span>
                  <kbd className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">esc</kbd> close
                </span>
              </div>
              <span className="text-cyan-400/80 font-mono">animesh.dev</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

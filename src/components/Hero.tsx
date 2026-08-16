import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Check,
  Copy,
  Github,
  Linkedin,
  Cpu,
  Layers,
  Terminal,
} from "lucide-react";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "theanimeshdhakal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-32 pb-16 flex flex-col justify-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Pulchowk Campus (IOE)</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400">Electronics &amp; Information</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Animesh Dhakal
              </h1>
              <p className="text-base sm:text-lg font-mono text-cyan-400 mt-2">
                Systems &amp; Embedded Software Engineer
              </p>
            </motion.div>

            {/* Single punchy 1-line bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Building low-level network brokers, embedded firmware, and performant systems across hardware and software.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold font-mono text-xs transition-colors flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs transition-colors flex items-center gap-2"
                title="Copy email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>theanimeshdhakal@gmail.com</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/animeshdhakal"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/animeshdhakal"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Telemetry Snippet */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[#0d121c] border border-slate-800 p-5 font-mono text-xs space-y-3"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>stack.sys // active</span>
                <span className="text-emerald-400">ONLINE</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-500">Focus</span>
                  <span className="text-cyan-300">Systems &amp; Embedded</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-500">Core</span>
                  <span>C/C++, Rust, FreeRTOS, Netty</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-500">Hardware</span>
                  <span>ESP32, ESP8266, Embedded Linux</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Full-Stack</span>
                  <span>TypeScript, React, PostgreSQL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

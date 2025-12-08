import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown, Github, Linkedin, Mail } from "lucide-react";


const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] -z-10 animate-pulse-slow delay-1000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <div className="px-4 py-1.5 rounded-full glass border border-primary/30 flex items-center gap-2 hover:bg-primary/10 transition-colors duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-primary tracking-wide uppercase">
              Available for new opportunities
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
            Animesh
          </span>
          <br className="md:hidden" />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white/80 via-white/50 to-white/30 md:ml-4">
            Dhakal
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-light text-primary mb-8 font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            &lt;Generalist Engineer /&gt;
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Constructing high-performance digital experiences at the intersection of{" "}
          <span className="text-white font-medium relative inline-block">
            Hardware
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary/50"></span>
          </span>{" "}
          and{" "}
          <span className="text-white font-medium relative inline-block">
            Software
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-purple-500/50"></span>
          </span>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)]"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            }}
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
            <span className="relative z-10 flex items-center gap-2">
              View Work{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <div className="flex gap-3">
            <a href="https://github.com/animeshdhakal" target="_blank" rel="noreferrer" className="p-4 rounded-full glass hover:bg-white/10 hover:border-white/20 text-white transition-all group" aria-label="Github">
              <Github size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://linkedin.com/in/animeshdhakal" target="_blank" rel="noreferrer" className="p-4 rounded-full glass hover:bg-white/10 hover:border-white/20 text-white transition-all group" aria-label="LinkedIn">
              <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="mailto:animeshdhakal@gmail.com" target="_blank" rel="noreferrer" className="p-4 rounded-full glass hover:bg-white/10 hover:border-white/20 text-white transition-all group" aria-label="Email">
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

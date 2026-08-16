import React, { useState } from "react";
import { Github, ArrowUpRight, Cpu, Layers, Terminal, Binary, Globe } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "Systems" | "Hardware" | "IoT" | "Web";
  description: string;
  tech: string[];
  github: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const projects: ProjectItem[] = [
    {
      id: "riscv",
      title: "riscv-emulator",
      category: "Systems",
      description: "Modular 32-bit RISC-V (RV32I base instruction set) processor emulator written in Rust.",
      tech: ["Rust", "RISC-V", "Emulation", "Computer Architecture"],
      github: "https://github.com/animeshdhakal/riscv-emulator",
    },
    {
      id: "animesh-os",
      title: "animesh-os",
      category: "Systems",
      description: "Hobby operating system kernel implementing core boot stages, memory management, and hardware interrupts.",
      tech: ["C", "x86 Assembly", "OS Dev", "Kernel"],
      github: "https://github.com/animeshdhakal/animesh-os",
    },
    {
      id: "kyber-fpga",
      title: "post-quantum-cryptography-fpga",
      category: "Hardware",
      description: "Hardware implementation of NIST Post-Quantum Crystals-Kyber cryptographic lattice algorithm.",
      tech: ["SystemVerilog", "FPGA", "Cryptography", "Digital Design"],
      github: "https://github.com/animeshdhakal/post-quantum-cryptography-fpga",
    },
    {
      id: "socketiot",
      title: "SocketIoT",
      category: "IoT",
      description: "High-throughput IoT message broker built with Netty, custom binary wire framing, and automated SSL.",
      tech: ["Java", "Netty", "Custom Protocol", "WebSockets"],
      github: "https://github.com/animeshdhakal/SocketIoT",
    },
    {
      id: "dhakal-lang",
      title: "dhakal-lang",
      category: "Systems",
      description: "Custom interpreted programming language featuring lexer, AST parser, and tree-walk runtime engine in Rust.",
      tech: ["Rust", "Compilers", "AST", "Language Design"],
      github: "https://github.com/animeshdhakal/dhakal-lang",
    },
    {
      id: "socketiot-rtos",
      title: "SocketIoTLibRTOS",
      category: "Hardware",
      description: "Memory-optimized C client library (<4KB RAM) for ESP8266 and FreeRTOS microcontrollers.",
      tech: ["C99", "FreeRTOS", "ESP8266", "Embedded"],
      github: "https://github.com/animeshdhakal/SocketIoTLibRTOS",
    },
    {
      id: "8bit-cpu",
      title: "8-bit-cpu",
      category: "Hardware",
      description: "Basic 8-bit CPU architecture designed and simulated with ALU, registers, and microcode instructions.",
      tech: ["VHDL", "Digital Logic", "CPU Design"],
      github: "https://github.com/animeshdhakal/8-bit-cpu",
    },
    {
      id: "dns-server",
      title: "dns-server",
      category: "Systems",
      description: "Lightweight authoritative and recursive DNS server handling UDP packet queries written in Rust.",
      tech: ["Rust", "DNS", "UDP", "Networking"],
      github: "https://github.com/animeshdhakal/dns-server",
    },
    {
      id: "6502-emulator",
      title: "6502Emulator",
      category: "Systems",
      description: "Cycle-accurate emulator of the classic MOS Technology 6502 8-bit microprocessor in C.",
      tech: ["C", "Emulation", "6502", "Microprocessors"],
      github: "https://github.com/animeshdhakal/6502Emulator",
    },
    {
      id: "socketiot-lib",
      title: "SocketIoTLib",
      category: "IoT",
      description: "High-performance, zero-overhead C++ client library for embedded Linux and desktop IoT targets.",
      tech: ["C++17", "Asynchronous I/O", "Networking", "CMake"],
      github: "https://github.com/animeshdhakal/SocketIoTLib",
    },
    {
      id: "ieee-website",
      title: "ieee-website",
      category: "Web",
      description: "Official web platform for IEEE Pulchowk Student Branch with event registration and portal features.",
      tech: ["TypeScript", "React", "Tailwind CSS"],
      github: "https://github.com/animeshdhakal/ieee-website",
    },
    {
      id: "self-balancing-robot",
      title: "SelfBalancingRobot",
      category: "Hardware",
      description: "Two-wheeled self-balancing inverted pendulum robot with PID control and IMU sensor fusion.",
      tech: ["C", "Robotics", "PID Control", "Embedded"],
      github: "https://github.com/animeshdhakal/SelfBalancingRobot",
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Hardware":
        return <Cpu className="w-4 h-4" />;
      case "Systems":
        return <Binary className="w-4 h-4" />;
      case "IoT":
        return <Layers className="w-4 h-4" />;
      case "Web":
        return <Globe className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest">
              03 // Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1 p-1 bg-[#0d121c] border border-slate-800 rounded-xl">
              {["All", "Systems", "Hardware", "IoT", "Web"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                    activeCategory === cat
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <a
              href="https://github.com/animeshdhakal?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-xl transition-all"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#0d121c] border border-slate-800 p-5 flex flex-col justify-between hover:border-slate-700 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {getCategoryIcon(project.category)}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 font-mono group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#111724] border border-slate-800 text-slate-400 text-[10px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-200 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
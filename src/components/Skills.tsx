import React, { useState } from "react";
import { Cpu, Server, Globe, Wrench, Layers } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    note: string;
  }[];
}

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categories: SkillCategory[] = [
    {
      title: "Systems & Low-Level",
      icon: <Server className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "C (C99/C11)", note: "Firmware & Drivers" },
        { name: "C++ (C++17/20)", note: "Client Libraries & OOP" },
        { name: "Rust", note: "Memory Safety & Async" },
        { name: "POSIX & Syscalls", note: "Linux Internals" },
        { name: "Qt Framework", note: "Desktop & GUI" },
      ],
    },
    {
      title: "Embedded & Firmware",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "FreeRTOS", note: "Tasks & Mutexes" },
        { name: "ESP32 / ESP8266", note: "SoC & WiFi Stack" },
        { name: "Embedded Linux", note: "Kernel & Device Trees" },
        { name: "Protocols", note: "UART, SPI, I2C" },
        { name: "Buildroot / Yocto", note: "Root Filesystems" },
      ],
    },
    {
      title: "Networking & Protocols",
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "Netty Framework", note: "Async Non-blocking I/O" },
        { name: "Wire Protocols", note: "Custom Binary Framing" },
        { name: "WebSockets & TCP", note: "Persistent Streams" },
        { name: "TLS / SSL", note: "Secure Handshakes" },
      ],
    },
    {
      title: "Web & Full-Stack",
      icon: <Globe className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "TypeScript", note: "Type-Safe Architecture" },
        { name: "React & Next.js", note: "UI Components & SSR" },
        { name: "PostgreSQL", note: "Relational Schemas" },
        { name: "Tailwind CSS", note: "Modern Layouts" },
        { name: "Node.js", note: "APIs & Tooling" },
      ],
    },
    {
      title: "Tooling & Diagnostics",
      icon: <Wrench className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: "GDB & Valgrind", note: "Memory & Debugging" },
        { name: "Wireshark", note: "Packet Analysis" },
        { name: "CMake", note: "Cross-Compilation" },
        { name: "Git & Linux CLI", note: "Daily Workflow" },
        { name: "Docker", note: "Containers" },
      ],
    },
  ];

  const filteredCategories =
    activeTab === "All"
      ? categories
      : categories.filter((c) => c.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest">
              02 // Technical Stack
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-1 p-1 bg-[#0d121c] border border-slate-800 rounded-xl">
            {["All", "Systems", "Embedded", "Networking", "Web"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeTab === tab
                    ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 font-medium"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0d121c] border border-slate-800 p-5 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                  {cat.icon}
                </div>
                <h3 className="text-sm font-bold text-white">{cat.title}</h3>
              </div>

              <div className="space-y-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between p-2 rounded-lg bg-[#111724]/60 border border-slate-800/50 text-xs"
                  >
                    <span className="font-mono font-medium text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400/80">
                      {skill.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
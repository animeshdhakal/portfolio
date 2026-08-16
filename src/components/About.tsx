import React from "react";
import { GraduationCap, MapPin } from "lucide-react";

const About: React.FC = () => {
  const education = [
    {
      degree: "B.E. in Electronics, Communication & Information Engineering",
      institution: "Pulchowk Campus (IOE), Tribhuvan University",
      period: "2024 — Present",
      location: "Lalitpur, Nepal",
      current: true,
    },
    {
      degree: "High School (+2 Science)",
      institution: "Valmiki Shiksha Sadan",
      period: "2022 — 2024",
      location: "Chitwan, Nepal",
      current: false,
    },
    {
      degree: "Secondary Education Exam (SEE)",
      institution: "Gyan Jyoti English School",
      period: "2022",
      location: "Nepal",
      current: false,
    },
  ];

  return (
    <section id="about" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest">
            01 // About
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background &amp; Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Bio text */}
          <div className="lg:col-span-6 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Engineering undergraduate at <strong className="text-white">Pulchowk Campus (IOE)</strong>.
              I build software ranging from bare-metal microcontrollers and custom network protocols to high-throughput servers and web apps.
            </p>
            <p className="text-slate-400 text-sm">
              Experienced with C, C++, Rust, FreeRTOS, Java (Netty), and modern web stacks like React and TypeScript.
            </p>
          </div>

          {/* Clean Timeline */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#0d121c] border border-slate-800 p-6 space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-white font-semibold text-sm">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Education</span>
              </div>

              <div className="relative border-l border-slate-800 ml-2 space-y-6 pl-5">
                {education.map((item, idx) => (
                  <div key={idx} className="relative">
                    <div
                      className={`absolute -left-[27px] top-1 w-3 h-3 rounded-full border-2 ${
                        item.current
                          ? "bg-cyan-400 border-[#0d121c]"
                          : "bg-slate-700 border-[#0d121c]"
                      }`}
                    />

                    <div className="flex items-center justify-between text-xs font-mono text-cyan-400 mb-0.5">
                      <span>{item.period}</span>
                      {item.current && (
                        <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-[10px] text-cyan-300 border border-cyan-500/20">
                          Active
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-semibold text-white">
                      {item.degree}
                    </h4>

                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.institution}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
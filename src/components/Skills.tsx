import React, { useRef, useState } from 'react';

import { Code2, Server, Cpu, Brain, Layers, Database, Globe, PenTool } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Skills: React.FC = () => {
  const SKILLS = [
    { name: "React / Next.js", level: 90, category: "Web" },
    { name: "TypeScript", level: 90, category: "Web" },
    { name: "PostgreSQL", level: 80, category: "Web" },
    { name: "Rust", level: 75, category: "Systems" },
    { name: "C / C++", level: 85, category: "Systems" },
    { name: "Qt Framework", level: 70, category: "Systems" },
    { name: "Embedded Linux", level: 70, category: "Embedded" },
    { name: "Buildroot / Yocto", level: 65, category: "Embedded" },
    { name: "Arduino / ESP32", level: 90, category: "Embedded" },
    { name: "Python / PyTorch", level: 80, category: "AI" },
    { name: "Blender 3D", level: 60, category: "Creative" },
    { name: "Unreal Engine", level: 50, category: "Creative" }
  ];
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIcon = (category: string) => {
    switch (category) {
      case 'Web': return <Globe className="w-6 h-6" />;
      case 'Systems': return <Server className="w-6 h-6" />;
      case 'Embedded': return <Cpu className="w-6 h-6" />;
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'Creative': return <PenTool className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const getColor = (category: string) => {
    switch (category) {
      case 'Web': return {
        gradient: 'from-blue-500/20 to-cyan-500/20',
        spotlight: 'rgba(56, 189, 248, 0.15)',
        text: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        progress: 'bg-blue-500',
      };
      case 'Systems': return {
        gradient: 'from-orange-500/20 to-red-500/20',
        spotlight: 'rgba(249, 115, 22, 0.15)',
        text: 'text-orange-400',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20',
        progress: 'bg-orange-500',
      };
      case 'Embedded': return {
        gradient: 'from-emerald-500/20 to-green-500/20',
        spotlight: 'rgba(16, 185, 129, 0.15)',
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        progress: 'bg-emerald-500',
      };
      case 'AI': return {
        gradient: 'from-violet-500/20 to-purple-500/20',
        spotlight: 'rgba(139, 92, 246, 0.15)',
        text: 'text-violet-400',
        bg: 'bg-violet-500/10',
        border: 'border-violet-500/20',
        progress: 'bg-violet-500',
      };
      default: return {
        gradient: 'from-slate-500/20 to-gray-500/20',
        spotlight: 'rgba(148, 163, 184, 0.15)',
        text: 'text-slate-400',
        bg: 'bg-slate-500/10',
        border: 'border-slate-500/20',
        progress: 'bg-slate-500',
      };
    }
  }

  const SkillCard = ({ category, idx }: { category: string, idx: number }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;

      const div = divRef.current;
      const rect = div.getBoundingClientRect();

      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
      setIsFocused(true);
      setOpacity(1);
    };

    const handleBlur = () => {
      setIsFocused(false);
      setOpacity(0);
    };

    const handleMouseEnter = () => {
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    const colors = getColor(category);
    const categorySkills = SKILLS.filter(s => s.category === category);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1, duration: 0.5 }}
        ref={divRef}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative overflow-hidden rounded-3xl border border-white/5 bg-gray-900/40 backdrop-blur-xl transition-colors duration-500 group`}
      >
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${colors.spotlight}, transparent 40%)`,
          }}
        />

        <div className="relative p-6 md:p-8 h-full flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-xl ${colors.bg} ${colors.text}`}>
              {getIcon(category)}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-100">
              {category}
            </h3>
          </div>

          <div className="space-y-5 flex-grow">
            {categorySkills.map((skill, skillIdx) => (
              <div key={skill.name}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
                    {skill.name}
                  </span>
                  <span className={`text-xs font-mono font-medium ${colors.text} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-800/50 overflow-hidden backdrop-blur-sm">
                  <motion.div
                    className={`h-full ${colors.progress} shadow-[0_0_10px_rgba(0,0,0,0.2)]`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.05 + 0.3, duration: 1, ease: "circOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="py-32 relative z-10 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-30 animate-pulse-slow delay-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Technical <span className="text-gradient">Stacks</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive toolkit for building robust, scalable, and intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <SkillCard key={category} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Server, Cpu, Brain, Layers, Database, Globe, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIcon = (category: string) => {
    switch(category) {
      case 'Web': return <Globe className="w-6 h-6" />;
      case 'Systems': return <Server className="w-6 h-6" />;
      case 'Embedded': return <Cpu className="w-6 h-6" />;
      case 'AI': return <Brain className="w-6 h-6" />;
      case 'Creative': return <PenTool className="w-6 h-6" />;
      default: return <Layers className="w-6 h-6" />;
    }
  };

  const getColor = (category: string) => {
      switch(category) {
        case 'Web': return 'from-blue-500/20 to-cyan-500/20 text-blue-400';
        case 'Systems': return 'from-orange-500/20 to-red-500/20 text-orange-400';
        case 'Embedded': return 'from-green-500/20 to-emerald-500/20 text-green-400';
        case 'AI': return 'from-purple-500/20 to-pink-500/20 text-purple-400';
        default: return 'from-gray-500/20 to-slate-500/20 text-gray-400';
      }
  }

  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Stack</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
             A holistic approach to engineering, mastering tools from the metal up to the cloud.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-3xl p-8 glass border border-white/5 hover:border-white/10 transition-all duration-300 relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColor(category).split(' ')[0]} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-2xl bg-white/5 mb-6 ${getColor(category).split(' ').pop()}`}>
                    {getIcon(category)}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{category}</h3>
                
                <div className="flex flex-wrap gap-3">
                  {SKILLS.filter(s => s.category === category).map((skill) => (
                    <div key={skill.name} className="relative group/skill">
                        <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                             <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                        </div>
                        {/* Tooltip for percentage */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black rounded text-xs text-white opacity-0 group-hover/skill:opacity-100 transition-opacity whitespace-nowrap">
                            {skill.level}% Proficiency
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
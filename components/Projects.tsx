import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative h-full w-full rounded-3xl bg-gray-900/40 border border-white/5 p-4 md:p-6 backdrop-blur-md hover:border-primary/50 transition-colors duration-300"
    >
      <div style={{ transform: "translateZ(50px)" }} className="relative h-48 md:h-60 rounded-2xl overflow-hidden mb-6 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20">
             <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-mono text-primary border border-primary/20 shadow-lg">
                {project.category}
             </span>
        </div>
      </div>

      <div style={{ transform: "translateZ(25px)" }}>
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
            {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t: string) => (
                <span key={t} className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2 py-1 rounded-md font-mono">
                    {t}
                </span>
            ))}
        </div>

        <div className="flex items-center gap-4 pt-2 border-t border-white/5">
            <button className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium">
                <Github size={18} /> Source Code
            </button>
            <button className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors font-medium">
                <ExternalLink size={18} /> Live Demo
            </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Featured <span className="text-primary">Projects</span>
                </motion.h2>
                <p className="text-gray-400 max-w-lg text-lg">
                  A selection of my work in embedded systems, web development, and AI.
                </p>
            </div>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group text-white hover:text-primary transition-colors flex items-center gap-2 font-mono text-sm border-b border-transparent hover:border-primary pb-1">
                View all on GitHub <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 perspective-1000">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Project, Skill } from './types';

export const ANIMESH_PROFILE = {
  name: "Animesh Dhakal",
  title: "Generalist Engineer",
  subtitle: "Bridging the gap between Silicon and Software",
  about: `I am a Full Stack & Embedded Systems Developer with a passion for Open Source. Currently an Engineering Student at Pulchowk Campus (IOE). I specialize in building scalable web applications and robust embedded systems, comfortably moving between React, Rust, and raw hardware registers.`,
  education: [
    {
      institution: "Pulchowk Campus (IOE), Tribhuvan University",
      degree: "B.E. in Electronics, Communication, and Information Engineering",
      year: "2024 - Present"
    },
    {
      institution: "Valmiki Shiksha Sadan",
      degree: "High School (Science)",
      year: "2022 - 2024"
    }
  ] as { institution: string; degree: string; year: string; note?: string }[]
};

export const SKILLS: Skill[] = [
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

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Embedded Linux Build System",
    description: "Custom Buildroot configuration for an ARM-based development board involving kernel patching and custom Qt6 driver integration.",
    tech: ["Buildroot", "C", "Linux Kernel", "Qt"],
    image: "https://picsum.photos/seed/linux/800/600",
    category: "Embedded"
  },
  {
    id: "2",
    title: "High-Performance Portfolio",
    description: "A modern, server-side rendered portfolio built with Next.js and Framer Motion, optimized for 100/100 Lighthouse scores.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/seed/web/800/600",
    category: "Web"
  },
  {
    id: "3",
    title: "Rust System Monitor",
    description: "A cross-platform terminal-based system monitor written in Rust, featuring real-time CPU and memory visualization.",
    tech: ["Rust", "TUI", "Systems Programming"],
    image: "https://picsum.photos/seed/rust/800/600",
    category: "Systems"
  },
  {
    id: "4",
    title: "AI Traffic Analysis",
    description: "Computer Vision project using PyTorch to analyze traffic density in Kathmandu from CCTV feeds.",
    tech: ["Python", "PyTorch", "OpenCV", "YOLO"],
    image: "https://picsum.photos/seed/ai/800/600",
    category: "AI"
  }
];

export const SYSTEM_INSTRUCTION = `
You are a helpful AI assistant for Animesh Dhakal's personal portfolio website.
Animesh is a highly skilled software developer and engineering student at Pulchowk Campus (IOE), Nepal.
He calls himself a "Generalist Engineer" and works with Web (React, Node, TS), Systems (Rust, C++, Qt), and Embedded (Linux, Arduino) technologies.
He is also interested in AI (PyTorch) and Creative Tech (Blender, Unreal).
Your goal is to answer visitor questions about Animesh's background, skills, and projects in a professional, concise, and slightly technical tone.
If asked for contact info, suggest looking at the Contact section.
Do not hallucinate projects not listed in the context.
`;
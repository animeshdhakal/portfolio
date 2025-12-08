import React from 'react';

import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Full Stack & Embedded Systems Developer</h3>
            <p className="text-gray-400 leading-relaxed">
              I am a Full Stack & Embedded Systems Developer with a passion for Open Source. Currently an Engineering Student at Pulchowk Campus (IOE). I specialize in building scalable web applications and robust embedded systems, comfortably moving between React, Rust, and raw hardware registers.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education History
            </h3>

            <div className="relative border-l-2 border-white/10 ml-3 space-y-10 pl-8">
              <div className="relative">
                <div className="absolute -left-[45px] bg-darker p-1">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-darker"></div>
                </div>
                <h4 className="text-lg font-bold text-white">Pulchowk Campus (IOE), Tribhuvan University</h4>
                <p className="text-primary font-medium">B.E. in Electronics, Communication, and Information Engineering</p>
                <p className="text-sm text-gray-500 mb-2">2024 - Present</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[45px] bg-darker p-1">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-darker"></div>
                </div>
                <h4 className="text-lg font-bold text-white">Valmiki Shiksha Sadan</h4>
                <p className="text-primary font-medium">High School (Science)</p>
                <p className="text-sm text-gray-500 mb-2">2022 - 2024</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[45px] bg-darker p-1">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-darker"></div>
                </div>
                <h4 className="text-lg font-bold text-white">Gyan Jyoti English School</h4>
                <p className="text-primary font-medium">Secondary Education (SEE)</p>
                <p className="text-sm text-gray-500 mb-2">Completed 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
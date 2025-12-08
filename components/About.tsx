import React from 'react';
import { ANIMESH_PROFILE } from '../constants';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-darker relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">Full Stack & Embedded Systems Developer</h3>
            <p className="text-gray-400 leading-relaxed">
              {ANIMESH_PROFILE.about}
            </p>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-gray-400">Open Source Contribs</div>
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" /> Education History
            </h3>
            
            <div className="relative border-l-2 border-white/10 ml-3 space-y-10 pl-8 pb-4">
              {ANIMESH_PROFILE.education.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[39px] bg-darker p-1">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-darker"></div>
                  </div>
                  <h4 className="text-lg font-bold text-white">{edu.institution}</h4>
                  <p className="text-primary font-medium">{edu.degree}</p>
                  <p className="text-sm text-gray-500 mb-2">{edu.year}</p>
                  {edu.note && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs border border-yellow-500/20">
                      <Award size={12} /> {edu.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-transparent border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                   <BookOpen className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Current Focus</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Deepening knowledge in Electronics & Communication Engineering while actively maintaining open-source repositories and freelancing on embedded projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
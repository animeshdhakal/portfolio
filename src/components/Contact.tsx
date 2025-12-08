import React from "react";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 border-t border-white/5 relative"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #020617)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Let's Build Something Amazing
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Whether you have a question about embedded systems, want to
          collaborate on an open-source project, or just want to say hi, I'll
          try my best to get back to you!
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <a
            href="mailto:hello@animeshdhakal.com.np"
            className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all group"
          >
            <div className="bg-primary/20 p-2 rounded-lg text-primary group-hover:scale-110 transition-transform">
              <Mail />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Email
              </div>
              <div className="text-white font-medium">
                hello@animeshdhakal.com.np
              </div>
            </div>
          </a>

          <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-xl border border-white/10">
            <div className="bg-primary/20 p-2 rounded-lg text-primary">
              <MapPin />
            </div>
            <div className="text-left">
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Location
              </div>
              <div className="text-white font-medium">Kathmandu, Nepal</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/animeshdhakal"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/animeshdhakal/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-8 h-8" />
          </a>
        </div>

        <div className="mt-12 text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Animesh Dhakal. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Contact;

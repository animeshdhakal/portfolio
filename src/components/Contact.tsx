import React, { useState } from "react";
import { Mail, MapPin, Linkedin, Github, Check, Copy, ArrowUp } from "lucide-react";

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "theanimeshdhakal@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-xl mx-auto">
          <div className="font-mono text-xs text-cyan-400 mb-1 uppercase tracking-widest">
            05 // Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get in Touch
          </h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-14">
          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Email</h3>
              <p className="text-xs text-slate-200 font-mono mt-1 break-all">
                {email}
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-mono text-xs font-semibold text-center transition-colors"
              >
                Send Email
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 transition-colors"
                title="Copy email"
                aria-label="Copy email address"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Location</h3>
              <p className="text-xs text-slate-200 mt-1">
                Kathmandu &amp; Lalitpur, Nepal
              </p>
              <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                Pulchowk Campus (IOE)
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>UTC+5:45</span>
            </div>
          </div>

          {/* Profiles */}
          <div className="p-5 rounded-2xl bg-[#0d121c] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                <Github className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">Links</h3>
              <p className="text-xs text-slate-200 mt-1">
                GitHub &amp; LinkedIn
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center gap-2">
              <a
                href="https://github.com/animeshdhakal"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs text-center transition-colors flex items-center justify-center gap-1"
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/animeshdhakal"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-200 font-mono text-xs text-center transition-colors flex items-center justify-center gap-1"
              >
                <Linkedin className="w-3 h-3" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Animesh Dhakal
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

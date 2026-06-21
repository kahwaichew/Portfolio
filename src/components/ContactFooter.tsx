import { motion } from 'motion/react';
import { Mail, Linkedin, MapPin, GraduationCap, ArrowUp } from 'lucide-react';

export default function ContactFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-[#0b1329] text-white pt-20 pb-8 relative overflow-hidden border-t border-slate-900">
      {/* Dynamic Background subtle blur lights */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-brand/10 rounded-full blur-3xl -z-5 animate-pulse" />
      <div className="absolute top-0 right-10 w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-2xl -z-5" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 items-start">
          {/* Left Column (Let's build something together) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="footer-left-content">
            {/* Contact label */}
            <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-amber-400 text-amber-950 mb-4">
              Contact
            </span>

            {/* Main call to action */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight text-white mb-4" id="footer-cta-heading">
              Let's build something <span className="text-amber-400 font-extrabold relative inline-block">great<span className="absolute left-0 bottom-0.5 w-full h-1 bg-amber-400/30 rounded-full"></span></span> together.
            </h2>

            <p className="text-slate-400 font-medium text-base sm:text-lg mb-8 max-w-lg">
              I'm open to full-time roles in mobile, frontend, backend, or full-stack.
            </p>

            {/* Communication Pills */}
            <div className="flex flex-wrap gap-4" id="footer-actions">
              <a
                href="mailto:chewkw30@gmail.com"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20 transition-all duration-150"
              >
                <Mail className="w-4 h-4 mr-2" />
                chewkw30@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/kahwaichew" // Generic/authentic placeholder matching user profile
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-sm bg-white hover:bg-slate-100 text-slate-800 transition-all duration-150"
              >
                <Linkedin className="w-4 h-4 mr-2 text-[#0077b5]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column (Location and Education Card) */}
          <div className="lg:col-span-5 w-full" id="footer-right-content">
            <div className="bg-[#101a35]/90 border border-slate-800 rounded-3xl p-8 flex flex-col space-y-8" id="footer-details-card">
              {/* Location Block */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-2xl flex items-center justify-center text-amber-400 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block mb-1">
                    Location
                  </span>
                  <p className="text-lg font-display font-extrabold text-white">
                    Johor, Malaysia
                  </p>
                </div>
              </div>

              {/* Education Block */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-slate-800/80 border border-slate-700/50 rounded-2xl flex items-center justify-center text-[#3b82f6] flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <span className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase block mb-1">
                    Education
                  </span>
                  <p className="text-lg font-display font-extrabold text-white">
                    MMU — Multimedia University
                  </p>
                  <p className="text-xs text-slate-400 mt-1 font-medium">
                    CGPA: 3.93 <span className="mx-2 text-slate-600">•</span> Minor: Security Tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="border-slate-800 my-8" />

        {/* Outer bottom copyright footer bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4" id="footer-bar">
          {/* Logo */}
          <div className="flex items-center space-x-0.5" id="footer-logo">
            <span className="font-display font-black text-xl text-white tracking-tight">ckw</span>
            <span className="text-brand font-black text-2xl font-display leading-none">.</span>
          </div>

          {/* Copyright/Brief */}
          <div className="text-slate-500 font-medium text-xs text-center sm:text-right" id="footer-copyright-text">
            Chew Kah Wai — Software Engineer · 2026
          </div>

          {/* Quick scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-750 border border-slate-700/60 flex items-center justify-center text-white transition-all cursor-pointer shadow-xs hover:-translate-y-0.5 active:translate-y-0"
            title="Scroll to Top"
            id="footer-scroll-top-btn"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}

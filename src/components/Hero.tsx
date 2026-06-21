import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Download, Laptop, Smartphone, Palette } from 'lucide-react';
import ResumeModal from './ResumeModal';

export default function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const avatarPath = '/src/assets/images/avatar.png';

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="relative w-full pt-10 pb-20 md:py-24 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50/50 overflow-hidden">
      {/* Decorative Blur Background Circles */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gradient-to-bl from-brand/10 to-indigo-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left column info - 7 cols on large screens */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
          id="hero-content"
        >
          {/* Opportunities chip */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-[#d1fae5] bg-[#eceff9]/70 mb-6"
            id="hero-opportunity-badge"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase font-sans">
              Open to Opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 leading-tight mb-4"
            id="hero-heading"
          >
            Hi, I'm <span className="text-brand bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Chew Kah Wai</span>.
          </motion.h1>

          {/* Role subtitle/tag */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 tracking-tight leading-relaxed mb-6 flex flex-wrap items-center gap-x-2 gap-y-1"
            id="hero-roles"
          >
            <span className="text-brand-dark font-semibold">Software Engineer</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#3b82f6]">Mobile & Full-Stack Developer</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#ec4899]">UI/UX Enthusiast</span>
          </motion.p>

          {/* Intro paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-10"
            id="hero-paragraph"
          >
            I build cross-platform mobile apps, web platforms, and end-to-end systems — from pixel-perfect UI to production-ready APIs. 3+ years of shipping real products used by real people.
          </motion.p>

          {/* Interactive buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-row flex-wrap gap-4 mb-14"
            id="hero-actions"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setIsResumeOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm bg-white border border-slate-200 text-slate-750 shadow-sm hover:border-brand hover:text-brand hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2 text-slate-500" />
              Download Resume
            </button>
          </motion.div>

          {/* Simple Metrics */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-10 md:gap-14 border-t border-slate-100 pt-8 w-full max-w-md"
            id="hero-metrics"
          >
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">3.93</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-1">CGPA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">3+</span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-1">Years Experience</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column illustration - 5 cols */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.3 }}
          className="lg:col-span-5 flex flex-col items-center justify-center relative mt-8 lg:mt-0"
          id="hero-illustration"
        >
          {/* Behind Circle Backdrop Container */}
          <div className="relative w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 flex items-center justify-center rounded-full bg-gradient-to-tr from-brand/10 to-brand/3 bg-white p-3 shadow-inner">
            {/* Soft backdrop circle inside */}
            <div className="absolute inset-4 rounded-full bg-[#cbd5ff]/50 mix-blend-multiply filter blur-sm animate-pulse" />
            
            {/* The 3D Avatar Image rounded-full */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10 bg-slate-100 flex items-center justify-center">
              <img
                src={avatarPath}
                alt="Chew Kah Wai - software engineer 3D character"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Soft Badge overlay at the bottom matching the reference exactly */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 100 }}
              className="absolute -bottom-2 z-25 bg-white border border-slate-100 rounded-2xl shadow-xl px-5 py-3 flex items-center space-x-3.5 max-w-xs"
              id="hero-floating-badge"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-brand flex-shrink-0">
                <Laptop className="w-4 h-4" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-800 leading-tight">Software Engineer</h4>
                <p className="text-[9px] font-mono font-semibold text-slate-500 tracking-wider uppercase mt-0.5">
                  MOBILE • WEB • UI/UX
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

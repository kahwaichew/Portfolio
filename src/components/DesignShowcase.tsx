import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DESIGN_SHOWCASE } from '../data';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Move 
} from 'lucide-react';

export default function DesignShowcase() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [zoomScale, setZoomScale] = useState<number>(1);

  // Monitor keyboard navigation
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIdx(null);
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const handleNext = () => {
    setZoomScale(1);
    setSelectedIdx((prev) => (prev !== null ? (prev + 1) % DESIGN_SHOWCASE.length : 0));
  };

  const handlePrev = () => {
    setZoomScale(1);
    setSelectedIdx((prev) => 
      prev !== null 
        ? (prev - 1 + DESIGN_SHOWCASE.length) % DESIGN_SHOWCASE.length 
        : DESIGN_SHOWCASE.length - 1
    );
  };

  const currentItem = selectedIdx !== null ? DESIGN_SHOWCASE[selectedIdx] : null;

  return (
    <section id="design" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-16 flex flex-col items-start" id="design-header">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#fef3c7] text-amber-700 mb-3 border border-amber-100">
            UI/UX Design
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight" id="design-title">
            Design Showcase
          </h2>
          <p className="text-slate-500 font-medium text-sm mt-2 tracking-wide" id="design-subtitle">
            Selected UI/UX works — from wireframe to pixel-perfect
          </p>
        </div>

        {/* Alternating Showcase Rows */}
        <div className="space-y-24" id="design-items-container">
          {DESIGN_SHOWCASE.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`}
                id={`design-item-row-${item.id}`}
              >
                {/* Image panel (takes 6 columns) */}
                <motion.div
                  initial={{ opacity: 0, x: item.imageLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 w-full ${item.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                  id={`design-img-frame-${item.id}`}
                >
                  <div 
                    onClick={() => {
                      setSelectedIdx(index);
                      setZoomScale(1);
                    }}
                    className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-300 group relative cursor-zoom-in"
                  >
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} UI/UX Showcase`}
                      className="w-full h-auto aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    {/* Glossy Overlay with action prompt */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-xs text-slate-800 rounded-full font-bold text-xs tracking-wide shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Click to Zoom</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text Content panel (takes 6 columns) */}
                <motion.div
                  initial={{ opacity: 0, x: item.imageLeft ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6 }}
                  className={`lg:col-span-6 flex flex-col items-start ${item.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
                  id={`design-text-col-${item.id}`}
                >
                  {/* Category */}
                  <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight mb-4 hover:text-indigo-600 cursor-pointer transition-colors"
                      onClick={() => {
                        setSelectedIdx(index);
                        setZoomScale(1);
                      }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xl">
                    {item.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2" id={`design-badges-${item.id}`}>
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-150 shadow-2xs hover:border-indigo-100 hover:text-indigo-600 transition-all duration-150"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Zoom Dialog Modal */}
      <AnimatePresence>
        {selectedIdx !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
            id="lightbox-backdrop"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between gap-4 w-full max-w-7xl mx-auto bg-slate-900/60 p-3 sm:px-6 sm:py-4 rounded-2xl border border-white/5 backdrop-blur-md">
              <div className="text-left">
                <span className="inline-block text-[10px] sm:text-xs font-bold font-mono tracking-wider text-slate-400 uppercase">
                  UI/UX SHOWCASE DETAILS
                </span>
                <span className="block text-sm sm:text-base text-white font-extrabold truncate max-w-[200px] sm:max-w-sm">
                  {currentItem.title}
                </span>
              </div>

              {/* Dynamic Zoom Control Indicators */}
              <div className="flex items-center gap-1 sm:gap-2 bg-slate-950/50 p-1 rounded-xl border border-white/5">
                <button
                  onClick={() => setZoomScale(prev => Math.max(prev - 0.5, 1))}
                  disabled={zoomScale <= 1}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-200"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4 sm:w-5 h-5" />
                </button>
                <span className="px-2 font-mono text-[10px] sm:text-xs font-semibold text-slate-300 select-none min-w-[50px] text-center">
                  {Math.round(zoomScale * 100)}%
                </span>
                <button
                  onClick={() => setZoomScale(prev => Math.min(prev + 0.5, 4))}
                  disabled={zoomScale >= 4}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-200"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4 sm:w-5 h-5" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  disabled={zoomScale === 1}
                  className="p-1.5 sm:p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors duration-200"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4 sm:w-5 h-5" />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition-all active:scale-95 duration-200"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Panning & Interactive Drag Container */}
            <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full my-4 select-none">
              {/* Previous Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 text-slate-300 hover:bg-slate-900/90 hover:text-white backdrop-blur-xs transition-all duration-200 border border-white/10 group active:scale-95"
                title="Previous (ArrowLeft)"
              >
                <ChevronLeft className="w-5.5 h-5.5 sm:w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
              </button>

              {/* Zoom and Drag Stage */}
              <div className="w-full h-full max-h-[58vh] relative flex items-center justify-center">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                  className="relative max-h-full max-w-full flex items-center justify-center"
                >
                  <motion.img
                    src={currentItem.imageSrc}
                    alt={`${currentItem.title} Enlarged Interface Showcase`}
                    drag={zoomScale > 1}
                    dragConstraints={{
                      left: -250 * (zoomScale - 1),
                      right: 250 * (zoomScale - 1),
                      top: -150 * (zoomScale - 1),
                      bottom: 150 * (zoomScale - 1)
                    }}
                    dragElastic={0.08}
                    style={{ scale: zoomScale }}
                    className={`max-h-[56vh] max-w-full rounded-2xl object-contain shadow-2xl transition-transform duration-200 select-none ${
                      zoomScale > 1 ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* Next Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3.5 rounded-full bg-slate-900/60 text-slate-300 hover:bg-slate-900/90 hover:text-white backdrop-blur-xs transition-all duration-200 border border-white/10 group active:scale-95"
                title="Next (ArrowRight)"
              >
                <ChevronRight className="w-5.5 h-5.5 sm:w-6 h-6 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Zoom & Drag HUD Prompt */}
              {zoomScale > 1 && (
                <div className="absolute top-2 px-3 py-1 bg-indigo-500/80 backdrop-blur-xs text-white rounded-full text-[10px] font-bold tracking-widest uppercase flex items-center gap-1.5 border border-indigo-400/20 select-none pointer-events-none shadow-md">
                  <Move className="w-3 h-3" />
                  <span>Interactive Drag Active</span>
                </div>
              )}
            </div>

            {/* Bottom Meta & Description Info card */}
            <div className="max-w-4xl mx-auto w-full bg-slate-900/70 border border-white/5 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-xs font-bold text-indigo-400 tracking-wider uppercase">
                      {currentItem.category}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                      Design {selectedIdx + 1} of {DESIGN_SHOWCASE.length}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-display font-black text-white">
                    {currentItem.title}
                  </h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                    {currentItem.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 items-center self-start md:self-center">
                  {currentItem.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


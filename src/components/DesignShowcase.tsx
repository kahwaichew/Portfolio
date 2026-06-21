import { motion } from 'motion/react';
import { DESIGN_SHOWCASE } from '../data';
import { Compass } from 'lucide-react';

export default function DesignShowcase() {
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
            // Support alternating pattern, or stack logically on small devices
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
                  <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all duration-300 group relative">
                    <img
                      src={item.imageSrc}
                      alt={`${item.title} UI/UX Showcase`}
                      className="w-full h-auto aspect-4/3 object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                  <span className="text-xs font-bold tracking-widest text-brand uppercase mb-2">
                    {item.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-3xl font-display font-extrabold text-slate-900 tracking-tight mb-4 hover:text-brand transition-colors">
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
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-slate-500 bg-slate-50 border border-slate-150 shadow-2xs hover:border-brand/30 hover:text-brand transition-all duration-150"
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
    </section>
  );
}

import { motion } from 'motion/react';
import { RESEARCH_ITEMS } from '../data';
import { ExternalLink, BookOpen, ShieldCheck } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="w-full py-20 bg-indigo-50/20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-12 flex flex-col items-start" id="research-header">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
            Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight" id="research-title">
            Research & Publications
          </h2>
        </div>

        {/* Publications List */}
        <div className="space-y-6" id="research-list">
          {RESEARCH_ITEMS.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ y: 25, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, shadow: '0 12px 25px -10px rgba(79, 70, 229, 0.1)' }}
              className="bg-white rounded-2xl border border-slate-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-200"
              id={`research-card-${paper.id}`}
            >
              {/* Paper Information (Left/Center) */}
              <div className="flex-grow flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  {/* Journal/Proceedings indicator */}
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 font-mono uppercase block mb-1">
                    {paper.publishedIn}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-display font-extrabold text-slate-800 leading-snug hover:text-brand transition-colors">
                    {paper.title}
                  </h3>

                  {/* Categories Tags */}
                  <div className="flex flex-wrap gap-2 mt-4" id={`research-tags-${paper.id}`}>
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-wide text-slate-500 bg-slate-50 border border-slate-150"
                      >
                        <ShieldCheck className="w-3 h-3 mr-1 text-[#3b82f6]" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Action Button (Right) */}
              <div className="w-full md:w-auto flex-shrink-0 flex items-center justify-start md:justify-end">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-sans font-bold text-xs bg-brand text-white shadow-sm shadow-brand/20 hover:bg-brand-dark transition-all duration-150 group w-full md:w-auto text-center"
                  id={`research-btn-${paper.id}`}
                >
                  View Paper
                  <ExternalLink className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

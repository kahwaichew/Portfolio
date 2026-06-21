import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data';
import { Smartphone, Code, Database, Compass } from 'lucide-react';

export default function Skills() {
  // Let's map icons to skill divisions for visual excellence
  const getIcon = (id: string) => {
    switch (id) {
      case 'mobile':
        return <Smartphone className="w-5 h-5 text-indigo-600 animate-pulse" />;
      case 'web-backend':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'data-infra':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'design-tools':
        return <Compass className="w-5 h-5 text-rose-600" />;
      default:
        return <Code className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="skills" className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-left mb-12 flex flex-col items-start" id="skills-heading-container">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-indigo-50 text-indigo-700 mb-3 border border-indigo-100">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight" id="skills-title">
            What I work with
          </h2>
        </div>

        {/* Categories Grid - 4 Columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="skills-grid">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 10px 30px -15px rgba(0,0,0,0.08)' }}
              className="bg-slate-50/50 hover:bg-white rounded-2xl border border-slate-100 p-6 flex flex-col justify-start transition-all duration-200"
              id={`skill-card-${category.id}`}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-5">
                <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center">
                  {getIcon(category.id)}
                </div>
                <h3 className="font-display font-bold text-slate-800 text-lg">
                  {category.title}
                </h3>
              </div>

              {/* Tags list */}
              <div className="flex flex-wrap gap-2" id={`skill-tags-${category.id}`}>
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-150 shadow-xs hover:border-brand/40 hover:text-brand transition-colors duration-150"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

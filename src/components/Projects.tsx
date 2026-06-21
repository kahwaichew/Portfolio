import { motion } from 'motion/react';
import { PROJECTS } from '../data';
import { Users, Cpu, Award, Zap } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 bg-slate-50/50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-left mb-14 flex flex-col items-start" id="projects-header">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase bg-[#fee2e2] text-rose-700 mb-3 border border-rose-100">
            Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight" id="projects-title">
            Projects I've shipped
          </h2>
          <p className="text-slate-500 font-medium text-sm mt-2 tracking-wide" id="projects-subtitle">
            Real products • Real users • Real impact
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-grid">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col h-full shadow-xs hover:shadow-md transition-all duration-300"
              id={`project-card-${project.id}`}
            >
              {/* Header Color Band */}
              <div className={`${project.bannerColor} h-24 px-8 flex items-center`}>
                <span className="bg-white/80 backdrop-blur-xs text-slate-800 font-mono text-xs font-bold px-3 py-1 rounded-md shadow-2xs border border-white/50 tracking-wide uppercase">
                  {project.title}
                </span>
              </div>

              {/* Card Body - Flex Grow to distribute spacer */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title and Tag */}
                <h3 className="text-2xl font-display font-extrabold text-slate-900 tracking-tight transition-colors duration-150 hover:text-brand">
                  {project.title}
                </h3>
                <h4 className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mt-1 mb-5">
                  {project.tag}
                </h4>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Project Details Table/Rows */}
                <div className="space-y-4 border-t border-dashed border-slate-100 pt-5 mb-8 flex-grow">
                  {/* Users row */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start text-sm">
                    <span className="sm:col-span-3 font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase pt-0.5 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                      Users
                    </span>
                    <span className="sm:col-span-9 text-slate-700 font-medium text-xs leading-normal">
                      {project.users}
                    </span>
                  </div>

                  {/* Tech segment */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start text-sm">
                    <span className="sm:col-span-3 font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase pt-1.5 flex items-center">
                      <Cpu className="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                      Tech
                    </span>
                    <div className="sm:col-span-9 flex flex-wrap gap-1.5 mt-1 sm:mt-0">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-slate-50 border border-slate-150 rounded-sm text-[10px] font-bold text-slate-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role segment */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-1 items-start text-sm">
                    <span className="sm:col-span-3 font-mono text-[10px] font-bold text-slate-400 tracking-wider uppercase pt-0.5 flex items-center">
                      <Award className="w-3.5 h-3.5 mr-1.5 text-slate-400 flex-shrink-0" />
                      Role
                    </span>
                    <span className="sm:col-span-9 text-slate-600 text-xs leading-relaxed">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Footer Highlight Pill matching the screenshot */}
                <div className="mt-auto">
                  <div className="flex items-center space-x-2.5 bg-indigo-50/50 border border-indigo-100 rounded-2xl px-5 py-3 text-indigo-700">
                    <Zap className="w-4 h-4 text-brand-dark flex-shrink-0" />
                    <span className="text-[11px] font-semibold leading-normal font-sans">
                      {project.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

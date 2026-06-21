import { motion } from 'motion/react';

export default function Header() {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-100"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#about" className="flex items-center space-x-1 group" id="nav-logo">
          <span className="font-display font-extrabold text-2xl text-slate-800 tracking-tight transition-colors duration-200 group-hover:text-brand">
            ckw
          </span>
          <span className="text-brand font-black text-3xl font-display leading-none group-hover:animate-ping">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" id="nav-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 hover:text-brand transition-colors duration-150 py-2 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

      </div>
    </motion.header>
  );
}

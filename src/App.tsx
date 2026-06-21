/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DesignShowcase from './components/DesignShowcase';
import Research from './components/Research';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand/10 selection:text-brand" id="app-root-container">
      {/* Header / Navigation bar */}
      <Header />
      
      {/* Main Core Website Sections */}
      <main className="flex-grow">
        {/* Intro Hero Section */}
        <Hero />
        
        {/* What I work with section */}
        <Skills />
        
        {/* Projects section */}
        <Projects />
        
        {/* Design Showcase section */}
        <DesignShowcase />
        
        {/* Academic publications and papers */}
        <Research />
      </main>
      
      {/* Footer & Contact info */}
      <ContactFooter />
    </div>
  );
}

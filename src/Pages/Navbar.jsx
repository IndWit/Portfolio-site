import React, { useState, useEffect } from 'react';

export default function Navbar({ setCursorVariant }) {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'achievements', 'tech', 'education', 'volunteering', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect if section is near the middle of the viewport
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-gray-900/30 backdrop-blur-md border border-gray-800/50 rounded-full p-4 shadow-2xl">
        <div className="flex flex-col gap-5">
          {['hero', 'about', 'projects', 'achievements', 'tech', 'education', 'volunteering', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="group relative"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 scale-150 shadow-lg shadow-orange-500/50'
                  : 'bg-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:scale-125'
              }`}></div>
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-xs font-mono text-transparent bg-gradient-to-r from-orange-400 to-white bg-clip-text opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                {section.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
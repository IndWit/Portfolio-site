import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ setCursorVariant }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close menu after navigation
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

  const navItems = ['hero', 'about', 'projects', 'achievements', 'tech', 'education', 'volunteering', 'contact'];

  return (
    <>
      {/* Desktop Navigation - Side Dots */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="bg-gray-900/30 backdrop-blur-md border border-gray-800/50 rounded-full p-4 shadow-2xl">
          <div className="flex flex-col gap-5">
            {navItems.map((section) => (
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

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-gray-900/90 backdrop-blur-md border border-orange-500/30 rounded-full p-3 shadow-lg hover:border-orange-500 transition-all"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-orange-400" />
        ) : (
          <Menu className="w-6 h-6 text-orange-400" />
        )}
      </button>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Menu Content */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-gradient-to-br from-gray-900 to-black border-l border-orange-500/30 shadow-2xl transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-start gap-2 p-8 mt-20">
            {navItems.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`w-full text-left px-6 py-4 rounded-2xl font-mono text-lg transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-orange-400 hover:translate-x-2'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
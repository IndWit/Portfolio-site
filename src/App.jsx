import React, { useState, useEffect } from 'react';
// notice we are importing from './Pages' now
import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Achievements from './Pages/Achievements'; // Make sure you created this file
import Skills from './Pages/Skills';             // Matches your filename
import Education from './Pages/Education';       // Make sure you created this file
import Volunteering from './Pages/Volunteering'; // New component
import Contact from './Pages/Contact';

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden cursor-none">
      
      {/* Background Orbs */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 border-2 border-orange-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 hidden md:block"
        style={{
          left: `${mousePosition.x - 16}px`,
          top: `${mousePosition.y - 16}px`,
          transform: cursorVariant === 'hover' ? 'scale(2)' : 'scale(1)'
        }}
      ></div>

      <Navbar setCursorVariant={setCursorVariant} />
      
      <main>
        <Hero setCursorVariant={setCursorVariant} />
        <About />
        <Projects setCursorVariant={setCursorVariant} />
        <Achievements />
        <Skills />
        <Education />
        <Volunteering />
        <Contact setCursorVariant={setCursorVariant} />
      </main>

      <footer className="border-t border-gray-900 py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center font-black text-lg">
                IW
              </div>
              <div>
                <p className="text-gray-400 font-mono text-sm">© 2025 INDUMA WITHANAGE</p>
                <p className="text-gray-600 text-xs">ENGINEERED WITH PRECISION</p>
              </div>
            </div>
            <div className="flex gap-6">
              {['Github', 'Linkedin', 'Twitter'].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-gray-600 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-white hover:bg-clip-text transition-all font-mono text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
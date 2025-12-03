import React from 'react';
import { techStack } from '../data';

export default function TechStack() {
  return (
    <section id="tech" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-black mb-16 text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            TECH ARSENAL
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(techStack).map(([category, techs], index) => (
            <div key={category} className="relative bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}>
              
              {/* Floating tech icons in background */}
              <div className="absolute top-[60%] right-18 -translate-y-1/2 grid grid-cols-2 gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                {techs.slice(0, 4).map((tech, idx) => (
                  <div key={idx} className="w-8 h-8 animate-floatSlow" style={{ animationDelay: `${idx * 0.3}s` }}>
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6 text-cyan-400 relative z-10">{category}</h3>
              <div className="space-y-3 relative z-10">
                {techs.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <span className="font-mono text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
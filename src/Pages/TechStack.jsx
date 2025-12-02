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
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="bg-gray-900 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400 transition-all group">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">{category}</h3>
              <div className="space-y-3">
                {techs.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                    <span className="font-mono text-sm">{tech}</span>
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
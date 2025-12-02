import React from 'react';
import { techStack, softSkills } from '../data';

export default function Skills() {
  return (
    <section id="tech" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">SKILLS & EXPERTISE</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              TECHNICAL ARSENAL
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category} className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-white bg-clip-text">{category}</h3>
                </div>
                <div className="space-y-3">
                  {techs.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-150 transition-transform"></div>
                      <span className="font-mono text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              PROFESSIONAL SKILLS
            </span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="group relative px-8 py-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full hover:border-orange-500/50 transition-all duration-300 hover:scale-105 cursor-default">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 text-gray-300 font-mono text-sm group-hover:text-white transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
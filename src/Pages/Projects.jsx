import React from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data';

export default function Projects({ setCursorVariant }) {
  return (
    <section id="projects" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              SELECTED WORK
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-transparent transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative mb-6 -mx-8 -mt-8 h-48 overflow-hidden rounded-t-3xl">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}></div>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Icon with enhanced styling - only show if no image */}
                  {!project.image && (
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                      <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed text-base group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 border border-gray-700 bg-black/50 rounded-lg text-xs font-mono text-gray-300 group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm font-bold mr-2 tracking-wider">EXPLORE PROJECT</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

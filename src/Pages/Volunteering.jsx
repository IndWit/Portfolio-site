import React from 'react';
import { volunteering } from '../data';

export default function Volunteering() {
  return (
    <section id="volunteering" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">COMMUNITY</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              VOLUNTEERING
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteering.map((item, idx) => (
            <div key={idx} className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{item.role}</h3>
                    <p className="text-orange-500 font-mono text-sm mt-1">{item.organization}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

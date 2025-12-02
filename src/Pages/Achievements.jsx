import React from 'react';
import { achievements } from '../data';

export default function Achievements() {
  return (
    <section id="achievements" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">ACHIEVEMENTS</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              MILESTONES
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-transparent transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-600/5 to-orange-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500 to-transparent rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity"></div>

              <div className="relative z-10">
                {/* Icon with floating animation */}
                <div className="relative mb-6">
                  <div className="text-7xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                    {achievement.icon}
                  </div>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>

                {/* Year badge */}
                <div className="inline-block px-4 py-1.5 bg-black/50 border border-orange-500/30 rounded-full mb-4">
                  <span className="text-transparent bg-gradient-to-r from-orange-400 to-white bg-clip-text font-mono text-xs font-bold tracking-wider">
                    {achievement.year}
                  </span>
                </div>

                {/* Title with gradient on hover */}
                <h3 className="text-xl font-bold mb-3 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                  {achievement.desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 w-0 bg-gradient-to-r from-orange-500 to-transparent rounded-full group-hover:w-full transition-all duration-700"></div>
              </div>

              {/* Animated particles effect */}
              <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
            </div>
          ))}
        </div>

        {/* Optional: Add a decorative element below */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
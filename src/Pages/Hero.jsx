import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ setCursorVariant }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-6 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        
        {/* Main Content with Image and Text Overlay */}
        <div className="relative flex items-center justify-center min-h-[80vh]">
          
          {/* Text Behind Image - INDUMA */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tighter leading-none whitespace-nowrap">
              <div className="text-transparent bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 bg-clip-text">
                INDUMA
              </div>
            </h1>
          </div>

          {/* Profile Image - In Front of INDUMA */}
          <div className="relative z-20 flex items-center justify-center px-4">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                src="/profile.png" 
                alt="Induma Withanage" 
                className="relative w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Text In Front - WITHANAGE */}
          <div className="absolute inset-0 flex items-end justify-center z-30 pb-12 sm:pb-16 md:pb-20 pointer-events-none">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black tracking-tighter leading-none whitespace-nowrap">
              <div className="text-transparent bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text">
                WITHANAGE
              </div>
            </h1>
          </div>
        </div>

        {/* Subtitle and Description */}
        <div className="text-center relative z-30 -mt-12">
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-gray-500 to-gray-500"></div>
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-[0.3em] uppercase">Software Enthusiast</p>
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-gray-500 to-gray-500"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Building scalable solutions and engineering robust applications.
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16">
            <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text font-medium">Passionate about technology & UI/UX design.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-16 relative z-20">
          <button
            onClick={() => scrollTo('projects')}
            className="group relative px-12 py-5 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl font-bold text-base tracking-wide overflow-hidden shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-500 hover:scale-105"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="relative z-10 flex items-center gap-3">
              VIEW PROJECTS
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="group px-12 py-5 border-2 border-gray-700 bg-black/50 backdrop-blur-sm rounded-2xl hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-500 font-bold text-base tracking-wide hover:scale-105 shadow-lg"
            onMouseEnter={() => setCursorVariant('hover')}
            onMouseLeave={() => setCursorVariant('default')}
          >
            <span className="flex items-center gap-3">
              LET'S TALK
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 relative z-20">
          {[
            { Icon: Github, href: 'https://github.com/IndWit', label: 'GitHub' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/induma-withanage-279a44304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', label: 'LinkedIn' },
            { Icon: Mail, href: 'mailto:Indumawithanage1@gmail.com', label: 'Email' }
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target={social.Icon === Mail ? '_self' : '_blank'}
              rel={social.Icon === Mail ? '' : 'noopener noreferrer'}
              aria-label={social.label}
              className="group relative w-14 h-14 rounded-xl border border-gray-800 hover:border-transparent bg-gray-900/50 backdrop-blur-sm hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-orange-600/20 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-1"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              <social.Icon size={22} className="relative z-10 text-gray-400 group-hover:text-white transition-colors" />
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
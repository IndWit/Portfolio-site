import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">ABOUT ME</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              WHO I AM
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Description Section */}
          <div className="space-y-8">
            <div className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-orange-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -top-1 -left-1 w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-1 h-12 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full mb-4"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  I am a dedicated <span className="text-transparent bg-gradient-to-r from-orange-400 to-white bg-clip-text font-bold">Software Engineer</span> with a passion for building efficient and scalable applications.
                  I focus on writing clean code and solving complex problems.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 hover:border-orange-400/50 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-orange-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -bottom-1 -right-1 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-1 h-12 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full mb-4"></div>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  Always eager to learn new technologies and improve my skills. I enjoy working in collaborative environments and contributing to impactful projects.
                </p>
              </div>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="space-y-6">
            <div className="group relative bg-gradient-to-br from-gray-900/30 via-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 hover:border-orange-500 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black mb-2">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">10+</span>
                </div>
                <div className="text-gray-400 text-xl font-medium">Projects Completed</div>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-500 to-transparent rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-gray-900/30 via-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 hover:border-orange-600 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black mb-2">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">100%</span>
                </div>
                <div className="text-gray-400 text-xl font-medium">Commitment</div>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-orange-600 to-transparent rounded-full"></div>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-gray-900/30 via-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 hover:border-white transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-black mb-2">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">24/7</span>
                </div>
                <div className="text-gray-400 text-xl font-medium">Learner</div>
                <div className="mt-4 h-1 w-20 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
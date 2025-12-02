import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-32 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">EDUCATION</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              CREDENTIALS
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text font-mono text-sm font-bold mb-4">2020-2024</div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-white group-hover:bg-clip-text transition-all">B.Sc. Computer Science</h3>
              <div className="text-xl text-gray-400 mb-4">University Name</div>
              <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-transparent rounded-full mb-4"></div>
              <p className="text-gray-500 leading-relaxed">Specialization in Software Engineering</p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 hover:border-white/50 transition-all duration-500 hover:scale-105 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="relative z-10">
              <div className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-mono text-sm font-bold mb-4">2018-2020</div>
              <h3 className="text-3xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white to-orange-400 group-hover:bg-clip-text transition-all">High School Diploma</h3>
              <div className="text-xl text-gray-400 mb-4">School Name</div>
              <div className="h-1 w-16 bg-gradient-to-r from-white to-transparent rounded-full mb-4"></div>
              <p className="text-gray-500 leading-relaxed">Science Stream</p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-500"></div>
              <h3 className="text-2xl font-bold text-center text-transparent bg-gradient-to-r from-orange-500 to-white bg-clip-text">Certifications</h3>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-500"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Certification 1",
                "Certification 2",
                "Certification 3",
                "Certification 4"
              ].map((cert, idx) => (
                <div key={idx} className="group flex items-center gap-3 p-5 bg-black/50 border border-gray-800 rounded-2xl hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 hover:scale-105">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 group-hover:scale-150 transition-transform"></div>
                  <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
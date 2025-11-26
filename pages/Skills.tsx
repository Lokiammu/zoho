import React from 'react';
import { RESUME_DATA } from '../data';
import TiltCard from '../components/TiltCard';
import PageTransition from '../components/PageTransition';

const Skills: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/20">Technical Arsenal</h1>
          <p className="text-white/50 text-xl font-light">The tools I use to build the future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {RESUME_DATA.skills.map((skillGroup, index) => (
            <TiltCard 
              key={skillGroup.category} 
              className="p-8 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5"
              intensity={8}
            >
              <h3 className="text-2xl font-bold mb-6 text-white/90 flex items-center gap-3">
                <span className="w-8 h-1 bg-cyber-accent rounded-full"></span>
                {skillGroup.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((skill) => (
                  <div 
                    key={skill} 
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative bg-white/5 border border-white/10 px-4 py-2.5 text-sm font-mono text-white/70 group-hover:text-white group-hover:border-transparent transition-colors cursor-default backdrop-blur-sm">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
            <span className="w-2 h-8 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            Certifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESUME_DATA.certifications.map((cert, i) => (
              <div key={i} className="group relative p-1 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-cyber-accent/50 hover:to-cyber-secondary/50 transition-colors duration-500">
                <div className="bg-[#0a0a0a] rounded-[10px] p-5 h-full flex items-center gap-4 relative z-10">
                  <div className="min-w-[40px] h-[40px] rounded-full bg-white/5 flex items-center justify-center text-green-400 font-bold border border-white/10 group-hover:scale-110 transition-transform">
                     ✓
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{cert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
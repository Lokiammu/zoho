import React from 'react';
import TiltCard from '../components/TiltCard';
import PageTransition from '../components/PageTransition';
import { RESUME_DATA } from '../data';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">About Me</h1>
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-50"></div>
             <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">{RESUME_DATA.summary}</p>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10 pl-4">
            <div className="p-3 bg-white/5 rounded-xl text-cyber-accent border border-white/10 backdrop-blur-md">
              <Briefcase size={24} />
            </div>
            <h2 className="text-3xl font-bold">Experience</h2>
          </div>

          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-9 top-4 bottom-4 w-[2px] bg-gradient-to-b from-cyber-accent/50 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

            {RESUME_DATA.experience.map((exp, index) => (
              <div key={exp.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-9 md:left-1/2 w-4 h-4 -translate-x-1/2 mt-6 rounded-full bg-cyber-dark border-2 border-cyber-accent shadow-[0_0_15px_rgba(0,240,255,0.6)] z-10"></div>
                
                <div className="md:w-1/2 pl-20 md:pl-0">
                  <TiltCard className={`p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex justify-between items-start mb-2">
                       <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                       <span className="text-xs text-white/40 font-mono bg-white/5 px-2 py-1 rounded border border-white/5">{exp.period}</span>
                    </div>
                    <p className="text-cyber-accent font-mono text-sm mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-white/60 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-white/20 before:rounded-full">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </div>
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TiltCard className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-300 border border-purple-500/20">
                <GraduationCap size={24} />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            
            <div className="relative pl-4 border-l border-white/10">
              <h3 className="text-xl font-bold mb-1">B.Tech Information Technology</h3>
              <p className="text-white/50 mb-4">Velagapudi Ramakrishna Siddhartha Engineering College</p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-mono text-white/40 bg-white/5 px-3 py-1 rounded-full flex items-center gap-1">
                   <Calendar size={12} /> 2022 - 2026
                </span>
                <span className="text-xs font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  CGPA: 9.04/10
                </span>
              </div>
            </div>
          </TiltCard>

          <TiltCard className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-amber-500/10 rounded-xl text-amber-300 border border-amber-500/20">
                <Award size={24} />
              </div>
              <h2 className="text-2xl font-bold">Awards</h2>
            </div>
            
            <div className="space-y-4">
              {RESUME_DATA.achievements.map((award, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50 mt-2 group-hover:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="font-bold text-sm group-hover:text-amber-200 transition-colors">{award.title}</h4>
                    <p className="text-xs text-white/40">{award.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
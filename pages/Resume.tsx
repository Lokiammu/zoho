import React from 'react';
import { Download } from 'lucide-react';
import { RESUME_DATA } from '../data';
import PageTransition from '../components/PageTransition';

const Resume: React.FC = () => {
  return (
    <PageTransition>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl mb-8 items-center gap-4">
          <h1 className="text-4xl font-bold">Resume</h1>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105">
            <Download size={18} /> Download PDF
          </button>
        </div>

        {/* Paper visual on Glass Table */}
        <div className="relative w-full max-w-4xl p-1 md:p-4 rounded-lg glass-panel">
          <div className="w-full bg-[#fcfcfc] text-[#1a1a1a] p-8 md:p-16 shadow-xl rounded-sm min-h-[1000px] relative">
            
            {/* Header */}
            <div className="border-b-2 border-black pb-6 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h1 className="text-4xl font-serif font-bold tracking-tight mb-2 uppercase">{RESUME_DATA.name}</h1>
                  <div className="font-mono text-sm space-y-1 text-gray-600">
                     <p>{RESUME_DATA.contact.email} • {RESUME_DATA.contact.phone}</p>
                     <p>{RESUME_DATA.contact.location}</p>
                     <p className="text-blue-600">{RESUME_DATA.contact.linkedin}</p>
                  </div>
                </div>
                <div className="md:text-right">
                  <p className="font-bold text-lg">Education</p>
                  <p className="text-sm font-medium">Velagapudi Ramakrishna Siddhartha Eng. College</p>
                  <p className="text-sm italic text-gray-600">B.Tech IT (2022-2026)</p>
                  <span className="inline-block mt-2 text-xs font-bold bg-black text-white px-2 py-1">CGPA: 9.04/10</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mb-8">
              <h3 className="text-sm font-bold border-b-2 border-black mb-3 uppercase tracking-wider">Professional Summary</h3>
              <p className="text-sm leading-relaxed text-justify text-gray-800">{RESUME_DATA.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-sm font-bold border-b-2 border-black mb-4 uppercase tracking-wider">Professional Experience</h3>
              <div className="space-y-6">
                {RESUME_DATA.experience.map(exp => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                       <span className="font-bold text-base">{exp.role}</span>
                       <span className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">{exp.period}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-700 mb-2">{exp.company}</p>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.description.map((d, i) => (
                        <li key={i} className="text-sm text-gray-600 leading-snug pl-2">{d}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-sm font-bold border-b-2 border-black mb-4 uppercase tracking-wider">Selected Projects</h3>
              <div className="grid grid-cols-1 gap-6">
                {RESUME_DATA.projects.slice(0,4).map(proj => (
                  <div key={proj.id}>
                     <div className="flex justify-between items-baseline mb-1">
                        <span className="font-bold">{proj.title}</span>
                        <span className="text-xs text-gray-500">{proj.date}</span>
                     </div>
                     <p className="text-xs text-blue-600 mb-1 font-mono">{proj.techStack.join(' • ')}</p>
                     <p className="text-sm text-gray-700 leading-snug">{proj.fullDescription.substring(0, 150)}...</p>
                  </div>
                ))}
              </div>
            </div>

             {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-sm font-bold border-b-2 border-black mb-3 uppercase tracking-wider">Technical Proficiency</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm">
                {RESUME_DATA.skills.map(s => (
                   <div key={s.category} className="flex flex-col">
                     <span className="font-bold text-gray-900 mb-1">{s.category}</span>
                     <span className="text-gray-600">{s.items.join(', ')}</span>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
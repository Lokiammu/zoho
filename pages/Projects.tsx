import React, { useState } from 'react';
import { Search, ExternalLink, Github, X } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import PageTransition from '../components/PageTransition';
import { RESUME_DATA } from '../data';
import { Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI/ML', 'Web', 'IoT'];

  const filteredProjects = RESUME_DATA.projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.techStack.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      <div className="min-h-screen">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Selected Works</h1>
          
          {/* Glass Control Bar */}
          <div className="glass-panel rounded-2xl p-2 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex gap-1 overflow-x-auto w-full md:w-auto p-1">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden ${
                    filter === cat 
                      ? 'text-black font-bold shadow-lg' 
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {filter === cat && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-white"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={16} />
              <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-black/20 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-white/20 text-sm text-white placeholder-white/30 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group"
              >
                <TiltCard 
                  className="h-full rounded-2xl overflow-hidden flex flex-col bg-gradient-to-br from-white/5 to-transparent"
                  intensity={5}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="p-5 flex-grow flex flex-col relative">
                    {/* Glassy Overlay for content */}
                    <div className="absolute inset-0 bg-white/[0.02] pointer-events-none"></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-cyber-accent font-mono">{project.category}</span>
                        <span className="text-[10px] text-white/40 font-mono">{project.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 group-hover:text-cyber-accent transition-colors">{project.title}</h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[10px] font-mono bg-white/5 border border-white/5 px-2 py-1 rounded text-white/60">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Liquid Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                className="glass-panel w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl relative z-10 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              >
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-white text-white hover:text-black rounded-full p-2 transition-all backdrop-blur-md border border-white/10"
                >
                  <X size={20} />
                </button>

                <div className="relative h-72 md:h-96">
                   <img src={selectedProject.imageUrl} className="w-full h-full object-cover" alt="cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
                   <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                     <motion.div 
                       initial={{ opacity: 0, y: 20 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.2 }}
                     >
                       <div className="flex gap-2 mb-3">
                         <span className="px-3 py-1 bg-cyber-accent/20 border border-cyber-accent/30 text-cyber-accent font-bold text-xs rounded-full backdrop-blur-md">{selectedProject.category}</span>
                       </div>
                       <h2 className="text-4xl md:text-6xl font-bold text-white mb-2">{selectedProject.title}</h2>
                     </motion.div>
                   </div>
                </div>

                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-mono text-white/50 mb-3 uppercase tracking-wider">Overview</h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {selectedProject.fullDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-mono text-white/50 mb-3 uppercase tracking-wider">Impact</h3>
                      <div className="p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-transparent border-l-2 border-green-500">
                        <p className="text-green-200 font-medium">{selectedProject.impact}</p>
                      </div>
                    </div>

                    <div>
                       <h3 className="text-lg font-mono text-white/50 mb-3 uppercase tracking-wider">Tech Stack</h3>
                       <div className="flex flex-wrap gap-2">
                         {selectedProject.techStack.map(t => (
                           <span key={t} className="px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-sm hover:bg-white/10 transition-colors cursor-default">
                             {t}
                           </span>
                         ))}
                       </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                     <div className="glass-panel p-6 rounded-2xl bg-white/[0.02]">
                        <h4 className="text-sm font-bold text-white mb-4">Links</h4>
                        <div className="flex flex-col gap-3">
                           <a href="#" className="flex items-center justify-between px-4 py-3 bg-white text-black hover:bg-white/90 rounded-xl transition-colors font-bold shadow-lg shadow-white/10">
                              Live Demo <ExternalLink size={18} />
                           </a>
                           <a href="#" className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors border border-white/10">
                              Source Code <Github size={18} />
                           </a>
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
};

export default Projects;
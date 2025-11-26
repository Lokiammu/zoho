import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Trophy, Zap, ChevronRight, ChevronDown } from 'lucide-react';
import TiltCard from '../components/TiltCard';
import PageTransition from '../components/PageTransition';
import { RESUME_DATA } from '../data';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  // Generate random particles for ambient effect
  const particles = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.1,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  // Define Cube Faces style
  const faceStyle = "absolute inset-0 border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-[0px] shadow-[inset_0_0_30px_rgba(255,255,255,0.02)]";

  return (
    <PageTransition>
      <div className="flex flex-col relative overflow-hidden">
        
        {/* Abstract 3D Background Image for Hero */}
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
           <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
            alt="3D Abstract Liquid" 
            className="w-full h-full object-cover opacity-30 animate-pulse"
            style={{ animationDuration: '15s' }}
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/80 to-[#050505]"></div>
        </div>

        {/* Ambient Particles Layer */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-white blur-[1px]"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                opacity: p.opacity,
                animation: `float ${p.duration}s ease-in-out infinite`,
                animationDelay: `${p.delay}s`,
              }}
            />
          ))}
        </div>

        {/* HERO SECTION - Full Screen */}
        <section className="h-screen min-h-[800px] flex flex-col justify-center items-center text-center relative z-10 px-4">
          
          {/* 3D Glass Tesseract / Cube Model - Positioned BEHIND Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] perspective-1000 pointer-events-none z-0 opacity-40">
             {/* Orbital Rings */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full animate-spin-slow opacity-30"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] border border-white/5 rounded-full animate-spin-reverse-slow opacity-20"></div>
             
             {/* Core Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyber-accent/20 rounded-full blur-[100px] animate-pulse"></div>
             
             {/* Spinning Cube Assembly */}
             <div className="w-full h-full preserve-3d animate-tumble">
                <div className={faceStyle} style={{ transform: 'rotateY(0deg) translateZ(12rem)' }}></div>
                <div className={faceStyle} style={{ transform: 'rotateY(180deg) translateZ(12rem)' }}></div>
                <div className={faceStyle} style={{ transform: 'rotateY(90deg) translateZ(12rem)' }}></div>
                <div className={faceStyle} style={{ transform: 'rotateY(-90deg) translateZ(12rem)' }}></div>
                <div className={faceStyle} style={{ transform: 'rotateX(90deg) translateZ(12rem)' }}></div>
                <div className={faceStyle} style={{ transform: 'rotateX(-90deg) translateZ(12rem)' }}></div>
             </div>
          </div>

          {/* Typography Content - Layered ON TOP */}
          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 drop-shadow-2xl mix-blend-overlay">
                LOKESH
              </h1>
              <h1 className="text-7xl md:text-[10rem] font-bold tracking-tighter leading-none text-liquid mt-[-10px] md:mt-[-30px]">
                NARNE
              </h1>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center gap-6"
            >
              <div className="flex items-center gap-4 text-white/60 font-mono tracking-widest text-sm md:text-base uppercase">
                <span className="w-12 h-[1px] bg-cyber-accent/50"></span>
                {RESUME_DATA.tagline}
                <span className="w-12 h-[1px] bg-cyber-accent/50"></span>
              </div>

              <div className="flex gap-4 mt-4">
                <Link to="/projects">
                  <button className="px-8 py-3 bg-white text-black font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2">
                    View Work <ArrowRight size={16} />
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="px-8 py-3 glass-panel rounded-full hover:bg-white/10 transition-all font-mono border-white/20 text-white/80 hover:text-white">
                    Contact
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* Quick Stats - Separated Section */}
        <section className="relative z-10 max-w-7xl mx-auto w-full px-4 -mt-20 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TiltCard className="p-8 rounded-3xl flex flex-row items-center justify-between bg-black/40 border border-white/10 backdrop-blur-xl group hover:border-cyber-accent/30 transition-colors">
              <div>
                <h3 className="text-5xl font-bold text-white mb-1 group-hover:text-cyber-accent transition-colors">{RESUME_DATA.stats.projectsCompleted}+</h3>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Projects Delivered</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-300 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                <Code size={20} />
              </div>
            </TiltCard>
            
            <TiltCard className="p-8 rounded-3xl flex flex-row items-center justify-between bg-black/40 border border-white/10 backdrop-blur-xl group hover:border-purple-500/30 transition-colors">
              <div>
                <h3 className="text-5xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{RESUME_DATA.stats.hackathonsWon}+</h3>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Hackathons Won</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-300 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <Trophy size={20} />
              </div>
            </TiltCard>
            
            <TiltCard className="p-8 rounded-3xl flex flex-row items-center justify-between bg-black/40 border border-white/10 backdrop-blur-xl group hover:border-amber-500/30 transition-colors">
              <div>
                <h3 className="text-5xl font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">40%</h3>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest">Efficiency Boost</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-300 border border-amber-500/20 group-hover:scale-110 transition-transform">
                <Zap size={20} />
              </div>
            </TiltCard>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="relative z-10 px-4 max-w-7xl mx-auto w-full mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6 gap-4">
            <div>
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">Featured Work</h2>
               <p className="text-white/40 max-w-md">Highlighting the intersection of AI, Robotics, and Web Technologies.</p>
            </div>
            <Link to="/projects" className="text-sm font-mono text-white/50 hover:text-white flex items-center gap-2 transition-colors px-6 py-3 rounded-full border border-white/5 hover:bg-white/5 hover:border-white/20 bg-black/20 backdrop-blur-sm">
              VIEW ALL PROJECTS <ChevronRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESUME_DATA.projects.filter(p => p.featured).slice(0, 2).map((project) => (
               <TiltCard key={project.id} className="rounded-3xl overflow-hidden group h-[550px] border border-white/10 bg-black/20" intensity={10}>
                  {/* Background Image with Zoom Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-40" 
                    style={{ backgroundImage: `url(${project.imageUrl})` }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent"></div>
                  
                  {/* Floating Content */}
                  <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                    
                    {/* Top Tags */}
                    <div className="absolute top-8 left-8 flex gap-2">
                       <span className="text-xs font-bold tracking-wider text-black bg-white px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-4xl font-bold mb-4 leading-tight drop-shadow-lg group-hover:text-cyber-accent transition-colors">{project.title}</h3>
                      <p className="text-white/70 text-lg mb-8 line-clamp-2 max-w-lg font-light leading-relaxed">{project.description}</p>
                      
                      <div className="flex items-center justify-between">
                         <div className="flex gap-2">
                           {project.techStack.slice(0, 3).map(tech => (
                             <span key={tech} className="text-xs font-mono bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg text-white/80 border border-white/10">
                               {tech}
                             </span>
                           ))}
                         </div>
                         <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                           <ArrowRight size={20} className="-rotate-45" />
                         </div>
                      </div>
                    </div>
                  </div>
               </TiltCard>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
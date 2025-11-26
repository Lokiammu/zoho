import React from 'react';
import Navbar from './Navbar';
import { Github, Linkedin } from 'lucide-react';
import { RESUME_DATA } from '../data';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-cyber-accent selection:text-black overflow-x-hidden relative">
      
      {/* Liquid Background */}
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/30 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]" />
      </div>

      {/* Glass Header */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-black/10 border-b border-white/5">
        <div className="text-xl font-bold font-mono tracking-tighter flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyber-accent animate-pulse"></div>
          LN<span className="text-white/50">.</span>DEV
        </div>
        <div className="flex gap-4">
          <a href={`https://${RESUME_DATA.contact.github}`} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white">
            <Github size={20} />
          </a>
          <a href={`https://${RESUME_DATA.contact.linkedin}`} target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/70 hover:text-white">
            <Linkedin size={20} />
          </a>
        </div>
      </header>

      {/* Main Content with padding for fixed header and navbar */}
      <main className="relative z-10 pb-32 pt-24 px-4 max-w-7xl mx-auto w-full">
        {children}
      </main>

      <Navbar />
    </div>
  );
};

export default Layout;
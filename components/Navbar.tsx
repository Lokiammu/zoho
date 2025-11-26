import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Cpu, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const navItems = [
    { to: "/", icon: <Home size={20} />, label: "Home" },
    { to: "/about", icon: <User size={20} />, label: "About" },
    { to: "/projects", icon: <Briefcase size={20} />, label: "Work" },
    { to: "/skills", icon: <Cpu size={20} />, label: "Tech" },
    { to: "/resume", icon: <FileText size={20} />, label: "CV" },
    { to: "/contact", icon: <Mail size={20} />, label: "Contact" },
  ];

  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-4">
      <nav className="glass-panel rounded-full px-4 py-3 flex items-center gap-2 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-xl bg-black/40">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onMouseEnter={() => setHoveredTab(item.label)}
            onMouseLeave={() => setHoveredTab(null)}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-300 z-10 ${
                isActive ? "text-black" : "text-white/60 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Hover Glow Background */}
                {!isActive && hoveredTab === item.label && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-white/10 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Icon */}
                <span className="relative z-10 mix-blend-normal">
                  {item.icon}
                </span>

                {/* Tooltip */}
                {hoveredTab === item.label && (
                   <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -20, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.8 }}
                    className="absolute -top-10 px-3 py-1 bg-black/80 text-white text-xs font-mono rounded-lg border border-white/10 whitespace-nowrap backdrop-blur-md"
                   >
                     {item.label}
                   </motion.div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
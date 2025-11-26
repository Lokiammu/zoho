import React, { useRef, useState, MouseEvent } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = "", intensity = 10 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [lightPos, setLightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setRotation({ x: rotateX, y: rotateY });
    setLightPos({ x, y });
  };

  const handleMouseEnter = () => {
    setScale(1.01);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setScale(1);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-500 ease-out preserve-3d will-change-transform ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${scale})`,
      }}
    >
      {/* Dynamic Refraction Highlight */}
      <div 
        className="absolute inset-0 pointer-events-none z-20 rounded-[inherit] opacity-40 transition-opacity duration-300 mix-blend-overlay"
        style={{
          background: `radial-gradient(circle at ${lightPos.x}px ${lightPos.y}px, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)`,
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 transform translate-z-[10px] h-full">
         {children}
      </div>
    </div>
  );
};

export default TiltCard;
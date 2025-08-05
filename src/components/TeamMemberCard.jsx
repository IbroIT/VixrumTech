import { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

const TeamMemberCard = ({ member }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const glowOpacity = useMotionValue(0);
  const textGlow = useMotionTemplate`drop-shadow(0 0 8px rgba(60, 185, 243, ${glowOpacity})) drop-shadow(0 0 16px rgba(232, 27, 167, ${glowOpacity}))`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const rotateYVal = ((mouseXVal - width/2) / width) * 20;
    const rotateXVal = -((mouseYVal - height/2) / height) * 20;
    
    mouseX.set(mouseXVal);
    mouseY.set(mouseYVal);
    rotateX.set(rotateXVal);
    rotateY.set(rotateYVal);
    animate(glowOpacity, 0.5, { duration: 0.3 });
  };

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 });
    animate(rotateY, 0, { duration: 0.5 });
    animate(glowOpacity, 0, { duration: 0.3 });
  };

  return (
    <div 
      ref={cardRef}
      className="relative h-full perspective-1000 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: useMotionTemplate`radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(60, 185, 243, 0.15),
            rgba(232, 27, 167, 0.1)
          )`,
        }}
      />
      
      {/* Card border gradient */}
      <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-[#3CB9F3] via-[#e81ba7] to-[#3CB9F3] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <motion.div
        className="h-full bg-gray-900/80 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image with parallax effect */}
        <motion.div 
          className="relative h-64 overflow-hidden"
          style={{
            y: useMotionTemplate`calc(${rotateY}px * 0.5)`,
            scale: 1.05,
          }}
        >
          <LazyLoadImage
            src={member.image}
            alt={member.name}
            effect="opacity"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
        </motion.div>
        
        {/* Content */}
        <div className="p-6 relative">
          {/* Floating particles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            {[...Array(10)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          <motion.h3 
            className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]"
            style={{ filter: textGlow }}
          >
            {member.name}
          </motion.h3>
          
          <motion.p 
            className="text-[#e81ba7] font-medium mb-3"
            style={{ filter: textGlow }}
          >
            {member.role}
          </motion.p>
          
          <motion.p 
            className="text-gray-300 relative z-10"
            style={{ 
              filter: textGlow,
              textShadow: '0 0 10px rgba(60, 185, 243, 0.3)'
            }}
          >
            {member.description}
          </motion.p>
        </div>
        
        {/* Hover effect */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: useMotionTemplate`radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(60, 185, 243, 0.1),
              transparent 80%
            )`,
          }}
        />
      </motion.div>
    </div>
  );
};

// CSS for floating animation
const FloatingParticlesCSS = () => (
  <style jsx global>{`
    @keyframes float {
      0% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-50px) translateX(10px); }
      100% { transform: translateY(0) translateX(0); }
    }
  `}</style>
);

export default TeamMemberCard;
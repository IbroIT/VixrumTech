import { useState, useEffect, useRef } from "react";

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  useEffect(() => {
    if (disabled) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (e) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);

        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [padding, disabled, magnetStrength]);

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={`magnet-wrapper ${wrapperClassName}`}
      style={{ 
        position: "relative", 
        display: "inline-block",
        background: 'black',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}
      {...props}
    >
      <div
        className={`magnet-inner ${innerClassName}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
          position: 'relative',
          zIndex: 2
        }}
      >
        {children}
      </div>
      
      {/* Декоративные элементы с вашими цветами */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, rgba(60,185,243,0.2) 0%, rgba(232,27,167,0.1) 100%)',
        zIndex: 1,
        opacity: isActive ? 1 : 0.5,
        transition: 'opacity 0.3s ease'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
        background: '#e81ba7',
        filter: 'blur(8px)',
        opacity: isActive ? 0.7 : 0.3,
        transform: isActive ? 'scale(1.2)' : 'scale(1)',
        transition: 'all 0.3s ease',
        zIndex: 1
      }} />
      
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: '#3CB9F3',
        filter: 'blur(6px)',
        opacity: isActive ? 0.7 : 0.3,
        transform: isActive ? 'scale(1.3)' : 'scale(1)',
        transition: 'all 0.3s ease',
        zIndex: 1
      }} />
    </div>
  );
};

export default Magnet;
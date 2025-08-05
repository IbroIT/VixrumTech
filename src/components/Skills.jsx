import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const SkillsGalaxy = () => {
  // Группировка навыков по категориям с иконками и уровнями
  const skillCategories = {
    'Frontend': [
      { name: 'React', icon: '⚛', color: '#61DAFB', level: 90 },
      { name: 'Next.js', icon: 'N', color: '#FFFFFF', level: 85 },
      { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', level: 95 },
      { name: 'TypeScript', icon: 'TS', color: '#3178C6', level: 80 },
      { name: 'HTML5', icon: '</>', color: '#E44D26', level: 95 },
      { name: 'CSS3', icon: '{ }', color: '#2965F1', level: 90 },
      { name: 'Tailwind', icon: 'T', color: '#38BDF8', level: 85 },
      { name: 'Redux', icon: 'R', color: '#764ABC', level: 75 }
    ],
    'Backend': [
      { name: 'Node.js', icon: '⬢', color: '#68A063', level: 80 },
      { name: 'Express', icon: 'E', color: '#000000', level: 75 },
      { name: 'Python', icon: '🐍', color: '#3776AB', level: 70 },
      { name: 'Django', icon: 'D', color: '#092E20', level: 65 },
      { name: 'MongoDB', icon: 'M', color: '#47A248', level: 70 }
    ],
    'Mobile': [
      { name: 'React Native', icon: '📱', color: '#61DAFB', level: 75 },
      { name: 'Flutter', icon: 'F', color: '#02569B', level: 60 }
    ],
    'Tools': [
      { name: 'Git', icon: '⎇', color: '#F05032', level: 85 },
      { name: 'Docker', icon: '🐳', color: '#2496ED', level: 70 },
      { name: 'Webpack', icon: 'W', color: '#8DD6F9', level: 65 },
      { name: 'Figma', icon: 'F', color: '#F24E1E', level: 80 }
    ]
  };

  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef(null);

  // Параллакс эффект
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-1, 1], [10, -10]);
  const rotateY = useTransform(mouseX, [-1, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    
    // Нормализованные значения от -1 до 1
    const x = (mouseXPos - width / 2) / (width / 2);
    const y = (mouseYPos - height / 2) / (height / 2);
    
    mouseX.set(x);
    mouseY.set(y);
  };

  // Автопереключение категорий
  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return;
      
      setIsAnimating(true);
      const categories = Object.keys(skillCategories);
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      
      setTimeout(() => {
        setActiveCategory(categories[nextIndex]);
        setIsAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCategory, isAnimating]);

  // Анимация перехода между категориями
  const categoryTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20
  };

  return (
    <section id='Skills' className="relative py-16 px-4 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-950 overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-[#3CB9F3]/10 via-transparent to-transparent"></div>
        
        {/* Анимированные круги */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-[#3CB9F3]/10"
            style={{
              width: 100 + i * 150,
              height: 100 + i * 150,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%'
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 40 + i * 10,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">навыки</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Технологии, которые мы используем для создания современных и высокопроизводительных приложений
          </p>
        </motion.div>

        {/* Переключатель категорий */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {Object.keys(skillCategories).map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                if (activeCategory === category || isAnimating) return;
                setIsAnimating(true);
                setTimeout(() => setActiveCategory(category), 300);
                setTimeout(() => setIsAnimating(false), 800);
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7] text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              disabled={isAnimating}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Контейнер с навыками */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            mouseX.set(0);
            mouseY.set(0);
          }}
          className="relative min-h-[400px] w-full max-w-4xl mx-auto"
          style={{
            perspective: '1000px'
          }}
        >
          {/* Центральный элемент */}
          <motion.div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[#3CB9F3]/20 to-[#e81ba7]/20 border-2 border-[#3CB9F3]/30 shadow-xl flex items-center justify-center"
            style={{
              rotateX,
              rotateY,
              z: 50
            }}
          >
            <motion.div
              className="text-white text-2xl font-bold"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              {activeCategory}
            </motion.div>
          </motion.div>

          {/* Контейнер для анимированного появления/исчезновения навыков */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Орбиты с навыками */}
              {[120, 220, 320].map((radius, orbitIndex) => (
                <motion.div
                  key={`orbit-${orbitIndex}`}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    width: radius * 2,
                    height: radius * 2,
                    rotateX,
                    rotateY
                  }}
                  animate={{
                    rotate: 360,
                    transition: {
                      duration: 60 + orbitIndex * 20,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  {skillCategories[activeCategory]
                    .filter((_, i) => i % 3 === orbitIndex)
                    .map((skill, i) => {
                      const angle = (i / (skillCategories[activeCategory].length / 3)) * Math.PI * 2;
                      const skillX = Math.cos(angle) * radius;
                      const skillY = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={skill.name}
                          className={`absolute w-16 h-16 flex items-center justify-center rounded-lg cursor-pointer backdrop-blur-sm ${
                            hoveredSkill?.name === skill.name ? 'z-50' : ''
                          }`}
                          style={{
                            x: skillX,
                            y: skillY,
                            backgroundColor: `${skill.color}10`,
                            border: `1px solid ${skill.color}30`,
                            rotateX,
                            rotateY,
                            transformOrigin: 'center center'
                          }}
                          whileHover={{ 
                            scale: 1.3,
                            backgroundColor: `${skill.color}20`,
                            borderColor: `${skill.color}80`,
                            boxShadow: `0 0 15px ${skill.color}50`,
                            zIndex: 50
                          }}
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill(null)}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ 
                            opacity: 1, 
                            scale: 1,
                            transition: { 
                              delay: i * 0.1,
                              ...categoryTransition
                            }
                          }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={categoryTransition}
                        >
                          <div className="text-center">
                            <div 
                              className="text-xl font-bold mb-1" 
                              style={{ color: skill.color }}
                            >
                              {skill.icon}
                            </div>
                            <div className="text-xs font-medium text-gray-300">
                              {skill.name}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Подсказка с деталями навыка */}
          <AnimatePresence>
            {hoveredSkill && (
              <motion.div
                className="absolute bg-gray-800/90 backdrop-blur-md rounded-lg p-4 border border-[#3CB9F3]/30 shadow-xl pointer-events-none"
                style={{
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-150%',
                  zIndex: 100
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="text-2xl" 
                    style={{ color: hoveredSkill.color }}
                  >
                    {hoveredSkill.icon}
                  </div>
                  <div>
                    <div className="text-white font-bold">{hoveredSkill.name}</div>
                    <div className="text-sm text-gray-400">
                      Уровень: {hoveredSkill.level}%
                    </div>
                  </div>
                </div>
                
                {/* Прогресс бар */}
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: hoveredSkill.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${hoveredSkill.level}%` }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  />
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-3 h-3 bg-[#3CB9F3] rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGalaxy;
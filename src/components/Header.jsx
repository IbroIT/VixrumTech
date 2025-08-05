import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Squash as Hamburger } from 'hamburger-react';
import logo from './images/logo.png';
import insta from './images/insta.svg';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);

  // Порядок и ID должны соответствовать ID секций на странице
  const navItems = [
    { id: 'Home', label: 'Главная' },
    { id: 'Project', label: 'Проекты' },
    { id: 'About', label: 'О нас' },
    { id: 'Skills', label: 'Навыки' },
    { id: 'Contact', label: 'Контакты' },
  ];

  // Заполняем refs для всех секций
  useEffect(() => {
    sectionsRef.current = navItems.map(item => 
      document.getElementById(item.id)
    ).filter(Boolean);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveLink(id);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Получаем текущую позицию скролла (с небольшим отступом)
      const scrollPosition = window.scrollY + 100;
      
      // Находим текущую активную секцию
      let currentSectionId = null;
      
      // Проверяем все секции снизу вверх
      for (let i = sectionsRef.current.length - 1; i >= 0; i--) {
        const section = sectionsRef.current[i];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop - 50 && 
              scrollPosition < sectionTop + sectionHeight - 50) {
            currentSectionId = navItems[i].id;
            break;
          }
        }
      }
      
      // Если не нашли секцию, но мы внизу страницы - выбираем последнюю
      if (!currentSectionId && 
          window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        currentSectionId = navItems[navItems.length - 1].id;
      }
      
      // Если нашли секцию и она отличается от текущей - обновляем состояние
      if (currentSectionId && currentSectionId !== activeLink) {
        setActiveLink(currentSectionId);
      }
    };

    // Добавляем обработчик с небольшим троттлингом для производительности
    let ticking = false;
    const scrollHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [activeLink]);

  return (
    <header 
      id="Header_id"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] backdrop-blur-lg ${
        isScrolled 
          ? 'py-4 bg-gray-900/80 shadow-lg' 
          : 'py-6 bg-black/20'
      }`}
    >
      <nav className="container mx-auto px-5 flex justify-between items-center max-w-7xl">
        {/* Логотип */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={logo}
            alt="Logo" 
            className="h-12 hover:scale-110 hover:-rotate-2 transition-transform duration-300 cursor-pointer"
            onClick={() => scrollToSection('Home')}
          />
        </motion.div>

        {/* Десктопное меню */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                className={`relative px-3 py-1 cursor-pointer font-semibold ${
                  activeLink === item.id ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
                }`}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
              >
                {item.label}
                {activeLink === item.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-cyan-400 rounded-full"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.a
              href="https://www.instagram.com/vixrumtech/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img 
                src={insta}
                alt="Instagram" 
                className="w-6 h-6"
              />
            </motion.a>
            <motion.a 
              href="tel:+996707261196"
              className="text-white font-semibold px-4 py-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors"
              whileHover={{ color: '#3CB9F3' }}
            >
              +996707261196
            </motion.a>
          </motion.div>
        </div>

        {/* Мобильное меню */}
        <div className="lg:hidden relative z-50">
          <Hamburger 
            toggled={isMenuOpen} 
            toggle={setIsMenuOpen}
            color={isMenuOpen ? '#e81ba7' : isScrolled ? '#3CB9F3' : 'white'}
            size={28}
          />

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="fixed top-0 right-0 w-3/4 h-screen bg-gray-900/95 backdrop-blur-lg pt-24 px-6 shadow-xl"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25 }}
              >
                <ul className="flex flex-col gap-4 mb-8">
                  {navItems.map((item) => (
                    <motion.li
                      key={item.id}
                      className={`text-xl font-semibold px-4 py-3 rounded-lg transition-colors ${
                        activeLink === item.id 
                          ? 'text-cyan-400 bg-cyan-400/10' 
                          : 'text-white hover:text-cyan-300'
                      }`}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.05 * navItems.indexOf(item) }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                  <a 
                    href="https://www.instagram.com/vixrumtech/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    <img 
                      src={insta}
                      alt="Instagram" 
                      className="w-7 h-7"
                    />
                  </a>
                  <p className="text-white font-semibold text-lg">
                    +996707261196
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
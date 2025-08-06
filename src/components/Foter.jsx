import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gif from './images/phone.gif';
import gif2 from './images/email.gif';
import gif3 from './images/photo.gif';
import gif4 from './images/paper-plane.gif';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const gifVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      id='Contact'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#3CB9F3] opacity-10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* About Company */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h4 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]"
            whileHover={{ scale: 1.05 }}
          >
            О компании
          </motion.h4>
         
          <motion.p className="text-gray-400" variants={itemVariants}>
            VixrumTech — молодая команда экспертов в создании сайтов, дизайна, видеоэффектов и анимации. Мы создаём яркие и запоминающиеся цифровые решения для вашего бренда.
          </motion.p>
        </motion.div>

        {/* Navigation */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h4 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]"
            whileHover={{ scale: 1.05 }}
          >
            Навигация
          </motion.h4>
          <motion.ul className="space-y-3">
            {['Home', 'About', 'Project'].map((item) => (
              <motion.li
                key={item}
                className="text-gray-400 hover:text-[#3CB9F3] cursor-pointer transition-colors duration-300"
                onClick={() => scrollToSection(item)}
                whileHover={{ x: 5 }}
                variants={itemVariants}
              >
                {item === 'Home' ? 'Главная' : item === 'About' ? 'О нас' : 'Проекты'}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contacts */}
        <motion.div variants={itemVariants} className="space-y-4">
          <motion.h4 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]"
            whileHover={{ scale: 1.05 }}
          >
            Контакты
          </motion.h4>
          <motion.div className="flex gap-4 mb-4">
            {[gif, gif2, gif3, gif4].map((gifSrc, index) => (
              <motion.img
                key={index}
                src={gifSrc}
                alt="contact icon"
                className="w-6 h-6 rounded"
                variants={gifVariants}
                whileHover="hover"
              />
            ))}
          </motion.div>
          <motion.p className="text-gray-400" variants={itemVariants}>
            Телефон: +996707261196
          </motion.p>
          <motion.p className="text-gray-400" variants={itemVariants}>
            Email: vixrumtech@gmail.com
          </motion.p>
          <motion.a 
            href="https://www.instagram.com/vixrumtech/" 
            className="text-[#3CB9F3] hover:text-[#e81ba7] block transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            Instagram
          </motion.a>
          <motion.a 
            href="https://t.me/IbroAbdraimov" 
            className="text-[#3CB9F3] hover:text-[#e81ba7] block transition-colors duration-300"
            variants={itemVariants}
            whileHover={{ x: 5 }}
          >
            Telegram
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="space-y-4">
          
          <motion.form 
            id="contact-form" 
            action="https://api.web3forms.com/submit" 
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="access_key" value="e3efca6a-cc12-4067-9197-1885299b03ad" />
            
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-gray-300 mb-1">Ваше имя</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Имя"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#3CB9F3] transition-all"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email адрес</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#3CB9F3] transition-all"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-gray-300 mb-1">Ваше сообщение</label>
              <textarea
                rows="4"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Сообщение"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#3CB9F3] transition-all"
              />
            </motion.div>
            
            <motion.button
              type="submit"
              id="submit"
              name="submit"
              className="w-full bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7] text-white font-medium py-3 px-6 rounded-lg hover:from-[#e81ba7] hover:to-[#3CB9F3] transition-all duration-500 shadow-lg hover:shadow-[0_0_20px_rgba(60,185,243,0.5)]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              variants={itemVariants}
            >
              Отправить
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        © {new Date().getFullYear()} VixrumTech. Все права защищены.
      </motion.div>

      {/* Floating animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;
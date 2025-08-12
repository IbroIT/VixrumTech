import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Image1 from './images/project-2.png';
import Image2 from './images/project.png';
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  return (
    <motion.div 
      ref={ref}
      className="relative h-[550px] rounded-3xl overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 0.77, 0.47, 0.97]
      }}
    >
      {/* Фоновое изображение с параллакс-эффектом */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
        initial={{ scale: 1.1 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ 
          duration: 1.2,
          ease: [0.33, 1, 0.68, 1]
        }}
      />
      
      {/* Затемнение */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 z-10" />
      
      {/* Контент */}
      <div className="relative z-20 h-full flex flex-col justify-end ">
        {/* Обертка для текстового контента с blur-эффектом */}
        <motion.div
          className="p-8 rounded-2xl backdrop-blur-md bg-black/30 border border-white/10"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ 
            delay: index * 0.15 + 0.3,
            duration: 0.6
          }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ 
              delay: index * 0.15 + 0.3,
              duration: 0.6
            }}
          >
            {project.tags.map((tag, i) => (
              <motion.span 
                key={i}
                className="inline-block px-4 py-1.5 mr-3 mb-2 text-sm font-medium rounded-full"
                style={{
                  background: i % 2 === 0 ? 'rgba(60, 185, 243, 0.2)' : 'rgba(232, 27, 167, 0.2)',
                  color: i % 2 === 0 ? '#3CB9F3' : '#e81ba7',
                  backdropFilter: 'blur(10px)'
                }}
                initial={{ y: 20 }}
                animate={inView ? { y: 0 } : {}}
                transition={{ 
                  delay: index * 0.15 + 0.4 + i * 0.1,
                  duration: 0.5
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.h3 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ 
              delay: index * 0.15 + 0.5,
              duration: 0.7,
              ease: [0.33, 1, 0.68, 1]
            }}
          >
            {project.title}
          </motion.h3>
          
          <motion.p 
            className="text-gray-300 mb-8 text-lg max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ 
              delay: index * 0.15 + 0.7,
              duration: 0.6
            }}
          >
            {project.description}
          </motion.p>
          
          <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-medium text-white transition-all"
            style={{
              background: 'linear-gradient(45deg, #3CB9F3, #e81ba7)',
              boxShadow: '0 4px 20px rgba(60, 185, 243, 0.3)'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ 
              delay: index * 0.15 + 0.9,
              duration: 0.6
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 6px 25px rgba(232, 27, 167, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            Посмотреть →
          </motion.a>
        </motion.div>
      </div>
      
      {/* Эффект блика при наведении */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "Dordoi Association",
      description: "Официальный сайт Ассоциации «Дордой» — информационная платформа для партнёров, предпринимателей и широкой общественности. Здесь вы найдёте всё о миссии и целях ассоциации, её ключевых направлениях деятельности, актуальных проектах и инициативах. Сайт создан для укрепления деловых связей, информирования участников рынка и содействия развитию предпринимательства в регионе. Также доступны новости, события, официальные документы и полезные ресурсы для бизнеса.",
      tags: ["2025 - Web development (В разработке)"],
      image: Image1,
      url: "https://dordoi-eta.vercel.app"
    },
    {
      title: "FC Dordoi Official Website",
      description: "Современный и динамичный сайт футбольного клуба «Дордой», отражающий дух команды и её достижения. На платформе доступны свежие новости, расписание матчей, результаты, профили игроков, фото и видеоматериалы, а также возможность взаимодействия с болельщиками и покупки клубной атрибутики.",
      tags: ["2025 - Web development (В разработке)"],
      image: Image2,
      url: "https://fc-dordoi.vercel.app"    
    }
  ];

  return (
    <section className="relative bg-black py-28 px-4 overflow-hidden">
      {/* Динамичный фон с частицами */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: Math.random() > 0.5 ? '#3CB9F3' : '#e81ba7',
              opacity: 0.6
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 60 - 30],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2 
          className="text-5xl md:text-7xl font-bold mb-20 text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 0.77, 0.47, 0.97] 
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">проекты</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>

      {/* Декоративные элементы */}
      <motion.div 
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-[#e81ba7] opacity-10 blur-3xl -translate-x-1/2"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#3CB9F3] opacity-10 blur-3xl translate-x-1/2"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default ProjectsSection;
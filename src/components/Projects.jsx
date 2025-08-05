import React, { useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Импорты изображений
import project1 from './images/project-2.png';
import project2 from './images/project.png';
import ideaGif from './images/free-animated-icon-idea-6172533.gif';
import designGif from './images/free-animated-icon-vector-8800707.gif';
import videoGif from './images/free-animated-icon-video-6172536.gif';

// Регистрируем плагины один раз
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const Projects = () => {
  const containerRef = useRef();
  const projectsRef = useRef([]);
  const servicesRef = useRef(null);
  const titleRef = useRef(null);

  // Мемоизированные данные
  const projects = useMemo(() => [
    {
      title: "Dordoi Association",
      subtitle: "2025 - Web development (В разработке)",
      description: "Официальный сайт Ассоциации «Дордой» — информационная платформа для партнёров, предпринимателей и широкой общественности. Здесь вы найдёте всё о миссии и целях ассоциации, её ключевых направлениях деятельности, актуальных проектах и инициативах. Сайт создан для укрепления деловых связей, информирования участников рынка и содействия развитию предпринимательства в регионе. Также доступны новости, события, официальные документы и полезные ресурсы для бизнеса.",
      image: project1,
      link: "https://dordoi-eta.vercel.app"
    },
    {
      title: "FC Dordoi Official Website",
      subtitle: "2025 - Web development (В разработке)",
      description: "Современный и динамичный сайт футбольного клуба «Дордой», отражающий дух команды и её достижения. На платформе доступны свежие новости, расписание матчей, результаты, профили игроков, фото и видеоматериалы, а также возможность взаимодействия с болельщиками и покупки клубной атрибутики.",
      image: project2,
      link: "https://fc-dordoi.vercel.app"
    }
  ], []);

  const services = useMemo(() => [
    { gif: ideaGif, title: "Веб-решения", description: "креативные и функциональные сайты" },
    { gif: designGif, title: "Дизайн", description: "брендинг и UI/UX" },
    { gif: videoGif, title: "Видео и анимация", description: "яркие визуалы для вашего бренда" }
  ], []);

  useGSAP(() => {
    // Анимация заголовка (оптимизированная)
    gsap.from(titleRef.current.querySelectorAll('span'), {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.05,
      ease: "power2.out"
    });

    // Анимация проектов (более легкая)
    projectsRef.current.forEach((project, i) => {
      const delay = i * 0.15;
      
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 75%",
          toggleActions: "play none none none"
        },
        x: i % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: "power2.out"
      });

      // Оптимизированный параллакс
      if (i === 0) { // Анимируем только первый элемент для примера
        gsap.from(project.querySelector('.project-image'), {
          scrollTrigger: {
            trigger: project,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          },
          y: 80
        });
      }
    });

    // Анимация сервисов (упрощенная)
    gsap.from(".service-item", {
      scrollTrigger: {
        trigger: servicesRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    });

  }, []); // Пустой массив зависимостей - анимации создаются один раз

  // Разбиваем текст заголовка на буквы
  const titleText = "Наши успешные проекты";
  const titleLetters = useMemo(() => 
    titleText.split('').map((letter, i) => (
      <span 
        key={i} 
        className={letter === ' ' ? 'inline' : 'inline-block'}
      >
        {letter}
      </span>
    )), []);

  return (
    <div id='Project' className='bg-gray-900 text-white py-20 px-5 lg:px-20 relative overflow-hidden' ref={containerRef}>
      <div className="text-center mb-16" ref={titleRef}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          {titleLetters}
          <span className="text-blue-400">.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-16 mb-20">
        {projects.map((project, index) => (
          <div 
            key={index}
            className={`flex flex-col lg:flex-row gap-8 bg-gray-800 rounded-2xl p-8 lg:p-10 will-change-transform ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            ref={el => projectsRef.current[index] = el}
          >
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                {project.title}
              </h3>
              <p className="text-blue-400 text-lg mb-3 font-medium">{project.subtitle}</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6">{project.description}</p>
              <a href={project.link} className="inline-flex items-center px-6 py-3 text-base font-semibold border-2 border-blue-400 rounded-full transition-all hover:bg-blue-400 hover:text-gray-900">
                Подробнее
                <svg className="ml-2 transition-transform hover:translate-x-1" width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-102 project-image"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      
 

  {/* Карточки услуг с надежным отображением текста */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20">
    {services.map((service, index) => (
      <div key={index} className="group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl hover:shadow-blue-500/10">
        {/* Иконка */}
        <div className="relative w-16 h-16 mb-6">
          <img 
            src={service.gif} 
            alt={service.title}
            loading="lazy"
            width={64}
            height={64}
            className="w-full h-full rounded-xl object-contain"
          />
          <div className="absolute inset-0 rounded-full bg-blue-400/10 blur-md animate-pulse" />
        </div>
        
        {/* Заголовок - теперь всегда видим */}
        <h3 className="text-2xl font-bold mb-4 text-white">
          {service.title}
        </h3>
        
        {/* Описание */}
        <p className="text-gray-300 mb-6 text-lg">
          {service.description}
        </p>
        
        {/* Анимированная нижняя граница */}
        <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
          <svg viewBox="0 0 320 2" className="w-full h-full">
            <path 
              d="M0,1 L320,1" 
              stroke="url(#lineGradient)" 
              strokeWidth="2"
              strokeDasharray="320"
              strokeDashoffset="320"
              className="animate-[drawLine_1s_ease-out_0.3s_forwards]"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    ))}
  </div>

  {/* Кнопка с надежным отображением */}
  <div className="text-center">
    <a 
      href="https://t.me/IbroAbdraimov" 
      className="inline-flex items-center px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
    >
      Обсудить проект
      <svg 
        width="20"  
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </a>
  </div>
</div>
  );
};

export default Projects;
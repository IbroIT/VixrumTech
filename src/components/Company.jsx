  import { useEffect, useRef } from 'react';
  import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
  import { LazyLoadImage } from 'react-lazy-load-image-component';
  import 'react-lazy-load-image-component/src/effects/opacity.css';
  import { useMouse } from '@uidotdev/usehooks';
  import TeamMemberCard from './TeamMemberCard';
  import Ad_img from './images/ad_photo.jpg';
  import Il_img from './images/il_photo.jpg';
  import Ibro_img from './images/ibro2.JPG';
  import Magnet from './Magnet';


  const GlassCard = ({ children, className = '' }) => (
    <motion.div 
      className={`backdrop-blur-md bg-black/30 border border-white/10 rounded-2xl overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: 'spring' }}
      viewport={{ once: true, margin: "-20%" }}
    >
      {children}
    </motion.div>
  );

  const AboutCompany = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const [mousePosition, setMousePosition] = useMouse();
    const teamRef = useRef(null);
    
    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.3]);


    const stats = [
      { number: "50+", label: "Проектов", icon: "🚀" },
      { number: "3", label: "Года опыта", icon: "⏳" },
      { number: "100%", label: "Удовлетворенных клиентов", icon: "❤️" },
      { number: "∞", label: "Креативных идей", icon: "💡" }
    ];

    return (

      <div ref={ref} id='About' className="min-h-screen bg-black text-white overflow-hidden relative">
        {/* Animated background elements */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
          style={{ opacity }}
        >
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3CB9F3] rounded-full mix-blend-screen opacity-5 blur-3xl"
            style={{ y: y1 }}
          />
          <motion.div 
            className="absolute top-3/4 right-1/4 w-64 h-64 bg-[#e81ba7] rounded-full mix-blend-screen opacity-10 blur-3xl"
            style={{ y: y2 }}
          />
        </motion.div>

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          {/* Hero section */}
          <section className="relative mb-40">
          <div className="relative overflow-hidden rounded-3xl">
            

            <div className="relative z-10 p-12 md:p-20 lg:p-28">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7] block">
                    VixrumTech
                  </span>
                </h1>
                
                <motion.p 
                  className="text-xl md:text-2xl max-w-4xl text-gray-300 leading-relaxed mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  Мы создаем цифровые вселенные, где технологии встречаются с искусством. Наш подход сочетает инновационный код, кинематографичный дизайн и захватывающую анимацию.
                </motion.p>

                
<motion.div 
  className="flex flex-wrap gap-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6 }}
>
  <motion.div
    className="px-6 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-3xl mb-2">🧠</div>
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">
      Креатив
    </div>
    <div className="text-sm text-gray-400">Нестандартный подход</div>
  </motion.div>

  <motion.div
    className="px-6 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-3xl mb-2">🌐</div>
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">
      Digital
    </div>
    <div className="text-sm text-gray-400">Цифровые решения</div>
  </motion.div>

  <motion.div
    className="px-6 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-3xl mb-2">🎯</div>
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">
      Фокус
    </div>
    <div className="text-sm text-gray-400">На ваших целях</div>
  </motion.div>

  <motion.div
    className="px-6 py-4 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10"
    whileHover={{ y: -5, scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <div className="text-3xl mb-2">🚀</div>
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">
      Будущее
    </div>
    <div className="text-sm text-gray-400">Инновации сегодня</div>
  </motion.div>
</motion.div>
                <motion.div 
                  className="mt-16"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <a href="https://t.me/IbroAbdraimov">
                <Magnet
    wrapperClassName="custom-magnet"
    innerClassName="magnet-content"
    magnetStrength={1.5}
  >
    <div style={{
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      padding: '15px 25px',
      borderRadius: '8px',
      background: 'rgba(0,0,0,0.7)',
      border: '1px solid rgba(60,185,243,0.3)'
    }}>
      Обсудить проект
    </div>
  </Magnet>

                </a>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#3CB9F3]"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-[#e81ba7]"
            animate={{
              y: [0, 30, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </section>

          {/* Team section */}
          <section ref={teamRef} className="mb-40">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-center mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="relative inline-block">
                Наши эксперты
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                />
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMemberCard
                  image={Ad_img}
                  name="Адилхан Сатымкулов"
                  role="Frontend Разработчик"
                  description="Создаёт пользовательский интерфейс и отвечает за визуальную часть сайта или приложения. Обеспечивает удобство и интерактивность для пользователей."
                 />
                <TeamMemberCard
                  image={Ibro_img}
                  name="Иброхим Абдраимов"
                  role="Project Менеджер"
                  description="Организует работу команды, контролирует сроки и задачи проекта. Связывает разработчиков с заказчиком и отвечает за достижение целей."
                />
                <TeamMemberCard
                  image={Il_img}
                  name="Илияр Мидинов"
                  role="Backend Разработчик"
                  description="Разрабатывает серверную часть приложения: базы данных, логику и API. Обеспечивает надёжную работу системы 'под капотом'."
                />
            </div>
          </section>

          {/* CTA section */}
          <section>
            <GlassCard className="p-12 text-center">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Готовы создать что-то <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3CB9F3] to-[#e81ba7]">эпичное</span>?
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                Давайте обсудим ваш проект и найдем идеальное решение вместе.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <a href="https://t.me/IbroAbdraimov">
                <Magnet
    wrapperClassName="custom-magnet"
    innerClassName="magnet-content"
    magnetStrength={1.5}
  >
    <div style={{
      color: 'white',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
      padding: '15px 25px',
      borderRadius: '8px',
      background: 'rgba(0,0,0,0.7)',
      border: '1px solid rgba(60,185,243,0.3)'
    }}>
      Обсудить проект
    </div>
  </Magnet>

                </a>
              </motion.div>
            </GlassCard>
          </section>
        </div>

        {/* Floating cursor effect */}
      <motion.div 
    className="fixed w-6 h-6 rounded-full bg-[#3CB9F3] pointer-events-none mix-blend-exclusion z-50"
    style={{
      x: Number.isFinite(mousePosition[0]) ? mousePosition[0] - 12 : 0,
      y: Number.isFinite(mousePosition[1]) ? mousePosition[1] - 12 : 0,
      scale: useTransform(() => {
        if (
          Array.isArray(mousePosition) &&
          Number.isFinite(mousePosition[0]) &&
          Number.isFinite(mousePosition[1])
        ) {
          const target = document.elementFromPoint(mousePosition[0], mousePosition[1]);
          return target?.closest('button,a') ? 3 : 1;
        }
        return 1;
      }),
      opacity: useTransform(() => {
        if (
          Array.isArray(mousePosition) &&
          Number.isFinite(mousePosition[0]) &&
          Number.isFinite(mousePosition[1])
        ) {
          const target = document.elementFromPoint(mousePosition[0], mousePosition[1]);
          return target?.closest('button,a') ? 0.3 : 0.2;
        }
        return 0.2;
      }),
      transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
    }}
  />

      </div>
    );
  };

  export default AboutCompany;
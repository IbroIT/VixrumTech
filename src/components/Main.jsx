import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import logo from './images/Group 1.svg'

gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin)

export const Main = () => {
  const containerRef = useRef()
  const titleRef = useRef()
  const textRef = useRef()
  const buttonRef = useRef()
  const logoRef = useRef()
  const particlesRef = useRef()

  // Create background particles
  useEffect(() => {
    const particles = []
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div')
      particle.className = 'particle absolute rounded-full bg-gradient-to-br from-blue-400 to-pink-500 filter blur-[1px]'
      particle.style.setProperty('--size', `${Math.random() * 5 + 2}px`)
      particle.style.setProperty('--x', `${Math.random() * 100}%`)
      particle.style.setProperty('--y', `${Math.random() * 100}%`)
      particle.style.setProperty('--delay', `${Math.random() * 5}s`)
      particle.style.setProperty('--duration', `${Math.random() * 10 + 5}s`)
      particlesRef.current.appendChild(particle)
      particles.push(particle)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  useGSAP(() => {
    // Entrance animation for the whole section
    const tl = gsap.timeline()
    
    // Background elements
    tl.from('.gradient-circle', {
      scale: 0,
      opacity: 0,
      duration: 2,
      ease: "power4.out"
    })
    const isMobile = window.innerWidth <= 450;

    tl.from(titleRef.current.querySelectorAll('span'), {
      opacity: 0,
      y: isMobile ? 20 : 50,
      rotationX: isMobile ? 45 : 90,
      transformOrigin: "0% 50% -50",
      stagger: isMobile ? 0.05 : 0.03,
      duration: isMobile ? 0.5 : 0.8,
      ease: "back.out(1.7)"
    }, "-=1.5")


    // Text typing animation for title
    tl.to(titleRef.current, {
      text: "Инновационные IT-решения для вашего бизнеса",
      duration: 2,
      ease: "none",
      delay: 0.5
    })

    // Letter appearance effect
    tl.from(titleRef.current.querySelectorAll('span'), {
      opacity: 0,
      y: 50,
      rotationX: 90,
      transformOrigin: "0% 50% -50",
      stagger: 0.03,
      duration: 0.8,
      ease: "back.out(1.7)"
    }, "-=1.5")


    // Floating logo with 3D effect
    tl.from(logoRef.current, {
      rotationY: 180,
      rotationX: 30,
      z: 500,
      opacity: 0,
      duration: 2,
      ease: "power3.out"
    })

    // Background particles animation
    gsap.to('.particle', {
      y: (i) => i % 2 === 0 ? 50 : -50,
      x: (i) => i % 3 === 0 ? 30 : -30,
      rotation: 360,
      opacity: 0.8,
      duration: (i) => i % 2 === 0 ? 10 : 15,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.1
    })

    // Parallax effect on scroll
    gsap.to(logoRef.current, {
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    // Button hover effects
    buttonRef.current.addEventListener('mouseenter', () => {
      gsap.to(buttonRef.current, {
        scale: 1.1,
        boxShadow: "0 0 40px rgba(232, 27, 167, 0.7)",
        duration: 0.3
      })
      gsap.to('.button-glow', {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.5
      })
    })

    buttonRef.current.addEventListener('mouseleave', () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        boxShadow: "0 0 20px rgba(60, 185, 243, 0.5)",
        duration: 0.3
      })
      gsap.to('.button-glow', {
        scale: 1,
        opacity: 0.3,
        duration: 0.5
      })
    })
  }, [])

  return (
      <section id='Home'
               ref={containerRef}
               className="relative w-full h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)] text-white overflow-hidden perspective-1000"
      >
      {/* Background particles */}
      <div ref={particlesRef} className="particles-container absolute w-full h-full overflow-hidden"></div>
      
      {/* Gradient circles */}
      <div className="gradient-circle blue absolute rounded-full bg-blue-400 filter blur-[100px] opacity-0 w-[500px] h-[500px] top-[-200px] left-[-200px] animate-[pulse_15s_infinite_alternate]"></div>
      <div className="gradient-circle pink absolute rounded-full bg-pink-500 filter blur-[100px] opacity-0 w-[600px] h-[600px] bottom-[-300px] right-[-200px] animate-[pulse_18s_infinite_alternate-reverse]"></div>
      <div className="gradient-circle purple absolute rounded-full bg-[#8A2BE2] filter blur-[100px] opacity-0 w-[400px] h-[400px] top-1/2 left-[30%] animate-[pulse_12s_infinite_alternate_2s]"></div>
      
      {/* Content */}
        <div className="content-container relative z-10 max-w-[1200px] px-[5%] text-center">
          <h1 ref={titleRef} className="main-title text-[clamp(2rem,_6vw,_5.5rem)] max-[450px]:text-[clamp(1.8rem,_5vw,_3rem)] font-black leading-[1.1] mb-8 max-[450px]:mb-6 uppercase bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent [text-shadow:0_0_20px_rgba(60,_185,_243,_0.3)]">
            {/* Переносы текста с немного увеличенным размером */}
            <div className="max-[450px]:block max-[450px]:mb-1">Инновационные IT-решения</div>
            <div className="max-[450px]:block">для вашего бизнеса</div>
          </h1>

          <p ref={textRef} className="main-text text-[clamp(1rem,_2vw,_1.5rem)] max-[450px]:text-[1.1rem] max-w-[700px] mx-auto mb-12 max-[450px]:mb-10 leading-[1.6] text-white/90 [text-shadow:0_0_10px_rgba(255,_255,_255,_0.3)]">
            Наша команда создает цифровые решения, которые выводят бизнес на новый уровень
          </p>

          <a href="https://t.me/IbroAbdraimov">
            <button
                ref={buttonRef}
                className="relative px-12 py-4 max-[450px]:px-10 max-[450px]:py-3.5 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Обсудить проект
            </button>
          </a>
        </div>
      
      {/* Logo with glow effect */}
      <img 
        ref={logoRef} 
        src={logo} 
        alt="Vixrum Tech Logo" 
        className="floating-logo absolute right-[5%] bottom-[10%] w-[clamp(200px,_30vw,_400px)] [filter:drop-shadow(0_0_30px_rgba(60,_185,_243,_0.7))] transform-style-preserve-3d z-[5] animate-[float-logo_8s_ease-in-out_infinite]" 
      />
      
      {/* Additional effects */}
      <div className="light-effect absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_rgba(60,_185,_243,_0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="holographic-line absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-pink-500 [box-shadow:0_0_20px_rgba(60,_185,_243,_0.5)] transform-origin-left animate-[scanline_3s_linear_infinite]"></div>
    </section>
  )
}

export default Main
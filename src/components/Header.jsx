import React from 'react'
import './header.css';
import logo from './images/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png'
import insta from './images/instagram (2).png'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'




export const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Добавление плавности
    }
  };

  useGSAP(() => {
    gsap.to('.Header1', {
      opacity:1,
      delay:0.5,
      stagger:0.8,
    })
  })

  return (
    <div className='Header1' > 
    <nav>
            <img className="logo" src={logo} alt={""} />
            <div className='block_nav'>
              <li onClick={() => scrollToSection('Main_p')}>Главная</li>
            <li onClick={() => scrollToSection('About')}>О нас</li>
            <li onClick={() => scrollToSection('Project')}>Проекты</li>
            
            <div className="nav_mini_block">
              <div className="stick"></div>
              <a href='https://www.instagram.com/vixrumtech/'><img className="logo2 "src={insta} alt={""}/></a>
              
            <p className="text_nav">+996707261196</p>
            </div>
            
            </div>
            
          </nav>
    </div>
  )
}
export default Header;
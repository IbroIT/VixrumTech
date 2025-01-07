import React from 'react'
import './footer.css';
import '../index.css';
import logo from './images/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png'
import gif from './images/phone.gif';
import gif2 from './images/email.gif';
import gif3 from './images/photo.gif';
import gif4 from './images/paper-plane.gif';



export const Footer = () => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Добавление плавности
    }}
  return (
    <div id='foterb' className='foter' > 
    <div className="footer_block">
      <h4>О компании</h4>
      <p className="fb1_p">VixrumTech — молодая команда экспертов в <br /> создании сайтов, дизайна, видеоэффектов и <br /> анимации. Мы создаём яркие и запоминающиеся <br /> цифровые решения для вашего бренда. <br /><br /> © 2025  VixrumTech</p>
    </div>
    <div className="footer_block">
      <h4>Навигация</h4>
        <li className='f_p' onClick={() => scrollToSection('Header_id')}>Главная</li>
        <li className='f_p' onClick={() => scrollToSection('About')}>О нас</li>
        <li className='f_p' onClick={() => scrollToSection('Project')}>Проекты</li>
    </div>
    <div className="footer_block">
      <h4 className='ml-[-27px]'>Контакты</h4>
      <div className="footer_gif_block">
        <img className='w-[20px] h-[20] mt-[5px] rounded-[5px] ' src={gif} alt="телефон" />
        <img className='w-[20px] h-[20] mt-[5px] rounded-[5px]' src={gif2} alt="почта" />
        <img className='w-[20px] h-[20] mt-[5px] rounded-[5px]' src={gif3} alt="камера делает фото" />
        <img className='w-[20px] h-[20] mt-[5px] rounded-[5px]' src={gif4} alt="бумажный самолетик" />
      </div>
      <p className='f_p'>Телефон: +996707261196</p>
      <p className='f_p'>Email: vixrumtech@gmail.com</p>
      <a className='f_link' href="https://www.instagram.com/vixrumtech/">Instagram</a> <br />
      <a className='f_link'  href="https://t.me/VixrumTech_company">Telegram</a>
    </div>
    </div>
  )
  }
export default Footer;

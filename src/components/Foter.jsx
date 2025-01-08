import React from 'react'
import './footer.css';
import '../index.css';
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
    <div className="footer_block1">
      <h4>О компании</h4><h5 className='f_h6'>Есть вопросы, задавайте</h5>
      <p className="fb1_p">VixrumTech — молодая команда экспертов в <br /> создании сайтов, дизайна, видеоэффектов и <br /> анимации. Мы создаём яркие и запоминающиеся <br /> цифровые решения для вашего бренда.</p>
    </div>
    <div className="footer_block">
      <h4>Навигация</h4>
        <li className='f_p' onClick={() => scrollToSection('Header_id')}>Главная</li>
        <li className='f_p' onClick={() => scrollToSection('About')}>О нас</li>
        <li className='f_p' onClick={() => scrollToSection('Project')}>Проекты</li>
    </div>
    <div className="footer_block3">
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
      <p className='mt-[20px] ml-[-26px]'>© 2024  VixrumTech</p>
      
      <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="e3efca6a-cc12-4067-9197-1885299b03ad"></input>
      <label className='mt-[8px]'  for="name">Ваше имя</label>
  <input type="text" id="name" name="name" placeholder="Имя" required/>
      <label className='mt-[8px]'  for="email">Email адрес</label>
  <input type="email" id="email" name="email" placeholder="Email" required/>
      <label className='mt-[8px]' for="message">Ваше сообщение</label>
  <textarea rows="6" placeholder="Сообщение" id="message" name="message" required></textarea>
      <button className='btn_form' type="submit" id="submit" name="submit">Отправить</button>
      </form>
    </div>
    </div>
  )
  }
export default Footer;

import React from 'react'
import './header.css';
import logo from './images/Black___Blue_Minimalist_Modern_Initial_Font_Logo-removebg-preview.png'
import insta from './images/instagram (2).png'
export const Header = () => {
  return (
    <div className='Header1' > 
    <nav>
            <img className="logo" src={logo} alt={""} />
            <div className='block_nav'>
              <a>Главная</a>
            <a>О нас</a>
            <a>Проекты</a>
            
            <div className="nav_mini_block">
              <div className="stick"></div>
              <img className="logo2 "src={insta} alt={""}/>
            <p className="text_nav">+996707261196</p>
            </div>
            
            </div>
            
          </nav>
    </div>
  )
}
export default Header;
import React from 'react'
import './company.css';
import logo from './images/Rectangle 6.svg'
import logo2 from './images/Rectangle 6473.svg'
import logo3 from './images/Rectangle 6474.svg'
export const Companny = () => { 
  return (
    <div className='company' >
      <h2 className="com_title">О нашей компании</h2>
      <div className="stick2"></div>
      <p className="imga"><img src={logo} alt="" /></p> 
      <p className="text_com">VixrumTech — молодая и амбициозная команда, специализирующаяся на <br /> создании уникальных цифровых решений. Мы объединяем опыт в веб- <br /> разработке, дизайне, видеоэффектах и анимации, чтобы превратить ваши идеи <br /> в мощные визуальные продукты.</p>
    <div className="box_com">
      <img src={logo2} alt="" />
      <img src={logo3} alt="" />
    </div>
    </div>
  )
}
export default Companny;
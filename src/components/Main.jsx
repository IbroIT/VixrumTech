import React from 'react'
import './main.css';
import logo from './images/Group 1.svg'
export const Main = () => {
    const style = "margin: -10px 0 0 0"
  return (
    <div className='Main1' > 
    <div className="main_block">
        <h1 className='main_title'>Инновационные <br /> IT-решения для <br /> вашего бизнеса</h1>
    <p className='main_text'>Наша команда разрабатывает сайты и Дизайны, которые <br /> помогают компаниям расти и достигать целей</p>
    <button>Заказать</button>
    </div>
    <img className="logo1" src={logo} alt="" />
    </div>
  )
}
export default Main;
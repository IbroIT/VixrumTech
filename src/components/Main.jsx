import React from 'react'
import './main.css';
import logo from './images/Group 1.svg'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'


export const Main = () => {
  useGSAP(() => {
    gsap.from('.logo1', {
      x:0,
      y:40,
      rotation:0
    })
    gsap.to('.logo1', {
      y:55,
      duration:1,
      repeat:-1,
      yoyo:true,
      ease: "linear",
    })
  }, [])


  useGSAP(() => {
    gsap.to('.main_block', {
      opacity:1,
      delay:1.5,
      stagger:3
    })
  })



    const style = "margin: -10px 0 0 0"
  return (
    <div id='Main_p' className='Main1' > 
    <div className="main_block">
        <h1 className='main_title'>Инновационные <br /> IT-решения для <br /> вашего бизнеса</h1>
    <p className='main_text'>Наша команда разрабатывает сайты и Дизайны, которые <br /> помогают компаниям расти и достигать целей</p>
    <button className='btn_main'>Заказать</button>
    </div>
    <img className="logo1" src={logo} alt="" />
    </div>
  )
}
export default Main;
import React from 'react'
import './projects.css';
import logo from './images/Image.svg'
export const Projects = () => { 
  return (

    <div id='Project' className='Projects' >
        <h2>Наши успешные проекты</h2>
        <div className="pr_block">
            <div className="mini_block">
                <h3>Online Streaming App</h3>
                <p> 2023 - Product design</p>
                <p>Developed an intuitive online streaming app that brings <br /> entertainment to users' fingertips. The app offers a vast library <br /> of content, smooth playback, and personalized <br /> recommendations, enhancing the user's streaming experience</p>
                <button className="pr_btn">Подробнее</button>
            </div>
            <img className="Log" src={logo} alt="" />
        </div>
        <div className="pr_block">
            <div className="mini_block">
                <h3>Online Streaming App</h3>
                <p> 2023 - Product design</p>
                <p>Developed an intuitive online streaming app that brings <br /> entertainment to users' fingertips. The app offers a vast library <br /> of content, smooth playback, and personalized <br /> recommendations, enhancing the user's streaming experience</p>
                <button className="pr_btn">Подробнее</button>
            </div>
            <img className="Log" src={logo} alt="" />
        </div>
        <div className="pr_block">
            <div className="mini_block">
                <h3>Online Streaming App</h3>
                <p> 2023 - Product design</p>
                <p>Developed an intuitive online streaming app that brings <br /> entertainment to users' fingertips. The app offers a vast library <br /> of content, smooth playback, and personalized <br /> recommendations, enhancing the user's streaming experience</p>
                <button className="pr_btn">Подробнее</button>
            </div>
            <img className="Log" src={logo} alt="" />
        </div>
        <div className="pred_block">
            <h2 className="title">Что мы <br /> 
        предлагаем?</h2>
        <p>Веб-решения: креативные и функциональные сайты. <br />
Дизайн: брендинг и UI/UX. <br />
Видео и анимация: яркие визуалы для вашего бренда.</p>
<button className="btn_predd">Связаться</button>
        </div>
        
    </div>
  )
}
export default Projects;
import React from 'react'
import './skills.css';
import logo from './images/Group 16.svg'
import logo2 from './images/Group 18.svg'
import logo3 from './images/Group 20.svg'
import logo4 from './images/Group 22.svg'
import logo5 from './images/Group 17.svg'
import logo6 from './images/Group 19.svg'
import logo7 from './images/Group 21.svg'
import logo8 from './images/Group 23.svg'
export const Skills = () => { 
  return (
    <div className='Skills1' >
        <h2 className='title_sk' >Наши скилы</h2>
        <div className="box_sk">
            <div className="sk_block1">
            <img src={logo} alt="" />
            <img className="logo_sk" src={logo2} alt="" />
            <img className="logo_sk"  src={logo3} alt="" />
            <img className="logo_sk"  src={logo4} alt="" />

        </div>
        <div className="sk_block2">
        <img src={logo5} alt="" />
        <img className="logo_sk"  src={logo6} alt="" />
        <img className="logo_sk"  src={logo7} alt="" />
        <img className="logo_sk"  src={logo8} alt="" />

        </div>
        </div>
        
    </div>
  )
}
export default Skills;
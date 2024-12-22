import React from 'react'
import Photo from './images/Component 1.svg'
import Photo2 from './images/play-circle.png'
export const About_1 = () => {
  return (
    <div className='About'> 
    <h3>About Us</h3>
    <h1>Our Team</h1>
    <img src={Photo} alt="" />
    <p>We move with make a Creative Strategy for help your business <br /> goal, we help to improve your income by a services we have. <br /> make your content look interesting and make people look for <br /> your business</p>
    <button>About Us</button>
    <button><img src={Photo2} alt="" />Our Story</button>
    </div>
  )
}
export default About_1;
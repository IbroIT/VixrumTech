import React from 'react'
import logo from './images/logo.jpg'

export const Header = () => {
  return (
    <div className='header'>
        <div className='LogoImage'>
             <img src={logo} alt="" />
        </div>
        <div className='navSystem'>
            <span className='home'>Home</span>
            <span className='About'> About</span>
            <span className='Projects'>Projects</span>
            <span className='Contact'>Contact us</span>
        </div>
    </div>
  )
}

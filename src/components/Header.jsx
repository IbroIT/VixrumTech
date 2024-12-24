import React from 'react'
import logo from './images/logo.jpg'

export const Header = () => {
  return (
    <div className='header'>
        <div className='LogoImage overflow-y-hidden'>
             <img src={logo} alt="" />
        </div>
        <div className='navSystem'>
            <span className='home overflow-y-hidden'>Home</span>
            <span className='About overflow-y-hidden'> About</span>
            <span className='Projects overflow-y-hidden'>Projects</span>
            <span className='Contact overflow-y-hidden'>Contact us</span>
        </div>
    </div>
  )
}

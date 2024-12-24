import React from 'react'
import footerLogo from './images/footerLogo.png'
import FooterSocialMedia from './images/FooterSocialMedia.png'
import footerLine from './images/footerLine.png'

const Footer = () => {
  return (
    <div className='footer w-[100vw] h-[548px] flex flex-col items-center justify-center' >
       
      <div className='w-[100vw] h-[75%] flex flex-row gap-[95px] m-[0] justify-center mr-[50px]' >
         <img src={footerLogo} alt=""  className='w-[150px] h-[93px] mt-[100px]'/>
                                                                    <div className='flex flex-col space-y-5 mt-[100px] '>
                                                                            <span className='text-[white] font-bold text-[20px]'>Terms & policies </span>
                                                                            
                                                                            <span className='font-thin text-[white]'>  Terms of Service <br/></span>
                                                                            <span className='font-thin text-[white]'>Privacy Policy </span>
                                                                    </div>
                                                                    <div className='flex flex-col space-y-4 mt-[100px]' >
                                                                            <span className='text-[white] font-bold text-[20px]'>Company</span>
                                                                            
                                                                            <span className='font-thin text-[white]'>Home</span>
                                                                            <span className='font-thin text-[white]'>About Us</span>
                                                                            <span className='font-thin text-[white]'>Contact Us</span>
                                                                    </div>
                                                                    <div className='flex flex-col space-y-3 mt-[100px] '>
                                                                            <span className='text-[white] font-bold text-[20px]'>Contact</span>
                                                                            
                                                                            <span className='font-thin text-[white]'> (+996)     7777777777</span>
                                                                            <span className='font-thin text-[white]'>VT@gmail.com</span>
                                                                    </div>
      </div>

      <div className='w-[25%] flex flex-col space-y-2 items-center mb-[-19px]'>
        <div><img src={FooterSocialMedia} alt="" /></div>
        <img src={footerLine} alt="" />
        <span className='font-thin text-[white] text-[14px]'>Copyright @ 2024 VixrumTech company</span>
      </div>
    </div>
  )
}

export default Footer

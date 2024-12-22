import React from 'react'
import ContactNumber from './images/ContactNumber.png'
import GetInTouchContact from './images/GetInTouchContact.png'
import getText from './images/getText.png'
import emailContact from './images/emailContact.png'
import sendMessageContact from './images/sendMessageContact.png'

const ContactForm = () => {
  return (
    <div className='h-[772px] w-[100vw] border border-blue-500 flex flex-col items-center'>
      <h2 className='m-[24px_0_15px_0]  font-poppins font-semibold text-[48px] leading-[24px] text-[#377DFF] tracking-[0.05em]'>Contact</h2>

      <div className='wrapper w-[75vw] h-[85vh] border-4 border-blue-700 mt-[15px] mb-[25px] flex flex-row justify-between rounded-[10px]'>
        <div className='get ml-[6vw]'>
           <img src={GetInTouchContact} className='m-[44px_0_48px_0]' alt="" />
           <img src={getText} alt="" />
            <img src={ContactNumber} alt="" className='m-[38px_0_28px_0]'/>
            <img src={emailContact} alt=""  />
        </div>
        <div className='form mr-[10vw]'>
            <img src={sendMessageContact} className='m-[44px_0_48px_0]' alt="" />
            <div className='flex flex-col items-center'>
                <input type='text' placeholder='name' name='name' className='w-[350px] h-[50px] border-blue-500 border rounded-[10px] text-start mb-[33px]'/>
                <input type="email" name="email" id="" placeholder='E-mail' className='w-[350px] h-[50px] border-blue-500 border rounded-[10px] text-start mb-[33px]' />
                <input type='text' name='topic' placeholder='theme' className='w-[350px] h-[50px] border-blue-500 border rounded-[10px] text-start mb-[33px]'/>
                <textarea name="message" placeholder='type your order' id="" className='w-[350px] h-[130px] border-blue-500 border rounded-[10px] text-start mb-[33px]'></textarea>
                <button class="w-[160px] h-[50px] flex justify-center items-center text-[#007AFF] font-semibold text-[18px] border-2 border-[#007AFF] rounded-[10px]">
  Send
</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

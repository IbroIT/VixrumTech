import React from 'react'

const Offer = () => {
  return (
    <div className='bgCustom h-[330px] w-[100vw] flex flex-row items-center justify-between  mt-[122px]'>
      <div className='ml-[8vw]'>
            <h1 className='overflow-y-hidden font-work-sans font-semibold text-[48px] leading-[56px] text-white'>Do you have Project idea? <br />
            Let's discuss your project!</h1>
            <p className='w-[] h-[50px] font-work-sans font-normal text-[18px] leading-[24px] text-[#A5ACB5]'>There are many variations of passages of Lorem Ipsum available, <br />
            but the majority have suffered alteration.</p>
      </div>
      <div>
        <button className='btnOffer mr-[13vw] p-[12px_36px] w-[163px] h-[48px] border-4 border-solid border-blue-500 font-poppins font-semibold text-[18px] leading-[4px] bg-white text-[#377DFF] rounded-[10px]'>Contact</button>
      </div>
    </div>
  )
}

export default Offer

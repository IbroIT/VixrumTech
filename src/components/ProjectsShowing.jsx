import React from 'react'
import ProjectShowing2 from './images/ProjectShowing2.png'
import ProjectShowing1 from './images/ProjectShowing1.png'
import ProjectShowing3 from './images/ProjectShowing3.png'



const ProjectsShowing = () => {
  return (

      <div className='latestWorks w-[100vw] h-[80vh] flex items-center justify-center flex-col mt-[15px]'>
        <h1 className=" font-nunito font-bold text-[55px] tracking-[0.003em] text-[#377DFF] whitespace-nowrap overflow-y-hidden">Latest Works</h1>
        <p className='text-center  font-quicksand normal text-[#464646] font-semibold font-[20px]  overflow-y-hidden'>all projects that we have already done , proven can help to use more <br></br> comfortable, then can used by client from our business</p>
        
        <div className='h-[400px] flex flex-row items-center justify-center mt-[60px] gap-[69px] overflow-y-hidden '>
            <img src={ProjectShowing1} alt="" className='overflow-y-hidden w-[23.8vw]' />
            <img src={ProjectShowing2} alt="" className='overflow-y-hidden w-[27vw] '/>
            <img src={ProjectShowing3} alt="" className='overflow-y-hidden w-[23.8vw] overflow-y-hidden ' />
        </div>

            <button className='box-border flex flex-col justify-center items-center px-[50px] py-[12px] gap-[10px] border border-[#377DFF] rounded-[24px] mt-[4ж5px] font-quicksand font-bold text-[16px] leading-[24px] tracking-[0.01em] text-[#377DFF] overflow-y-hidden'>Start</button>
      </div> 

  )
}

export default ProjectsShowing

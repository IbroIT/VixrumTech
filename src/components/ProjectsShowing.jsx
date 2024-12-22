import React from 'react'
import ProjectShowing2 from './images/ProjectShowing2.png'
import ProjectShowing1 from './images/ProjectShowing1.png'
import ProjectShowing3 from './images/ProjectShowing3.png'



const ProjectsShowing = () => {
  return (

      <div className='latestWorks w-[100vw] h-[80vh] flex items-center flex-col mt-[12vh]'>
        <h1 className="w-[319px] h-[75px] font-nunito font-bold text-[55px] leading-[75px] tracking-[0.003em] text-[#377DFF] whitespace-nowrap">Latest Works</h1>
        <p className='text-center w-[674px h-[67px] font-quicksand normal text-[#464646] font-semibold font-[20px] leading-[34px]'>all projects that we have already done , proven can help to use more <br></br> comfortable, then can used by client from our business</p>
        
        <div className='h-[400px] w-[100vw]  flex flex-row items-center justify-center mt-[60px] gap-[69px] ml-[200px]'>
            <img src={ProjectShowing1} alt="" className='' />
            <img src={ProjectShowing2} alt="" className=''/>
            {/* <img src={ProjectShowing3} alt="" className=''/> */}
        </div>

            <button className='box-border flex flex-col justify-center items-center px-[50px] py-[12px] gap-[10px] w-[154px] h-[48px] border border-[#377DFF] rounded-[24px] mt-[48px] font-quicksand font-bold text-[16px] leading-[24px] tracking-[0.01em] text-[#377DFF] '>Start</button>
      </div> 

  )
}

export default ProjectsShowing

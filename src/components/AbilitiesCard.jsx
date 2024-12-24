import React from 'react'



export const AbilitiesCard = (props) => {
  return (
    <div className='AbilitiesCard overflow-y- hidden'> 
    <img src={props.src} alt="" className=' overflow-y-hidden' />
    <p className='Layouts font-poppins  overflow-y-hidden'>{props.Layouts}</p>
    <p className='AbilityCardText overflow-y-hidden'>{props.MainText} </p>
    </div>
  )
}

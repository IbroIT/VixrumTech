import React from 'react'



export const AbilitiesCard = (props) => {
  return (
    <div className='AbilitiesCard'> 
    <img src={props.src} alt="" className='.w-1 .h-24' />
    <p className='Layouts font-poppins w-14 h-14'>{props.Layouts}</p>
    <p className='AbilityCardText'>{props.MainText} </p>
    </div>
  )
}

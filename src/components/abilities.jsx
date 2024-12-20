import React from 'react'
import { AbilitiesCard } from './AbilitiesCard'

export const Abilities = () => {
  return (
    <div className='abilities'>
        <div className='wrapperAbilities'>
            <div className='headingAbilities'>
                 <p className='WhatWeCanDo'>| What we can do |</p>
                  <h1 className='h1Abilities'>
                  With more than 1000+ features included
                  </h1>
                  <button className='abilitiesButton'>Start</button>
            </div>

            <div className='CardAbilities'>
              <div className='AbilitiesColumn1'>
              <AbilitiesCard className='abilityCard1'/>
              <AbilitiesCard className='abilityCard2'/>
              </div>
              
              <div className='AbilitiesColumn2'>
              <AbilitiesCard className='abilityCard3'/>
              <AbilitiesCard className='abilityCard4'/>
              </div>
            </div>
        </div>
    </div>
  )
}

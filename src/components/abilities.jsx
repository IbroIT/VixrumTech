import React from 'react'
import { AbilitiesCard } from './AbilitiesCard'
import AbilityCardPhoto1 from './images/AbilitiesCardPhoto1.jpg'
import AbilityCardPhoto2 from './images/AbilityCardPhoto2.png'
import AbilityCardPhoto3 from './images/AbilityCardPhoto3.png'
import AbilityCardPhoto4 from './images/AbilityCardPhoto4.png'




export const Abilities = () => {
  return (
    <div className='abilities'>
        <div className='wrapperAbilities'>
            <div className='headingAbilities'>
                 <p className='WhatWeCanDo overflow-y-hidden'>| What we can do |</p>
                  <h1 className='h1Abilities overflow-y-hidden'>
                  With more than 1000+ features included
                  </h1>
                  <button className='abilitiesButton overflow-y-hidden'>Start</button>
            </div>

            <div className='CardAbilities'>
              <div className='AbilitiesColumn1'>
              <AbilitiesCard className='abilityCard1 overflow-y-hidden' src={AbilityCardPhoto1} Layouts='Layouts' MainText='Quidam officiis similique sea ei, vel tollit indoctum efficiendi tantas platonem. '/>
              <AbilitiesCard className='abilityCard2 overflow-y-hidden' src={AbilityCardPhoto2} Layouts='Coffee' MainText='Deseruisse definitionem his et, an has veri integre abhorreant, nam alii epicureil'/>
              </div>
              
              <div className='AbilitiesColumn2'>
              <AbilitiesCard className='abilityCard3 overflow-y-hidden' src={AbilityCardPhoto3} Layouts='Awards' MainText='Ea eos essent ornatus percipit, mea an persecuti pertinacia partiendo eu ius.'/>
              <AbilitiesCard className='abilityCard4 overflow-y-hidden' src={AbilityCardPhoto4} Layouts='Projects' MainText='Mea iisque mentitum signiferumque te, sed commune erroribus scripserit sea '/>
              </div>
            </div>
        </div>
    </div>
  )
}

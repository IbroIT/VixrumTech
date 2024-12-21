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
                 <p className='WhatWeCanDo'>| What we can do |</p>
                  <h1 className='h1Abilities'>
                  With more than 1000+ features included
                  </h1>
                  <button className='abilitiesButton'>Start</button>
            </div>

            <div className='CardAbilities'>
              <div className='AbilitiesColumn1'>
              <AbilitiesCard className='abilityCard1' src={AbilityCardPhoto1} Layouts='Layouts' MainText='Quidam officiis similique sea ei, vel tollit indoctum efficiendi tantas platonem. '/>
              <AbilitiesCard className='abilityCard2' src={AbilityCardPhoto2} Layouts='Coffee' MainText='Deseruisse definitionem his et, an has veri integre abhorreant, nam alii epicureil'/>
              </div>
              
              <div className='AbilitiesColumn2'>
              <AbilitiesCard className='abilityCard3' src={AbilityCardPhoto3} Layouts='Awards' MainText='Ea eos essent ornatus percipit, mea an persecuti pertinacia partiendo eu ius.'/>
              <AbilitiesCard className='abilityCard4' src={AbilityCardPhoto4} Layouts='Projects' MainText='Mea iisque mentitum signiferumque te, sed commune erroribus scripserit sea '/>
              </div>
            </div>
        </div>
    </div>
  )
}

"use client"
import React from 'react'
import HeroLanding from './HeroLanding'
import HowItwork from './HowItwork'

const MainLandingPage = () => {


    return (
        <div className='mb-8'>
            {/* main section wla bhai confuse mt hone  */}
            <HeroLanding />
            {/* how it is works section */}
            <HowItwork />



        </div>
    )
}

export default MainLandingPage
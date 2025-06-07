"use client"
import React from 'react'
import HeroLanding from './HeroLanding'
import { Edit3, Icon, MessageSquare, Share2 } from 'lucide-react'
import CalltoAction from './CalltoAction'
import Footer from './Footer'
import { Button } from './ui/button'
import Link from 'next/link'
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
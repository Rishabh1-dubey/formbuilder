"use client"
import React, { useState } from 'react'

import HeroLanding from './HeroLanding'
import { Airplay, Bandage, Edit3, Icon, MessageSquare, Share2 } from 'lucide-react'

const MainLandingPage = () => {

    const Data = [
        {
            title: "Enter Your Prompt",
            description: "Start by typing what you want your form to do.",
            icon: <MessageSquare /> // Represents text input or a prompt
        },
        {
            title: "Edit Your Form",
            description: "Customize fields and layout to fit your needs.",
            icon: <Edit3 />// Represents editing or customization
        },
        {
            title: "Share Your Form",
            description: "Easily share your form with a link or QR code.",
            icon: <Share2 />
        },
    ];



    return (
        <div>

            <HeroLanding />

            <div className='w-9/12 mx-auto'>

                <h1 className='font-bold text-6xl capitalize tracking-tight py-4 text-center border-b'>How It's works</h1>

                <div className='flex  flex-col md:flex-row  justify-around mt-6'>
                    {
                        Data.map((data) => (

                            <div className=' flex-col gap-6 w-[370px]  py-4 pl-4 '>
                                <p className='mb-4 text-blue-500'>{data.icon}</p>
                                <h1 className='font-bold mb-4 text-xl'>{data.title}</h1>
                                <p className='text-gray-600'>{data.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MainLandingPage
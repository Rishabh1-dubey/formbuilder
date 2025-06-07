import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { AuroraText } from './magicui/aurora-text'
import { Input } from './ui/input'
import { Button } from './ui/button'

const HeroLanding = () => {
    const [email, setEmail] = useState<string>("")

    const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        toast.success("Email send successfully")
        console.log("checking email", email)
        setEmail("")
    }

    // Debug function to check if onChange is firing
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input changed:", e.target.value) // Debug log
        setEmail(e.target.value)

    }
    return (
        <div>
            <div className=' flex flex-col items-center text-center -mt-24 mb-8'>
            <h1 className="  text-4xl font-bold tracking-tighter md:text-4xl lg:text-6xl ">
                Create an Online  <br></br> Forms <AuroraText>In Minutes</AuroraText>
            </h1>
            <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg text-center font-medium'>
                Forms are <AuroraText>complex and time-consuming  </AuroraText> to create and integrate. We make it easy to create them and embed it into your in website in minutes
            </p>

        </div>
            <div className='flex  flex-col mx-auto gap-2   md:max-w-prose items-center justify-center    '>
                <h2 >Get notified when we lauch and get freely access 👋🏻</h2>
                <div className=' mb-16'>
                    <form onSubmit={handleClick} className='flex flex-col md:flex-row  gap-3 items-center   '>
                        <Input value={email} onChange={handleEmailChange} type="email" placeholder="Enter your Email" className="border border-gray-300 p-2 w-full  text-center md:px-0" />
                        <Button type='submit' className='bg-gradient-to-r to-blue-200 to bg-purple-800 '><span className='text-white font-semibold tracking-wider px-32 md:px-0 dark:text-black'>join the waitlist ✨</span></Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HeroLanding
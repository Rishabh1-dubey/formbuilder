import { DarkMode } from '@/components/DarkMode'
import AnimatedShinyText from '@/components/AnimatedShinytext'
import MainLandingPage from '@/components/MainLandingPage'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/Logo'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import HeroSection from '@/components/HeroSection'
import GenrateInputBox from '@/components/GenrateInputBox'
import Footer from '@/components/Footer'
import CalltoAction from '@/components/CalltoAction'

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=''>

      {/* navbar section ----------------------- */}
      <div className="border border-b">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-6">
         <Link href="/home" className='cursor-pointer'>  <Logo /></Link>
          <div className="flex items-center gap-4">
            <Link href="/sign-in"><Button className='text-xl tracking-wide bg-gradient-to-r from-blue-500 to-purple-600  '><span><ArrowRight size={32} /></span>Get Started</Button></Link>
            <DarkMode />
          </div>
        </nav>
      </div>
      {/* navbar end--------------------------- */}

      <div className=' absolute top-0 z-[-2] h-screen w-full dark:bg-black bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>

        <AnimatedShinyText />
        <MainLandingPage />
        <CalltoAction />
        {/* <Footer/> */}

      </div>




    </div>
  )
}

export default page
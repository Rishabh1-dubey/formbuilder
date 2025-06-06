import { DarkMode } from '@/components/DarkMode'
import  AnimatedShinyText  from '@/components/AnimatedShinytext'
import MainLandingPage from '@/components/MainLandingPage'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/Logo'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>

     {/* navbar section ----------------------- */}
      <div className="border border-b">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-6">
          <Link href="/" className='cursor-pointer'>  <Logo /></Link>
          <div className="flex items-center gap-4">
            <Button className='text-xl tracking-wide bg-gradient-to-r from-blue-500 to-purple-600  '><span><ArrowRight size={32} /></span>Get Started</Button>
            <DarkMode />
          </div>
        </nav>
      </div>
     {/* navbar end--------------------------- */}

   <AnimatedShinyText/>
    {/* ----------- */}
    {/* heroSection--------------- */}
    <MainLandingPage/>
    <div className='ml-6 mr-6'>
  <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Either starting out with a free plan or
                choose our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-700 underline underline-offset-2'>
                  pro plan
                </Link>
                .
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your PDF file
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll process your file and make it
                ready for you to chat with.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Start asking questions
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that simple. Try out Quill today -
                it really takes less than a minute.
              </span>
            </div>
          </li>
        </ol>

    </div>
    </div>
  )
}

export default page
"use client"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

const SuccessPage = () => {
    const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center max-h-screen'>
        <h1 className='font-bold mb-4 text-4xl'>Success</h1>
        <p>You have successfully upgrade your plan now start creating more forms.</p>
        <Button className='text-blue-500' onClick={() => router.push("/home")} variant={'link'}>Create form forms</Button>
    </div>
  )
}

export default SuccessPage
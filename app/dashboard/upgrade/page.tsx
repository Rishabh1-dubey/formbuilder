import PricingCard from '@/components/PricingCard'
import { currentUser } from '@clerk/nextjs/server'
import React from 'react'

const page =async () => {

    const user=  await currentUser()
  return (
    <div>
        <PricingCard userId={user?.id}/>
    </div>
  )
}

export default page
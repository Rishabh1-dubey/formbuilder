import { getForms } from '@/actions/getForm'
import { getUserSubscription } from '@/actions/getUserSubscription'
import HeroSection from '@/components/HeroSection'
import PricingPage from '@/components/PricingCard'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const HomePage =  async () => {
  const user = await currentUser();
  // console.log("Checkinhg user:",user)
  if(!user){
    redirect("/sign-in");
  }
   
  const forms = await getForms();
  const totalNumberOfFormCreated = forms?.data?.length || 0 as number;
 
  const isSubscribed = await getUserSubscription(user?.id as string) as boolean
  console.log("Just Checking the hero section form subscribed =", isSubscribed)

  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20'>
        <HeroSection totalForms={totalNumberOfFormCreated} isSubscribed={isSubscribed}/>
        <PricingPage userId = {user?.id}/>
 
    </div>
  )
}
 
export default HomePage
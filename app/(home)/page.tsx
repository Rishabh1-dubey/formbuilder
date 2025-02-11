
import { getForm } from '@/actions/getForm'
import { getUserSubscription } from '@/actions/getUserSubscription'
import HeroSection from '@/components/HeroSection'
import PricingCard from '@/components/PricingCard'
import { currentUser } from '@clerk/nextjs/server'
import { string } from 'zod'
const HomePage = async() => {

  const user = await currentUser()
const forms = await getForm()
const totalNumberOfFormCreated = forms?.data?.length || 0 as number;
const isSubscribed = await getUserSubscription(user?.id as string) as boolean



  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-28'>
      <HeroSection totalForms ={totalNumberOfFormCreated} isSubscribed ={isSubscribed}/>
      <PricingCard userId={user?.id}/>
    </div>
  )
}

export default HomePage
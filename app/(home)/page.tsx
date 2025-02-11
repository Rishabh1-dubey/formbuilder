
import HeroSection from '@/components/HeroSection'
import PricingCard from '@/components/PricingCard'
import { currentUser } from '@clerk/nextjs/server'
const HomePage = async() => {

  const user = await currentUser()

  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-28'>
      <HeroSection/>
      <PricingCard userId={user?.id}/>
    </div>
  )
}

export default HomePage
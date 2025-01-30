import GenrateInputBox from '@/components/GenrateInputBox'
import HeroSection from '@/components/HeroSection'
import PricingCard from '@/components/PricingCard'
const HomePage = () => {
  return (
    <div className='grid items-center justify-items-center min-h-screen p-8 gap-16 sm:p-28'>
      <HeroSection/>
      <PricingCard/>
    </div>
  )
}

export default HomePage
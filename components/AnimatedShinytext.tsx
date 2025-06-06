import React from 'react'
import { AnimatedShinyText } from './magicui/animated-shiny-text'
import { ArrowRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const AnimatedShinytext = () => {
  return (
 <div className="z-10 flex min-h-44 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-200",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-600">
          <span>✨ Introducing to FormSaas</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  )
}

export default AnimatedShinytext
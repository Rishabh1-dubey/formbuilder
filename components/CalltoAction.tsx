import React from 'react'
import { AuroraText } from './magicui/aurora-text'
import TemplateCalltoAction from './TemplateCalltoAction'

const CalltoAction = () => {
  return (
    <div className=''>
      <div className=' flex flex-col items-center text-center  mt-16 max-w-prose mx-auto mb-8'>
                  <h1 className="  text-4xl font-bold tracking-tighter md:text-4xl lg:text-4xl ">
                      Save <span className='text-pink-700'>Devlopment</span> time,  <br></br> Focus on your business
                  </h1>
                  <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg text-center font-medium dark:text-slate-400'>
                    Scale your form devlpement time with <AuroraText className='underline text-blue-800'>Formigo</AuroraText>.<br/>let us handle form creation,<br/> so you focus on what matters most
                  </p>
              </div>
              <TemplateCalltoAction/>
    </div>
  )
}

export default CalltoAction

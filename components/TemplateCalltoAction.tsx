import { AlarmClock, File, Link2 } from 'lucide-react';
import React from 'react'

const TemplateCalltoAction = () => {
    const Data = [
        {
            title: "Days to Hours",
            description: "Average time dev.saved",
            icon: <AlarmClock size={32} /> // Represents text input or a prompt
        },
        {
            title: "More then 5+",
            description: "Templates ready to be improted",
            icon:<File size={32} /> // Represents editing or customization
        },
        {
            title: "Up to 5K",
            description: "Integration avialable",
            icon: <Link2 size={32} />
        },
    ];

  return (
   <div className="w-7/12  bg-blue-200 h-full rounded-xl py-12 mx-auto ">                   
    <div className="flex flex-col md:flex-row items-center justify-around mx-6 gap-6">        
        {Data.map((data, index) => (
            <div key={index} className="text-center">                 
                <p className="bg-slate-500 rounded-full w-10 h-10 flex items-center justify-center text-blue-300 mb-4 mx-auto">
                    {data.icon}
                </p>                 
                <h1 className="text-2xl font-semibold mb-2 dark:text-pink-600">{data.title}</h1>                 
                <h1 className="text-base dark:text-violet-400">{data.description}</h1>             
            </div>         
        ))}                  
    </div>         
</div>
  )
}

export default TemplateCalltoAction
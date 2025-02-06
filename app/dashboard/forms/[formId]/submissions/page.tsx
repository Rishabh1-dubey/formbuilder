import { SubmissionDetails } from '@/components/SubmissionDetails';
import prisma from '@/lib/prisma';
import React from 'react'

const Submission = async({params}:{params:Promise<{formId : string}>}) => {
 
    const formId = (await params).formId;

    const submission = await prisma.submissions.findMany({
        where:{
            formId:Number(formId),
        },
        include:{
            form:true
        }
    })

    if(!submission || submission.length === 0) {
        return <h2>NO submisson found for form id {formId}</h2>
    }
  return (
    <div>

{
    submission.map((submission:any, index:number)=>(
        <SubmissionDetails key={index} submission={submission} index={index}/>
    ))
}


    </div>
  )
}

export default Submission; 
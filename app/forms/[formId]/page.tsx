import AiGenratedform from '@/components/AiGenratedform';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import prisma from '@/lib/prisma';
import React from 'react'


const SubmitForm = async ({params,}: {params: Promise<{ formId: string }>}) => {


        const formId = (await params).formId;
        if (!formId) {
          return <h1>NO form Id found for id {formId}</h1>;
        }
        const form: any = await prisma.form.findUnique({
          where: {
            id: Number(formId),
          },
        });
  return (
    <Card className='max-w-xl mx-auto relative top-20  py-7'>
    <CardHeader>
      <CardTitle>
        <h1 className="text-2xl text-center">{form.content?.formTitle}</h1>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <AiGenratedform form={form} isEditMode={false} />
    </CardContent>
  </Card>
  )
}

export default SubmitForm;
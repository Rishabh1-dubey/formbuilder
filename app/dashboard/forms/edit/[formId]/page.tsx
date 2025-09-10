import React from "react";
import prisma from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AiGenratedform from "@/components/AiGenratedform";


const editPage = async ({
  params,}: {params: Promise<{ formId: string }>}) => {
  const formId = (await params).formId;


  if (!formId) {
    return <h1>NO form Id found for id {formId}</h1>;
  }
  const form: any = await prisma.form.findUnique({
    where: {
      id: Number(formId),
    },
  });
  

  console.log(form?.content)
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl text-center">{form.content?.formTitle}</h1>
          
        </CardTitle>
      </CardHeader>
      <CardContent>
        <AiGenratedform form={form} isEditMode={true} />
      </CardContent>
    </Card>
  );
};

export default editPage;

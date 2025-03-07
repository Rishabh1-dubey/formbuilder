"use server"
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server"

export const getFormStats = async()=>{
    const user = await currentUser();
    if(!user){
        throw new Error ("User not found")
    }

    const res = await prisma.form.aggregate({
        where:{
          ownerId:user?.id as string
        },
        _sum:{
          submissions:true
        }
      })

      const submissions = res._sum.submissions || 0
      return submissions
}
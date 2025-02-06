
"use server";
import prisma from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const getForm = async()=>{

    try {
        const user =  await currentUser()
    if(!user){
        return {success:false , message:"User is not Found"}
    }

    const forms = await prisma.form.findMany({
        where:{
            ownerId:user.id
        }
    })
    if(!forms){
        return {success:false, message:"not able to find the forms"}
    }
 return {
    success:true,
    message:"form found ",
    data:forms

 }
    } catch (error) {
        console.log(error )
    }
}
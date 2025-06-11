"use server"
import prisma from "@/lib/prisma";

export const getUserSubscription = async (userId:string) => {
    // fetch the subscription for the given user id

    console.log("Checking the user Id:::",userId)
    if(!userId){
     throw new Error("User not authenticated")
    }
    const subscriptions = await prisma.subscriptions.findFirst({
     where:{
         userId:userId
     },
    });
  

    return subscriptions?.subscribed ? true : false;
 }
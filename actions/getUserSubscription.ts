import prisma from "@/lib/prisma";

export const getUserSubscription = async (userId:string) => {
    // fetch the subscription for the given user id
    if(!userId){
     throw new Error("User not authenticated")
    }
    const subscription = await prisma.subscriptions.findFirst({
     where:{
         userId:userId
     },
    });
 
    return subscription?.subscribed ? true : false;
 }
"use server"
import prisma from "../lib/prisma";

export const userSubscription = async ({userId}:{userId:string}) => {
 console.log("userSubscriptioni ks userid", userId)

  const subscription = await prisma.subscriptions.create({
    data:{
        userId,
        subscribed:true,
        createdAt:new Date(),
        updatedAt: new Date()
    }
  });


  return subscription;
}


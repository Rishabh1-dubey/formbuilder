"use server"
import prisma from "../lib/prisma";

export const userSubscription = async ({userId}:{userId:string}) => {
 
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


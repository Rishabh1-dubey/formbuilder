"use server"
import prisma from "@/lib/prisma";

export const getUserSubscription = async (userId: string) => {
  if (!userId) {
    throw new Error("Not Authenticated");
  }

  const subscription = await prisma.subscriptions.findFirst({
    where: {
      userId: userId
    }
  });
  return subscription?.subscribed ? true : false;
};

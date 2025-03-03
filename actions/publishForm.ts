"use server"

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

const publishform = async (formId: number) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User is not found" };
    }
    if (!formId) {
      return {
        success: false,
        message: "Form id is not Valid",
      };
    }

    const form = await prisma.form.findUnique({
      where: {
        id: formId,
      },
    });

    if (form?.ownerId !== user.id) {
      return { success: false, message: "Unauthorized" };
    }

    await prisma.form.update({
      where: {
        id: formId,
      },
      data: {
        publishedAt: true,
      },
    });
  } catch (error) {
    console.log(error)
};
}

export default publishform;

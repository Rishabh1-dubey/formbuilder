"use server";

import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { z } from "zod";

//for generating the key
// const openAI = new fsfksfk({apiKey:process.env.OPEN_API_KEY})

export const generateFroms = async (prevState: unknown, formData: FormData) => {
  try {
    const user = await currentUser();
    if (!user) {
      return { success: false, message: "User not found" };
    }

    //define the schema
    const schema = z.object({
      description: z.string().min(1, "Description is Required"),
    });

    const result = schema.safeParse({
      description: formData.get("description") as string,
    });

    if (!result.success) {
      return { success: false, message: "Invalid Form data" };
    }

    const description = result.data.description;

    const prompt =
      " Create a json form with the following fields: title , fields( if any fields includes options then keep inside array and not object) , button ";


// Requrest gemini or deepseek ai to generate the form content






  } catch (error) {}
};

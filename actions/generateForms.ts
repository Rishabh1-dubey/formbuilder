"use server";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const { GoogleGenerativeAI } = require("@google/generative-ai");

//for generating the key
// const genAI = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API! });

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

    const prompt = `Generate a JSON response for a form with the following structure. Ensure the keys and format remain constant in every response.
{
  "formTitle": "string", // The title of the form
  "formFields": [        // An array of fields in the form
    {
      "label": "string", // The label to display for the field
      "name": "string",  // The unique identifier for the field (used for form submissions)
      "placeholder": "string" // The placeholder text for the field
    }
  ]
}
Requirements:
- Use only the given keys: "formTitle", "formFields", "label", "name", "placeholder".
- Always include at least 3 fields in the "formFields" array.
- Keep the field names consistent across every generation for reliable rendering.
- Provide meaningful placeholder text for each field based on its label.
        `;
    // Request gemini or deepseek ai to generate the form content

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const resultgemni = await model.generateContent(`${prompt} ${description}`);

    //storing in another variable
    const formContent =
      resultgemni.response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!formContent) {
      return { success: false, message: "Ai is not able to genrate the form" };
    }

    //Clean the response to remove Markdown syntax

    const cleanFormContent = formContent.replace(/```json|```/g, "").trim();

    let jsonFormData;
    try {
      if (typeof cleanFormContent === "string") {
        jsonFormData = JSON.parse(cleanFormContent);
      } else {
        jsonFormData = cleanFormContent ? cleanFormContent : null; // Already an object
      }
    } catch (error) {
      console.log(error)
      return {
        success: false,
        message: "Genrated form content is not valid JSON",
      };
    }

    //store the data into the json form
    //save the generated form to the database

   
    // here i have to debug date 4/2/25
    try {
      const form = await prisma.form.create({
        data: {
          ownerId: user.id,
          content: jsonFormData,
        },
      });

      revalidatePath("/dashboard/forms"); //optionally revalidate a path if necessary

      return {
        success: true,
        message: "Form generated Successfully",
        data: form,
      };
    } catch (error) {
    console.log(error)
      return {
        success: false,
        message: "Failed to save form to database",
      };
    }
  } catch (error) {
  console.log(error)
    return {
      success: false,
      message: "An Error Occured while generating the form",
    };
  }
};

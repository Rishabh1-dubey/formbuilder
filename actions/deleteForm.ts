"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const deleteForm = async (formId: number) => {
  const forms = await prisma.form.delete({
    where: {
      id: formId,
    },
  });

  if (!forms) {
    return { message: "Not able to delete the Forms", success: false };
  }
  //make sure update the form list
  revalidatePath("/dashboard/forms");

  return {
    success: true,
    message: "Form Deleted Successfully",
  };
};

export default deleteForm;
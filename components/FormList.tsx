"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Edit2 } from "lucide-react";
import deleteForm from "@/actions/deleteForm";
import toast from "react-hot-toast";
import { Form } from "@/types/form";

type Props = {
  form: Form;
};
export const FromList: React.FC<Props> = ({ form }) => {
  console.log(form);

  const deleteHandle = async (formId: number) => {
    const data = await deleteForm(formId);

    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
console.log("form list ka data pront kr rha huu  ",form)
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{form.content.formTitle}</CardTitle>
          <CardDescription>
            Deploy your new Project in one click{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href={`/dashboard/forms/${form.id}/submissions`}>
            {""}
            <Button variant={"link"} className="text-black hover:text-blue-600">
              Submission - {form.submissions}{" "}
            </Button>
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">
            <Edit2 /> Edit
          </Button>
          <Button onClick={() => deleteHandle(form.id)} variant={"destructive"}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

"use client"
import { Lock, Sparkle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFormStatus } from "react-dom";
import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { generateFroms } from "@/actions/generateForms";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { MAX_FREE_FORM_TOKEN } from "@/lib/utils";
import { SignedIn, useUser } from "@clerk/nextjs";
import Link from "next/link";

type InitialState = {
  message: string;
  success: boolean;
  data?: any;
};

const initalState: InitialState = {
  message: "",
  success: false,
};

type Props = {
  text?: string,
  totalForms?: number,
  isSubscribed?: boolean
}

const GenrateInputBox: React.FC<Props> = ({ text, totalForms, isSubscribed }) => {
  const { isSignedIn } = useUser();
  const [description, setDescription] = useState<string | undefined>(text);
  const [state, formAction] = useActionState(generateFroms, initalState);
  const router = useRouter();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    setDescription(text);
  }, [text]);

  useEffect(() => {
    if (state.success) {
      toast(state.message);
      router.push(`/dashboard/forms/edit/${state.data.id}`);
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [router, state]);

  return (
    <form action={formAction}>
      <div className="flex justify-center items-center gap-4 py-8">
        <Input
          id="description"
          name="description"
          value={description}
          onChange={handleChange}
          type="text"
          placeholder="Write a Prompt to Generate Forms....."
        />

        {
          !isSubscribed || totalForms! <= MAX_FREE_FORM_TOKEN ? <SubmitButton /> :
            <Button disabled className="h-12"><Lock />Upgrade Plan</Button>
        }

      </div>
    </form>
  );
};

export default GenrateInputBox;

//kept button into another components
const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="h-12  bg-gradient-to-r from-blue-500 to bg-purple-700"
    >
      <Sparkle className="mr-2" />
      {pending ? <span>Generating forms ....</span> : " Generate forms"}
    </Button>
  );
};

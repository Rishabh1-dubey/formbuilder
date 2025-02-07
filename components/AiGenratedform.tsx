"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import publishform from "@/actions/publishForm";
import FromPublishDialog from "./FromPublishDialog";
import { Fields } from "@/types/form";

type Props = { form: any; isEditMode: boolean };

const AiGenratedform: React.FC<Props> = ({ form, isEditMode }) => {
const[successDialogOpne, setSuccessDialogOpen] = useState<boolean>(false)

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditMode) {
      await publishform(form.id);
      setSuccessDialogOpen(true)
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  
console.log(" ai generation ",form)

  return (
    <div>
      <form onSubmit={isEditMode ? handlePublish :handleSubmit}>
        {form.content.formFields.map((item: Fields, index: number) => {
          // console.log("Field:", item); // Debugging line
          return (
            <div key={index} className="mb-4">
              <Label>{item.label}</Label>
             
              <Input
                  type="text"
                  name={item.name}
                  placeholder={item.placeholder}
                  required={!isEditMode && true}
                />
            </div>
          );
        })}
        <Button type="submit">      
          {isEditMode
            ? "publish"
            : form.content.button?.label || form.content.button?.text}
        </Button>
      </form>
      <FromPublishDialog formId={form.id}
      open={successDialogOpne}
      onOpenChange = {setSuccessDialogOpen} />
    
    </div>
  );
};

export default AiGenratedform;

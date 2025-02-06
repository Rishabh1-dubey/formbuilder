"use client"
import React from "react";
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

type Props = { form: any; isEditMode: boolean };

const AiGenratedform: React.FC<Props> = ({ form, isEditMode }) => {
  
  const content =  form.content?.fields ? form.content?.fields : form.content?.content?.fields
  return (
    <div>
      <form>
        {content?.map((item: any, index: number) => {
          // console.log("Field:", item); // Debugging line
          return (
            <div key={index} className="mb-4">
              <Label>{item.label}</Label>
              {item.type === "text" ||
              item.type === "email" ||
              item.type === "date" ||
              item.type === "tel" ||
              item.type === "number" ||
              item.type === "file" ? (
                <Input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeholder}
                  required={!isEditMode && item.required}
                />
              ) : item.type === "textarea" ? (
                <Textarea
                  name={item.name}
                  placeholder={item.placeholder}
                  required={!isEditMode && item.required}
                  className="w-full border rounded-lg"
                />
              ) : item.type === "dropdown" ? (
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={item.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {item.options!.map((option: string, index: number) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : item.type === "radio" ? (
                <RadioGroup>
                {item.options?.map((option: { label: string; value: string }, index: number) => (
                  <Label key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} required={!isEditMode && item.required} />
                    <span>{option.label}</span>
                  </Label>
                ))}
              </RadioGroup>
              ) : item.type === "checkbox" ||item.type === "select" ? (
                item.options?.map((option: string, index: number) => (
                  <Label key={index} className="flex items-center space-x-2 ">
                    <Checkbox name={item.label} value={option} />
                    <span className="py-1 ">{option}</span>
                  </Label>
                ))
              ) : null}

              
            </div>
          );
        })}
        <Button type="submit">
          {isEditMode
            ? "publish"
            : form.content.button?.label || form.content.button?.text}
        </Button>
      </form>
    </div>
  );
};

export default AiGenratedform;

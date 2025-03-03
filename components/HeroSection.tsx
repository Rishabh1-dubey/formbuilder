"use client"
import React, { useState } from "react";
import GenrateInputBox from "./GenrateInputBox";
import { Button } from "./ui/button";


type Props= {
  totalForms:number;
  isSubscribed : boolean
}
const HeroSection:React.FC<Props> = ({totalForms, isSubscribed}) => {

  const [ text , setText] = useState<string>("");
  type SuggestionText = {
    label: string;
    text: string;
  };

  const suggestedBtnText: SuggestionText[] = [
    {
      label: "Job Application",
      text: "Create a professional and concise job application form to collect candidate details, job preferences, and relevant skills for recruitment purposes.",
    },
    {
      label: "Registration Form",
      text: "Create a comprehensive and user-friendly course registration form suitable for any school or institution.",
    },
    {
      label: "Feedback form",
      text: "Create a professional and user-friendly client feedback form to gather valuable insights on service quality, satisfaction, and improvement areas.",
    },
  ];

  return (
    <div>
      <div className="relative">
        {/* glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50"></div>
        <div className="container mx-auto text-center relative px-4">
          <h1 className="text-4xl font-bold sm:text-3xl md:text-4xl">
            Build AI-Driven Forms Effortlessly
          </h1>
          <p className="mt-4 text-lg sm:text-base">
            Leverage the power of AI to create responsive and dynamic forms in
            minutes
          </p>
        </div>
      </div>

      {/* input created */}
      <GenrateInputBox text={text} totalForms ={totalForms} isSubscribed ={isSubscribed} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center mt-6 px-4">
        {suggestedBtnText.map((item: SuggestionText, idx: number) => {
          return (
            <Button onClick={()=>{setText(item.text)}}
              key={idx}
              className="rounded-full h-10 w-full sm:w-auto"
              variant={"outline"}
            >
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection;

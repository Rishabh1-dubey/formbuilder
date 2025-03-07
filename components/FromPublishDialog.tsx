"use client"
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { LinkIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

type Props = {
  formId: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};
const FromPublishDialog: React.FC<Props> = ({ formId, open, onOpenChange }) => {

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ||"http://localhost:3000"



  const copyClipboard = ()=>{
    const link = `${BASE_URL}/forms/${formId}`;
    navigator.clipboard.writeText(link);
    toast.success('Copied to clipboard')
  }
  return (
    <div>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Your Form has been Successfully Published!:
            </DialogTitle>
            <DialogDescription>
              You can now share your form with the worked and start collection
              response.
            </DialogDescription>
          </DialogHeader>
          <div>
            <p>Your form is not Live and you can get your Form by this URL</p>
            <br />
              <LinkIcon className="" />
            <div className="flex justify-between items-center mt-2">
              <Input
                placeholder="link"
                disabled
                className="w-full  bg-gray-100 dark:bg-gray-800"
                value={`${BASE_URL}/forms/edit/${formId}`}
              />
                <Button onClick={copyClipboard}>Copy</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FromPublishDialog;

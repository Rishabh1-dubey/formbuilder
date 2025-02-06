"use client"
import { getForm } from "@/actions/getForm";
import Analtytics from "@/components/Analtytics";
import {FromList} from "@/components/FormList";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const MyForm = async() => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/dashboard/analytics");
  };


  return (
    <div className="">
      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] ">
        <div onClick={handleClick}>
          <Analtytics />
        </div>

        <div className="ml-12">
          <section className="flex items-center justify-between max-w-7xl mx-auto mb-4 ">
            <h1 className="font-bold text-xl">My Forms</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline"></Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w[425px]">
                <DialogHeader>
                  <DialogTitle>Write a prompt</DialogTitle>
                  <DialogDescription> Write a clean prompt to get better results</DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </section>
          <FromList/>
        </div>
      </div>
    </div>
  );
};

export default MyForm;

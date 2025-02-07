import { getForm } from "@/actions/getForm";
import { FromList } from "@/components/FormList";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/types/form";

const MyForm = async () => {
  const forms : any = await getForm();
  console.log(" for checking the data",forms);

  return (
    <div className="">
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
                <DialogDescription>
                  {" "}
                  Write a clean prompt to get better results
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </section>
        <div className="grid grid-cols-3 gap-2">
          {forms.data?.map((form: Form, index: number) => (
            <FromList key={index} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyForm;

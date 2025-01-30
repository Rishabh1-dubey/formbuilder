import { Button } from "./ui/button";
import { Input } from "./ui/input";

const GenrateInputBox = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 py-8">

      <Input type="text" placeholder="Write a Prompt to Generate Forms....." />
      <Button>Generate Results</Button>
      </div>
    </div>
  );
};

export default GenrateInputBox;

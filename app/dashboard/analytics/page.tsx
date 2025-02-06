"use client";
import Analtytics from "@/components/Analtytics";
const page = () => {
 
  return (
    <div>
    <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] ">
     
     <div>
      <Analtytics />
      </div>
    <div className="py-2 px-4">edit section</div>
    </div>

  </div>
  );
};

export default page;

"use client"
import Analtytics from "@/components/Analtytics";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter()
  const handleClick=()=>{
    router.push('/dashboard/analytics');
  }
  return (
    <div>
      <div className="grid grid-cols-[200px_minmax(900px,_1fr)_100px] ">
        <div onClick={handleClick}>
        <Analtytics />

        </div>
        <div className="py-2 px-4">from sectionn for editong</div>
      </div>
    </div>
  );
};

export default page;

import Link from "next/link";
import React from "react";
import Logo from "./ui/Logo";
import { MdOutlineAnalytics } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
const analtytics = () => {
  return (
    <div className="border border-gray-800 h-screen ">
      <Link href="/">
        <div className="px-6 py-4 hover:cursor-pointer">
          <Logo />
        </div>
      </Link>

      <div className="flex items-center  gap-2 pl-4  pb-2 pt-4 cursor-pointer hover:bg-zinc-300  transition-all delay-150 ease-out">
        <MdOutlineAnalytics className="text-2xl" />
        <h1 className="">Analtytics</h1>
      </div>
      {/* for bordering */}
      <div className=" border border-b-[1px] w-[180px] ml-2"></div>
      {/* forms data */}
      <Link href="/dashboard/forms/edit">
        <div className="flex items-center gap-2 pl-4 mt-4 pb-4 hover:bg-zinc-300 pt-4 transition-all delay-150 ease-out ">
          <GrDocumentPerformance className="text-2xl" />
          <h1>My Forms</h1>
        </div>
      </Link>
      <div className=" border border-b-[1px] w-[180px] ml-2"></div>
    </div>
  );
};

export default analtytics;

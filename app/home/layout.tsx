"use client"
import {DarkMode} from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/Logo";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <div className="border border-b">
        <nav className="flex justify-between items-center max-w-7xl mx-auto py-6">
      <Logo />
          <div className="flex items-center gap-4">
          <Link href="/dashboard/analytics">Home
            <Button variant={"link"}>Dashboard</Button>
          </Link>
            <UserButton  afterSignOutUrl="/"/>
            <DarkMode/>
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
};

export default layout;


"use client"
import React, { JSX } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { ChartSpline, ClipboardList } from "lucide-react";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Logo from "./ui/Logo";

type MenuItems = {
  title: string;
  url: string;
  icon: JSX.Element;
};

const items: MenuItems[] = [
  {
    title: "Analytics",
    url: "/dashboard/analytics",
    icon: <ChartSpline />,
  },
  {
    title: "My Forms",
    url: "/dashboard/forms",
    icon: <ClipboardList />,
  },
];

const DashboardSidebar = async () => {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center justify-between">
            <Link href={"/"} className="font-bold text-lg">
              <Logo/>
            </Link>
          </SidebarGroupLabel>
          <Separator className="my-2"/>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item: MenuItems, index: number) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
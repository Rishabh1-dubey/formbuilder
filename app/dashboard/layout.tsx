
 import DashboardSidebar from "@/components/SideBar"
import { SidebarProvider } from "@/components/ui/sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <main className="mx-6 my-4 w-full">{children}</main>
    </SidebarProvider>
  );
};

export default layout;

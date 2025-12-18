import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-16 lg:ml-64 transition-all duration-300">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;

import { Metadata } from "next";
import { SideBar } from "./components/sidebar";
import Header from "./components/header";
import PageWrapper from "./components/pagewrapper";
import { BottomNav } from "@/components/BottomNav";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Dashboard | Sharpcredit Limited",
  description: "Loan Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex h-full pb-20 md:pb-0">
        <SideBar />
        <div className="flex flex-col h-full w-full">
          <Header />
          <PageWrapper>{children}</PageWrapper>
          <BottomNav />
        </div>
      </div>
    </div>
  );
}

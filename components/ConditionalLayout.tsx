"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDashboardRoute = pathname.startsWith("/dashboard");

  if (isDashboardRoute) {
    // Dashboard routes don't need header/footer
    return <>{children}</>;
  }

  // Non-dashboard routes get header and footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

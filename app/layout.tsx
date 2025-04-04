import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SidebarNav } from "@/components/sidebar-nav";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Social Media Dashboard",
  description: "Manage and analyze your social media accounts in one place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <SidebarProvider>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex flex-1">
                <SidebarNav />
                <main className="flex-1 p-6">{children}</main>
              </div>
              <SiteFooter />
            </div>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}

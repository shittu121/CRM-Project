import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/guard/GuardLayout/Header";
import SideBar from "@/components/guard/GuardLayout/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sight",
  description: "Staff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <div className="flex h-screen overflow-hidden">
          <SideBar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main className="h-screen">
              <div className="mx-auto max-w-screen-2xl  p-4 md:p-5 2xl:p-7">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

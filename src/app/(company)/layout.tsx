import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import SideBar from "@/components/company/CompanyLayout/SideBar";
import Header from "@/components/company/CompanyLayout/Header";


const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font_roboto",
});

export const metadata: Metadata = {
  title: "Sight",
  description: "Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
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

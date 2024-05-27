import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ContextProvider } from "@/store/AllContext";
import { Toaster } from "sonner";

const roboto = Roboto({
  subsets: ["cyrillic"],
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
      <ContextProvider>
        <body className={`${roboto.variable} `}>
          {children}
          <Toaster position="bottom-center" />
        </body>
      </ContextProvider>
    </html>
  );
}

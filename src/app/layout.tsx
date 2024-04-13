import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import FooterBar from "@/components/FooterBar";
import Navbar from "@/components/Navbar";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>  
        <Navbar />   
        {children}
        <FooterBar />
        </body>
    </html>
  );
}

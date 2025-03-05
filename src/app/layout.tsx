import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAN",
  description: "Trillium Drug Program Application Navigator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
      >
        <div className="flex gap-4 items-center justify-center bg-[#1E0F62] h-[75px] sticky top-0">
          <Image src="/images/logo.png" alt="PAN" width={40} height={40} />
          <h1 className="text-[35px] font-bold text-[#FFFFFF]">PAN</h1>
        </div> 
        <div className="flex flex-col items-center gap-4 bg-[#DBC4FF] h-full pb-11 py-6 px-6 lg:px-52 overflow-y-auto ">
        {children}
        </div>
      </body>
    </html>
  );
}

// -- view port scrolling
// -- hyper link hover
// -- button hover
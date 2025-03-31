import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"

import "./globals.css";
import Head from "next/head";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Adjust weights as needed
});

export const metadata: Metadata = {
  title: "Imrabo",
  description: "AI & IOT Automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/imrabo/logo.png" />
      </Head>
      <body className={`${dmSans.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

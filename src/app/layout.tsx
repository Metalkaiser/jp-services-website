import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { websiteInfoEsp } from "./utils/info-esp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: websiteInfoEsp.websiteProps.websiteNameFull,
  description: websiteInfoEsp.websiteProps.websiteDescription,
  authors: [
    {
      name: "JP Dev",
      url: "https://jp-services-orcin.vercel.app/",
    },
  ],
  creator: "JP Dev",
  keywords: websiteInfoEsp.websiteProps.websiteKeywords

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

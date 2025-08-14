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

const websiteData = websiteInfoEsp.websiteProps;

export const metadata: Metadata = {
  title: websiteData.websiteNameFull,
  description: websiteData.websiteDescription,
  authors: [
    {
      name: "JP Dev",
      url: websiteData.websiteUrl,
    },
  ],
  creator: "JP Dev",
  keywords: websiteData.websiteKeywords,
  openGraph: {
    title: websiteData.websiteNameFull,
    description: websiteData.websiteDescription,
    url: websiteData.websiteUrl,
    siteName: websiteData.websiteNameFull,
    images: [
      {
        url: "/images/branding/banner_FB.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },

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

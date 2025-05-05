import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { websiteNameFull, websiteDescription } from "./utils/info";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: websiteNameFull,
  description: websiteDescription,
  authors: [
    {
      name: "JP Dev",
      url: "",
    },
  ],
  creator: "JP Dev",
  keywords: [
    "desarrollo web",
    "tiendas en línea",
    "soluciones personalizadas",
    "aplicaciones web",
    "desarrollo de software",
    "optimización de procesos",
    "mejora de procesos",
    "gestión de inventario",
    "interacción con clientes",
    "impulso de ventas",
    "presencia en línea",
    "estrategias digitales",
    "transformación digital",
    "marketing digital",
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

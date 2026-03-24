import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import Navbar from "@/components/Navbar";
import { TransitionProvider } from "@/components/transitions/TransitionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Boxx Era | All Senses On",
  description: "Elite Transformation Centre & Boxing Club",
  icons: {
    icon: "/Boxx Era-01 (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}>
        <TransitionProvider>
          <Navbar />
          {children}
        </TransitionProvider>
      </body>

    </html>
  );
}

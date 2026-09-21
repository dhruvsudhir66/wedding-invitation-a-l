import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aneena & Loyed | Wedding",
  description: "Our Wedding.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

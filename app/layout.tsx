import type { Metadata } from "next";
import "./globals.css";
import { Playfair_Display, DM_Sans } from "next/font/google";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { weddingConfig } from "@/config/wedding";

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

const { theme, seo, assets } = weddingConfig;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  icons: {
    icon: assets.favicon,
  },
};

function ThemeVariables() {
  const css = `:root {
    --theme-primary: ${theme.primary};
    --theme-accent: ${theme.accent};
    --theme-primary-rgb: ${theme.primaryRgb};
    --theme-accent-rgb: ${theme.accentRgb};
    --dusty-pink: ${theme.dustyPink};
    --light-pink: ${theme.lightPink};
    --off-white: ${theme.offWhite};
    --sage: ${theme.sage};
    --terracotta: ${theme.terracotta};
    --ink: ${theme.ink};
    --muted: ${theme.muted};
    --line: ${theme.line};
    --surface: ${theme.surface};
  }`;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={seo.lang}>
      <head>
        <ThemeVariables />
      </head>
      <body className={`${display.variable} ${sans.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

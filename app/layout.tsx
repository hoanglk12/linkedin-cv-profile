import type { Metadata } from "next";
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
  title: "Lincoln Pham - Professional CV",
  description: "Senior Quality Assurance Engineer specializing in software testing, automation, and quality assurance. View my professional CV and portfolio.",
  keywords: ["Quality Assurance Engineer", "Software Testing", "Automation", "Selenium", "Playwright"],
  authors: [{ name: "Lincoln Pham" }],
  openGraph: {
    title: "Lincoln Pham - Professional CV",
    description: "Senior Quality Assurance Engineer with 7+ years of experience",
    type: "website",
  },
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

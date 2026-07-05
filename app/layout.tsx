import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
    <html lang="en" className={inter.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

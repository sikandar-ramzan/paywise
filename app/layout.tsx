import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayWise | Pakistan Income & Salary Tax Calculator",
  description:
    "Calculate your income tax and take-home salary according to Pakistan's latest tax regulations. Convert hourly rates to monthly salary with tax calculations.",
  keywords:
    "Pakistan tax calculator, salary calculator, hourly rate converter, USD to PKR, income tax Pakistan, take-home salary calculator, tax planner Pakistan, 2024-2025 tax rates",
  alternates: {
    canonical: "https://paywise.sikandar.dev/",
  },
  openGraph: {
    title: "PayWise | Pakistan Income & Salary Tax Calculator",
    description:
      "Calculate your income tax and take-home salary according to Pakistan's latest tax regulations. Convert hourly rates to monthly salary instantly.",
    url: "https://paywise.sikandar.dev/",
    siteName: "PayWise",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayWise | Pakistan Income & Salary Tax Calculator",
    description:
      "Calculate your income tax and take-home salary according to Pakistan's latest tax regulations. Convert hourly rates to monthly salary instantly.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

export default function NotFound() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center p-4 ${
        theme === "dark"
          ? "bg-[#212121] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Logo theme={theme} />

      <div className="w-full max-w-md mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-900"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9.9 19.7l1.3.8 1.3-.8 7.6-4.9V5.7L12 .3 3.9 5.7v9.1l6 3.9z" />
              <path d="M9.9 19.7l2.9-1.9 6.4-4.2V5.7" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>

          <h1 className="text-5xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>

          <p className="mb-8 text-gray-400">
            {` Oops! The page you're looking for doesn't exist or has been moved.`}
          </p>

          <Link
            href="/"
            className={`inline-block px-6 py-3 rounded-md font-medium ${
              theme === "dark"
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white transition-colors`}
          >
            Back to Calculator
          </Link>
        </motion.div>

        <div className="mt-12 text-gray-400 text-sm">
          <p>Try one of these pages instead:</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="/tax-rates" className="hover:underline">
              Tax Rates
            </Link>
            <Link href="/usd-to-pkr" className="hover:underline">
              USD to PKR
            </Link>
            <Link href="/hourly-to-monthly" className="hover:underline">
              Hourly to Monthly
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

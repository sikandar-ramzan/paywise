"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function AboutPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-[#212121] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <StructuredData />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Logo theme={theme} />

      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">About PayWise</h1>

          <Card
            className={`w-full mb-8 ${
              theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white"
            }`}
          >
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-lg flex items-center justify-center shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-gray-900"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                </div>

                <p>
                  {` PayWise is Pakistan's most comprehensive and user-friendly
                  income tax calculator, designed to help individuals understand
                  their tax obligations and plan their finances effectively.`}
                </p>

                <p>
                  {` Our mission is to simplify tax calculations and financial
                  planning for all Pakistanis, whether they're salaried
                  employees, freelancers, or business owners. We believe that
                  everyone should have access to tools that help them make
                  informed financial decisions.`}
                </p>

                <h2 className="text-xl font-bold mt-6 mb-4">
                  Why We Created PayWise
                </h2>
                <p>
                  Understanding income tax calculations in Pakistan can be
                  challenging, especially with changing tax regulations and
                  complex formulas. Many individuals struggle to determine:
                </p>
                <ul className="list-disc list-inside space-y-2 my-4">
                  <li>{`How much tax they'll pay on their monthly salary`}</li>
                  <li>
                    What gross salary they need to achieve a specific take-home
                    pay
                  </li>
                  <li>
                    How to convert hourly rates to monthly income with tax
                    considerations
                  </li>
                  <li>
                    How to calculate taxes when earning in foreign currencies
                  </li>
                </ul>
                <p>
                  PayWise addresses these challenges with a simple, intuitive
                  interface that provides instant and accurate calculations
                  based on the latest tax regulations.
                </p>

                <h2 className="text-xl font-bold mt-6 mb-4">Our Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-md ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-semibold mb-2">Tax Calculator</h3>
                    <p className="text-sm">
                      Calculate income tax on your monthly salary with instant
                      results showing your take-home pay.
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-md ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-semibold mb-2">Find Gross Salary</h3>
                    <p className="text-sm">
                      Determine the gross salary you need to achieve a specific
                      take-home amount after taxes.
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-md ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-semibold mb-2">
                      Hourly Rate Conversion
                    </h3>
                    <p className="text-sm">
                      Convert hourly rates to monthly salary with built-in tax
                      calculations.
                    </p>
                  </div>
                  <div
                    className={`p-4 rounded-md ${
                      theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                    }`}
                  >
                    <h3 className="font-semibold mb-2">Currency Conversion</h3>
                    <p className="text-sm">
                      Convert USD to PKR with customizable exchange rates for
                      accurate tax planning.
                    </p>
                  </div>
                </div>

                <h2 className="text-xl font-bold mt-6 mb-4">Stay Updated</h2>
                <p>
                  We regularly update PayWise to reflect the latest tax
                  regulations in Pakistan, ensuring you always get accurate
                  calculations. Our commitment is to provide a reliable tool
                  that helps you make informed financial decisions.
                </p>

                <div className="mt-8 text-center">
                  <Link
                    href="/"
                    className={`inline-block px-6 py-3 rounded-md font-medium ${
                      theme === "dark"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-blue-600 hover:bg-blue-700"
                    } text-white transition-colors`}
                  >
                    Try PayWise Calculator
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer theme={theme} />
    </div>
  );
}

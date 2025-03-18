"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function TaxRatesPage() {
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
          <h1 className="text-3xl font-bold mb-8 text-center">
            Pakistan Income Tax Rates 2024-2025
          </h1>

          <Card
            className={`w-full mb-8 ${
              theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white"
            }`}
          >
            <CardHeader>
              <CardTitle>Current Income Tax Slabs in Pakistan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                      }`}
                    >
                      <th className="p-3 text-left border border-gray-700">
                        Annual Income (PKR)
                      </th>
                      <th className="p-3 text-left border border-gray-700">
                        Tax Rate
                      </th>
                      <th className="p-3 text-left border border-gray-700">
                        Tax Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        Up to 600,000
                      </td>
                      <td className="p-3 border border-gray-700">0%</td>
                      <td className="p-3 border border-gray-700">No tax</td>
                    </tr>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        600,001 to 1,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        5% of amount exceeding 600,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        Up to 30,000
                      </td>
                    </tr>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        1,200,001 to 2,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        30,000 + 15% of amount exceeding 1,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        30,000 to 180,000
                      </td>
                    </tr>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        2,200,001 to 3,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        180,000 + 25% of amount exceeding 2,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        180,000 to 430,000
                      </td>
                    </tr>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-[#1a1a1a]" : "bg-white"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        3,200,001 to 4,100,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        430,000 + 30% of amount exceeding 3,200,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        430,000 to 700,000
                      </td>
                    </tr>
                    <tr
                      className={`${
                        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
                      }`}
                    >
                      <td className="p-3 border border-gray-700">
                        Above 4,100,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        700,000 + 35% of amount exceeding 4,100,000
                      </td>
                      <td className="p-3 border border-gray-700">
                        Over 700,000
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Understanding Pakistan Income Tax Rates
              </h2>
              <p className="mb-4">
                Pakistan follows a progressive tax system, which means that as
                your income increases, the percentage of tax you pay also
                increases. The tax rates shown above are for the fiscal year
                2024-2025 as per the latest regulations from the Federal Board
                of Revenue (FBR).
              </p>
              <p>
                {` For salaried individuals, income tax is typically deducted at
                source by employers through a system known as "withholding tax."
                Freelancers and business owners need to calculate and pay their
                taxes based on their annual income.`}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How to Calculate Your Income Tax
              </h2>
              <p className="mb-4">
                To calculate your income tax liability in Pakistan, you need to:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Determine your total annual income</li>
                <li>Identify which tax slab your income falls into</li>
                <li>Apply the corresponding tax calculation formula</li>
                <li>Subtract any applicable tax credits or exemptions</li>
              </ol>
              <p className="mb-4">
                For example, if your annual income is PKR 1,500,000:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  You fall into the third tax slab (1,200,001 to 2,200,000)
                </li>
                <li>
                  Your tax would be: 30,000 + 15% of (1,500,000 - 1,200,000)
                </li>
                <li>30,000 + 15% of 300,000 = 30,000 + 45,000 = 75,000 PKR</li>
              </ul>
              <p>
                <Link href="/" className="text-blue-400 hover:underline">
                  Use our PayWise calculator
                </Link>{" "}
                to automatically calculate your income tax based on your monthly
                or hourly income.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Tax Deductions and Exemptions
              </h2>
              <p className="mb-4">
                The Pakistan tax code provides several deductions and exemptions
                that can reduce your taxable income, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Zakat payments</li>
                <li>Charitable donations to approved institutions</li>
                <li>Medical expenses (under certain conditions)</li>
                <li>Education expenses</li>
                <li>Investment in approved pension schemes</li>
                <li>Contributions to approved provident funds</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-blue-900 bg-opacity-20">
            <h3 className="text-xl font-bold mb-3">
              Calculate Your Exact Tax Liability
            </h3>
            <p className="mb-4">
              Use our free PayWise calculator to quickly determine your exact
              tax liability based on the latest tax regulations.
            </p>
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
      </div>

      <Footer theme={theme} />
    </div>
  );
}

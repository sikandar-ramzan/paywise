"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function HourlyToMonthlyPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [hourlyRate, setHourlyRate] = useState<string>("25");
  const [hoursPerDay, setHoursPerDay] = useState<string>("8");
  const [workingDays, setWorkingDays] = useState<string>("22");
  const [monthlyIncome, setMonthlyIncome] = useState<string>("");
  const [yearlyIncome, setYearlyIncome] = useState<string>("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Calculate monthly and yearly income when input changes
    if (hourlyRate && hoursPerDay && workingDays) {
      const hourly = parseFloat(hourlyRate);
      const hours = parseFloat(hoursPerDay);
      const days = parseFloat(workingDays);

      if (!isNaN(hourly) && !isNaN(hours) && !isNaN(days)) {
        const monthly = hourly * hours * days;
        setMonthlyIncome(monthly.toFixed(0));
        setYearlyIncome((monthly * 12).toFixed(0));
      }
    }
  }, [hourlyRate, hoursPerDay, workingDays]);

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
            Convert Hourly Rate to Monthly Salary in Pakistan
          </h1>

          <Card
            className={`w-full mb-8 ${
              theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white"
            }`}
          >
            <CardHeader>
              <CardTitle>Hourly Rate to Monthly Salary Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div>
                  <label className="text-sm text-gray-500 mb-2 block">
                    Hourly Rate (PKR)
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                      ₨
                    </span>
                    <Input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(e.target.value)}
                      className={`rounded-l-none ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-2 block">
                    Hours Per Day
                  </label>
                  <Input
                    type="number"
                    value={hoursPerDay}
                    onChange={(e) => setHoursPerDay(e.target.value)}
                    min="1"
                    max="24"
                    className={`${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-2 block">
                    Working Days
                  </label>
                  <Input
                    type="number"
                    value={workingDays}
                    onChange={(e) => setWorkingDays(e.target.value)}
                    min="1"
                    max="31"
                    className={`${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  />
                </div>

                <div className="md:row-span-2">
                  <div
                    className={`p-4 rounded-md ${
                      theme === "dark"
                        ? "bg-blue-900 bg-opacity-20"
                        : "bg-blue-50"
                    }`}
                  >
                    <h3 className="font-semibold mb-3">Your Income</h3>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm text-gray-400">Monthly:</p>
                        <p className="text-xl font-bold">
                          ₨{" "}
                          {monthlyIncome
                            ? parseInt(monthlyIncome).toLocaleString()
                            : "0"}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Yearly:</p>
                        <p className="text-xl font-bold">
                          ₨{" "}
                          {yearlyIncome
                            ? parseInt(yearlyIncome).toLocaleString()
                            : "0"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/"
                  className={`inline-block px-6 py-3 rounded-md font-medium ${
                    theme === "dark"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  } text-white transition-colors`}
                >
                  Calculate Tax on This Income
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                How to Convert Hourly Rate to Monthly Salary
              </h2>
              <p className="mb-4">
                Converting your hourly rate to a monthly salary is essential for
                freelancers, contractors, and hourly workers to understand their
                earnings and plan their finances. The formula for converting
                hourly rate to monthly salary is:
              </p>
              <div
                className={`p-4 rounded-md mb-4 text-center ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <p className="font-mono">
                  Monthly Salary = Hourly Rate × Hours Per Day × Working Days
                  Per Month
                </p>
              </div>
              <p>
                For example, if you earn ₨1,000 per hour, work 8 hours per day
                for 22 days a month, your monthly salary would be ₨1,000 × 8 ×
                22 = ₨176,000.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Working Days in a Month in Pakistan
              </h2>
              <p className="mb-4">
                In Pakistan, a standard work month typically consists of:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>
                  <strong>22 days</strong> on average (excluding weekends)
                </li>
                <li>
                  <strong>5 days per week</strong> for most office jobs
                </li>
                <li>
                  <strong>6 days per week</strong> for some industries (26
                  working days per month)
                </li>
                <li>
                  Public holidays reduce the working days in certain months
                </li>
              </ul>
              <p>
                For freelancers and remote workers, working days may vary based
                on your contracts and work schedule.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Calculating Tax on Hourly Income
              </h2>
              <p className="mb-4">
                {` Once you've converted your hourly rate to a monthly salary, you
                need to calculate the income tax you'll pay according to
                Pakistan's tax regulations. This helps you understand your true
                take-home pay.`}
              </p>
              <p className="mb-4">Key considerations for tax calculations:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Income tax is calculated on your annual income (monthly salary
                  × 12)
                </li>
                <li>
                  Pakistan follows a progressive tax system with different tax
                  slabs
                </li>
                <li>
                  Freelancers may need to consider additional taxes or
                  deductions
                </li>
                <li>
                  If earning in foreign currency (like USD), convert to PKR for
                  tax calculations
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-blue-900 bg-opacity-20">
            <h3 className="text-xl font-bold mb-3">
              Calculate Your Exact Tax Using PayWise
            </h3>
            <p className="mb-4">
              Use our comprehensive PayWise calculator to convert your hourly
              rate to monthly salary, calculate your exact tax liability, and
              determine your take-home pay.
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

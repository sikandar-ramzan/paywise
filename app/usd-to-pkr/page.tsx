"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export default function UsdToPkrPage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [usdAmount, setUsdAmount] = useState<string>("100");
  const [exchangeRate, setExchangeRate] = useState<string>("280.26");
  const [pkrAmount, setPkrAmount] = useState<string>("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    // Calculate PKR amount when USD amount or exchange rate changes
    if (usdAmount && exchangeRate) {
      const usd = parseFloat(usdAmount);
      const rate = parseFloat(exchangeRate);
      if (!isNaN(usd) && !isNaN(rate)) {
        setPkrAmount((usd * rate).toFixed(2));
      }
    }
  }, [usdAmount, exchangeRate]);

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
            USD to PKR Conversion for Salary and Tax Calculation
          </h1>

          <Card
            className={`w-full mb-8 ${
              theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white"
            }`}
          >
            <CardHeader>
              <CardTitle>USD to PKR Currency Converter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 items-center">
                <div>
                  <label className="text-sm text-gray-500 mb-2 block">
                    USD Amount
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                      $
                    </span>
                    <Input
                      type="number"
                      value={usdAmount}
                      onChange={(e) => setUsdAmount(e.target.value)}
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
                    Exchange Rate
                  </label>
                  <Input
                    type="number"
                    value={exchangeRate}
                    onChange={(e) => setExchangeRate(e.target.value)}
                    placeholder="Enter exchange rate"
                    className={`${
                      theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-white"
                        : "bg-white border-gray-300"
                    }`}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    1 USD = {exchangeRate} PKR
                  </p>
                </div>

                <div>
                  <label className="text-sm text-gray-500 mb-2 block">
                    PKR Amount
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
                      ₨
                    </span>
                    <Input
                      type="text"
                      value={pkrAmount}
                      readOnly
                      className={`rounded-l-none ${
                        theme === "dark"
                          ? "bg-gray-800 border-gray-700 text-white"
                          : "bg-white border-gray-300"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Why Convert USD to PKR for Salary Calculations?
              </h2>
              <p className="mb-4">
                {`If you're a freelancer, remote worker, or contractor earning in
                USD but living in Pakistan, converting your earnings to PKR is
                essential for accurate tax calculations and financial planning.
                The USD to PKR exchange rate fluctuates daily, which can
                significantly impact your take-home pay and tax obligations in
                Pakistan.`}
              </p>
              <p>
                {` Using PayWise's built-in currency converter ensures you're
                making accurate tax projections based on the latest exchange
                rates, helping you plan your finances with confidence.`}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How to Calculate Your Monthly Salary in PKR
              </h2>
              <p className="mb-4">
                To convert your USD hourly rate or monthly salary to PKR:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li>Enter your USD amount (hourly rate or monthly salary)</li>
                <li>
                  Use the current USD to PKR exchange rate (updated regularly)
                </li>
                <li>
                  Multiply your USD amount by the exchange rate to get your PKR
                  equivalent
                </li>
                <li>
                  {` Apply Pakistan's income tax regulations to calculate your tax
                  liability`}
                </li>
              </ol>
              <p>
                <Link href="/" className="text-blue-400 hover:underline">
                  {`Use our PayWise calculator's hourly rate feature`}
                </Link>{" "}
                to automatically perform these calculations with built-in tax
                calculations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Tax Implications for USD Earnings in Pakistan
              </h2>
              <p className="mb-4">
                {` When you earn in USD but are a tax resident of Pakistan, you're
                still required to pay income tax on your earnings after
                converting them to PKR. The Pakistan Federal Board of Revenue
                (FBR) taxes global income of Pakistani residents, regardless of
                the currency it was earned in.`}
              </p>
              <p className="mb-4">
                Key considerations for freelancers and remote workers earning in
                USD:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  All your income must be declared in PKR for tax filing
                  purposes
                </li>
                <li>
                  {`Use the State Bank of Pakistan's exchange rate for official
                  conversions`}
                </li>
                <li>
                  Keep records of all currency conversions for tax documentation
                </li>
                <li>
                  Consider the impact of exchange rate fluctuations on your tax
                  planning
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 rounded-lg bg-blue-900 bg-opacity-20">
            <h3 className="text-xl font-bold mb-3">
              Calculate Your Salary and Tax with PayWise
            </h3>
            <p className="mb-4">
              Use our free PayWise calculator to convert your USD hourly rate to
              PKR and calculate your exact tax liability based on the latest tax
              regulations.
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

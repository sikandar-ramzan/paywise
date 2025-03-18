"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";

import {
  calculateTaxValues,
  calculateTaxForTakeHome,
  TaxCalculationResult,
} from "@/utils/tax-calculator";
import {
  calculateMonthlyFromHourly,
  calculateWorkingDaysInMonth,
} from "@/utils/hourly-calculator";
import { Currency } from "@/types";
import CalculatorHeader from "@/components/CalculatorHeader";
import IncomeInput from "@/components/IncomeInput";
import ModeSelector from "@/components/ModeSelector";
import RequiredGrossSalary from "@/components/RequiredGrossSalary";
import TaxBreakdown from "@/components/TaxBreakdown";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import HourlyCalculator from "@/components/HourlyCalculator";
import HourlyResults from "@/components/HourlyResults";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import FAQ from "@/components/FAQ";
import CollapsibleContent from "@/components/CollapsibleContent";

export default function PayWiseCalculator() {
  const [income, setIncome] = useState<number | "">("");
  const [takeHome, setTakeHome] = useState<number | "">("");
  const [calculationMode, setCalculationMode] = useState<
    "calculate" | "find" | "hourly"
  >("calculate");

  // New states for hourly calculation
  const [hourlyRate, setHourlyRate] = useState<number | "">("");
  const [hoursPerDay, setHoursPerDay] = useState<number | "">(8);
  const [currency, setCurrency] = useState<Currency>("USD");
  const [exchangeRate, setExchangeRate] = useState<number>(280.26); // Default exchange rate

  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [calculatedValues, setCalculatedValues] =
    useState<TaxCalculationResult | null>(null);

  useEffect(() => {
    // Recalculate when income changes and we're in calculate mode
    if (calculationMode === "calculate" && income !== "") {
      setCalculatedValues(
        calculateTaxValues(typeof income === "number" ? income : 0)
      );
    }
  }, [income, calculationMode]);

  useEffect(() => {
    // Recalculate when takeHome changes and we're in find mode
    if (calculationMode === "find" && takeHome !== "") {
      setCalculatedValues(
        calculateTaxForTakeHome(typeof takeHome === "number" ? takeHome : 0)
      );
    }
  }, [takeHome, calculationMode]);

  useEffect(() => {
    // Recalculate when hourly rate or hours per day change and we're in hourly mode
    if (
      calculationMode === "hourly" &&
      hourlyRate !== "" &&
      hoursPerDay !== ""
    ) {
      setCalculatedValues(
        calculateMonthlyFromHourly(
          typeof hourlyRate === "number" ? hourlyRate : 0,
          typeof hoursPerDay === "number" ? hoursPerDay : 0,
          currency,
          exchangeRate
        )
      );
    }
  }, [hourlyRate, hoursPerDay, currency, exchangeRate, calculationMode]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-between p-4 ${
        theme === "dark"
          ? "bg-[#212121] text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <StructuredData />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Logo theme={theme} />

      <main className="w-full max-w-xl lg:max-w-4xl flex-grow flex flex-col items-center justify-center">
        <CalculatorHeader />

        <Card
          className={`w-full ${
            theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-xl text-center">
              {calculationMode === "calculate"
                ? "Calculate Tax"
                : calculationMode === "find"
                ? "Find Your Take Home"
                : "Calculate Monthly From Hourly"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ModeSelector
              mode={calculationMode}
              setMode={setCalculationMode}
              theme={theme}
              income={income}
              setTakeHome={setTakeHome}
              calculatedTakeHome={calculatedValues?.monthlyTakeHome}
            />

            <AnimatePresence mode="wait">
              {calculationMode === "calculate" ? (
                <motion.div
                  key="calculate"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <IncomeInput
                    value={income}
                    onChange={setIncome}
                    placeholder="Enter your monthly income"
                    theme={theme}
                  />
                </motion.div>
              ) : calculationMode === "find" ? (
                <motion.div
                  key="find"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <IncomeInput
                    value={takeHome}
                    onChange={setTakeHome}
                    placeholder="Enter desired take-home amount"
                    theme={theme}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="hourly"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <HourlyCalculator
                    hourlyRate={hourlyRate}
                    setHourlyRate={setHourlyRate}
                    hoursPerDay={hoursPerDay}
                    setHoursPerDay={setHoursPerDay}
                    currency={currency}
                    setCurrency={setCurrency}
                    exchangeRate={exchangeRate}
                    setExchangeRate={setExchangeRate}
                    theme={theme}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {calculatedValues && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {calculationMode === "find" && (
                  <RequiredGrossSalary
                    takeHome={takeHome}
                    monthlyTax={calculatedValues.monthlyTax}
                    requiredGrossSalary={calculatedValues.monthlyIncome}
                    theme={theme}
                  />
                )}

                {calculationMode === "hourly" &&
                  hourlyRate !== "" &&
                  hoursPerDay !== "" && (
                    <HourlyResults
                      hourlyRate={
                        typeof hourlyRate === "number" ? hourlyRate : 0
                      }
                      hoursPerDay={
                        typeof hoursPerDay === "number" ? hoursPerDay : 0
                      }
                      workingDays={calculateWorkingDaysInMonth()}
                      taxData={calculatedValues}
                      currency={currency}
                      exchangeRate={exchangeRate}
                      theme={theme}
                    />
                  )}

                <TaxBreakdown taxData={calculatedValues} theme={theme} />
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Collapsible SEO-friendly content section */}
        <CollapsibleContent
          title="About PayWise Tax Calculator"
          theme={theme}
          buttonText="Learn More About"
          initiallyOpen={false}
        >
          <div
            className={`p-6 rounded-lg ${
              theme === "dark"
                ? "bg-[#1a1a1a] border-gray-800"
                : "bg-white shadow"
            }`}
          >
            <h2 className="text-2xl font-bold mb-4">
              Calculate Your Pakistan Income Tax with PayWise
            </h2>
            <div className="space-y-4 text-sm">
              <p>
                {`PayWise provides the most accurate and user-friendly income tax
                calculator for Pakistan. Our tool helps you understand your tax
                obligations based on the latest 2024-2025 tax regulations.
                Whether you're a salaried employee, freelancer, or business
                owner, PayWise gives you precise calculations to help you plan
                your finances effectively.`}
              </p>
              <p>With PayWise, you can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Calculate Tax on Monthly Income:</strong> Enter your
                  monthly gross salary to instantly see your tax deductions and
                  take-home pay.
                </li>
                <li>
                  <strong>Find Required Gross Salary:</strong>{" "}
                  {`Input your
                  desired take-home amount, and we'll calculate the gross salary
                  you need to earn.`}
                </li>
                <li>
                  <strong>Convert Hourly Rates to Monthly Salary:</strong> For
                  freelancers and hourly workers, convert your hourly rate (in
                  PKR or USD) to monthly earnings with accurate tax
                  calculations.
                </li>
              </ul>
              <p>
                Our calculator is regularly updated to reflect the latest tax
                laws and regulations in Pakistan, ensuring you always get
                accurate results.
              </p>
            </div>
          </div>
        </CollapsibleContent>

        {/* Collapsible FAQ Section for SEO */}
        <CollapsibleContent
          title="Frequently Asked Questions"
          theme={theme}
          buttonText="View"
          initiallyOpen={false}
        >
          <FAQ theme={theme} />
        </CollapsibleContent>
      </main>

      <Footer theme={theme} />
    </div>
  );
}

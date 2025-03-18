import { TaxCalculationResult } from "@/utils/tax-calculator";
import { Currency } from "@/types";

type HourlyResultsProps = {
  hourlyRate: number;
  hoursPerDay: number;
  workingDays: number;
  taxData: TaxCalculationResult;
  currency: Currency;
  exchangeRate: number;
  theme: "light" | "dark";
};

export default function HourlyResults({
  hourlyRate,
  hoursPerDay,
  workingDays,
  taxData,
  currency,
  exchangeRate,
  theme,
}: HourlyResultsProps) {
  const currencySymbol = currency === "PKR" ? "₨" : "$";
  const conversionInfo =
    currency === "USD" ? (
      <div
        className={`p-3 rounded-md ${
          theme === "dark" ? "bg-gray-800" : "bg-gray-100"
        } mb-4`}
      >
        <p className="text-sm text-gray-400 mb-1">Currency Conversion</p>
        <p className="font-medium">
          ${hourlyRate.toFixed(2)} per hour ≈ ₨
          {(hourlyRate * exchangeRate).toFixed(0)} per hour
        </p>
        <p className="text-xs text-gray-400 mt-1">
          Using exchange rate: 1 USD = {exchangeRate.toFixed(2)} PKR
        </p>
      </div>
    ) : null;

  return (
    <div className="mt-6">
      {conversionInfo}

      <div
        className={`p-4 rounded-md mb-6 ${
          theme === "dark" ? "bg-orange-900 bg-opacity-20" : "bg-orange-100"
        }`}
      >
        <div className="flex items-center mb-2">
          <span
            className={`mr-2 ${
              theme === "dark" ? "text-orange-400" : "text-orange-600"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </span>
          <h3
            className={`font-semibold ${
              theme === "dark" ? "text-orange-400" : "text-orange-600"
            }`}
          >
            Income Calculation
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
          <div className="flex justify-between">
            <span>Hourly Rate:</span>
            <span className="font-medium">
              {currencySymbol} {hourlyRate.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Hours per Day:</span>
            <span className="font-medium">{hoursPerDay}</span>
          </div>
          <div className="flex justify-between">
            <span>Working Days:</span>
            <span className="font-medium">{workingDays}</span>
          </div>
          <div className="flex justify-between">
            <span>Daily Income:</span>
            <span className="font-medium">
              ₨ {(taxData.monthlyIncome / workingDays).toFixed(0)}
            </span>
          </div>
          <div className="flex justify-between col-span-2 pt-2 border-t border-gray-700">
            <span>Monthly Gross Income:</span>
            <span className="font-bold">
              ₨ {taxData.monthlyIncome.toFixed(0)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

import { KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { convertToWords } from "@/utils/number-to-words";
import { Currency } from "@/types";

type HourlyCalculatorProps = {
  hourlyRate: number | "";
  setHourlyRate: (value: number | "") => void;
  hoursPerDay: number | "";
  setHoursPerDay: (value: number | "") => void;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  exchangeRate: number;
  setExchangeRate: (rate: number) => void;
  theme: "light" | "dark";
};

export default function HourlyCalculator({
  hourlyRate,
  setHourlyRate,
  hoursPerDay,
  setHoursPerDay,
  currency,
  setCurrency,
  exchangeRate,
  setExchangeRate,
  theme,
}: HourlyCalculatorProps) {
  // Handle Enter key press to close the mobile keyboard
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Return") {
      // Blur the input to dismiss the keyboard
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="mb-4.5">
      <div className="mb-4">
        <label className="text-sm text-gray-500 mb-2 block">Currency</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`p-3 rounded-md flex justify-center cursor-pointer ${
              currency === "PKR"
                ? theme === "dark"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
                : theme === "dark"
                ? "bg-gray-700 text-gray-400"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setCurrency("PKR")}
          >
            PKR (₨)
          </button>
          <button
            className={`p-3 rounded-md flex justify-center cursor-pointer ${
              currency === "USD"
                ? theme === "dark"
                  ? "bg-white text-gray-900"
                  : "bg-gray-900 text-white"
                : theme === "dark"
                ? "bg-gray-700 text-gray-400"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setCurrency("USD")}
          >
            USD ($)
          </button>
        </div>
      </div>

      {currency === "USD" && (
        <div className="mb-4">
          <label className="text-sm text-gray-500 mb-2 block">
            Exchange Rate (1 USD = ? PKR)
          </label>
          <div className="flex">
            <Input
              type="number"
              inputMode="numeric"
              placeholder="Exchange rate"
              className={`${
                theme === "dark"
                  ? "bg-gray-800 border-gray-700 text-white"
                  : "bg-white border-gray-300"
              }`}
              value={exchangeRate}
              onChange={(e) => {
                const rate = parseFloat(e.target.value);
                if (!isNaN(rate) && rate > 0) {
                  setExchangeRate(rate);
                }
              }}
              onKeyDown={handleKeyDown}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            Current rate: 1 USD = {exchangeRate.toFixed(2)} PKR
          </p>
        </div>
      )}

      <div>
        <label className="text-sm text-gray-500 mb-2 block">Hourly Rate</label>
        <div className="flex">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
            {currency === "PKR" ? "₨" : "$"}
          </span>
          <Input
            type="number"
            inputMode="numeric"
            placeholder={`Enter your hourly rate in ${currency}`}
            className={`rounded-l-none ${
              theme === "dark"
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
            value={hourlyRate === "" ? "" : hourlyRate}
            onChange={(e) => {
              const inputValue = e.target.value;
              setHourlyRate(
                inputValue === "" ? "" : Number(inputValue.split(".")[0])
              );
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
        {hourlyRate !== "" && currency === "PKR" && (
          <p className="text-sm mt-2 text-gray-400 italic">
            {convertToWords(typeof hourlyRate === "number" ? hourlyRate : 0)}
          </p>
        )}
      </div>

      <div className="mt-1.5">
        <label className="text-sm text-gray-500 mb-2 block">
          Working Hours Per Day
        </label>
        <div className="flex">
          <Input
            type="number"
            inputMode="numeric"
            placeholder="Enter hours worked per day"
            className={`${
              theme === "dark"
                ? "bg-gray-800 border-gray-700 text-white"
                : "bg-white border-gray-300"
            }`}
            min="1"
            max="24"
            value={hoursPerDay === "" ? "" : hoursPerDay}
            onChange={(e) => {
              const inputValue = e.target.value;
              const hours =
                inputValue === "" ? "" : Number(inputValue.split(".")[0]);
              // Ensure hours are between 1 and 24
              if (
                hours === "" ||
                (typeof hours === "number" && hours >= 1 && hours <= 24)
              ) {
                setHoursPerDay(hours);
              }
            }}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

import { Currency } from "@/types";
import { TaxCalculationResult, calculateTaxValues } from "./tax-calculator";

/**
 * Calculates the number of working days in a month (excluding weekends)
 * Averages to ~22 working days per month
 */
export const calculateWorkingDaysInMonth = (): number => {
  // A standard month has approximately 22 working days (excluding weekends)
  return 22;
};

/**
 * Converts USD to PKR using the provided exchange rate
 */
export const convertUSDToPKR = (
  usdAmount: number,
  exchangeRate: number
): number => {
  return usdAmount * exchangeRate;
};

/**
 * Calculates monthly salary from hourly rate
 * @param hourlyRate - Hourly rate in specified currency
 * @param hoursPerDay - Working hours per day
 * @param currency - Currency (PKR or USD)
 * @param exchangeRate - Exchange rate (1 USD to PKR)
 * @returns Monthly salary in PKR with tax calculations
 */
export const calculateMonthlyFromHourly = (
  hourlyRate: number,
  hoursPerDay: number,
  currency: Currency,
  exchangeRate: number
): TaxCalculationResult => {
  const workingDays = calculateWorkingDaysInMonth();

  // Convert to PKR if currency is USD
  const hourlyRateInPKR =
    currency === "USD" ? convertUSDToPKR(hourlyRate, exchangeRate) : hourlyRate;

  // Calculate monthly salary
  const monthlySalary = hourlyRateInPKR * hoursPerDay * workingDays;

  // Use the existing tax calculator to calculate tax
  return calculateTaxValues(monthlySalary);
};

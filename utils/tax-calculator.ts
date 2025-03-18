/**
 * Calculates income tax based on Pakistan's 2024-2025 tax regulations
 * @param yearlyIncome - Annual income in PKR
 * @returns Tax amount in PKR
 */
export const calculateTax = (yearlyIncome: number): number => {
  if (yearlyIncome <= 600000) {
    return 0;
  } else if (yearlyIncome <= 1200000) {
    return (yearlyIncome - 600000) * 0.05;
  } else if (yearlyIncome <= 2200000) {
    return 30000 + (yearlyIncome - 1200000) * 0.15;
  } else if (yearlyIncome <= 3200000) {
    return 180000 + (yearlyIncome - 2200000) * 0.25;
  } else if (yearlyIncome <= 4100000) {
    return 430000 + (yearlyIncome - 3200000) * 0.3;
  } else {
    return 700000 + (yearlyIncome - 4100000) * 0.35;
  }
};

/**
 * Finds the required gross salary to get a specific take-home amount after tax
 * @param desiredMonthlyTakeHome - Desired monthly take-home amount in PKR
 * @returns Required monthly gross salary in PKR
 */
export const findGrossSalaryForTakeHome = (
  desiredMonthlyTakeHome: number
): number => {
  let low = desiredMonthlyTakeHome; // Minimum possible gross (if no tax)
  let high = desiredMonthlyTakeHome * 2; // A safe upper bound
  let mid: number;

  // Binary search to find the gross salary that results in the desired take-home
  while (high - low > 1) {
    mid = (high + low) / 2;
    const yearlyIncome = mid * 12;
    const yearlyTax = calculateTax(yearlyIncome);
    const monthlyTax = yearlyTax / 12;
    const actualTakeHome = mid - monthlyTax;

    if (actualTakeHome > desiredMonthlyTakeHome) {
      high = mid;
    } else {
      low = mid;
    }
  }

  // Final check and refinement
  const yearlyIncome = high * 12;
  const yearlyTax = calculateTax(yearlyIncome);
  const monthlyTax = yearlyTax / 12;
  const actualTakeHome = high - monthlyTax;

  // If we're really close to the desired take-home, return this value
  if (Math.abs(actualTakeHome - desiredMonthlyTakeHome) < 1) {
    return high;
  }

  // Otherwise, do a final linear interpolation
  const slope =
    (high - low) / (actualTakeHome - (low - calculateTax(low * 12) / 12));
  return (
    low + slope * (desiredMonthlyTakeHome - (low - calculateTax(low * 12) / 12))
  );
};

/**
 * Type definition for tax calculation results
 */
export type TaxCalculationResult = {
  monthlyIncome: number;
  monthlyTax: number;
  monthlyTakeHome: number;
  yearlyIncome: number;
  yearlyTax: number;
  yearlyTakeHome: number;
  effectiveTaxRate: number;
};

/**
 * Calculate tax values based on monthly income
 * @param monthlyIncome - Monthly income in PKR
 * @returns Complete tax calculation results
 */
export const calculateTaxValues = (
  monthlyIncome: number
): TaxCalculationResult => {
  const yearlyIncome = monthlyIncome * 12;
  const yearlyTax = calculateTax(yearlyIncome);
  const monthlyTax = yearlyTax / 12;
  const effectiveTaxRate = (yearlyTax / yearlyIncome) * 100;

  return {
    monthlyIncome,
    monthlyTax,
    monthlyTakeHome: monthlyIncome - monthlyTax,
    yearlyIncome,
    yearlyTax,
    yearlyTakeHome: yearlyIncome - yearlyTax,
    effectiveTaxRate,
  };
};

/**
 * Calculate tax values based on desired take-home amount
 * @param desiredMonthlyTakeHome - Desired monthly take-home amount in PKR
 * @returns Complete tax calculation results
 */
export const calculateTaxForTakeHome = (
  desiredMonthlyTakeHome: number
): TaxCalculationResult => {
  const requiredGrossSalary = findGrossSalaryForTakeHome(
    desiredMonthlyTakeHome
  );
  const yearlyIncome = requiredGrossSalary * 12;
  const yearlyTax = calculateTax(yearlyIncome);
  const monthlyTax = yearlyTax / 12;
  const effectiveTaxRate = (yearlyTax / yearlyIncome) * 100;

  return {
    monthlyIncome: requiredGrossSalary,
    monthlyTax,
    monthlyTakeHome: desiredMonthlyTakeHome,
    yearlyIncome,
    yearlyTax,
    yearlyTakeHome: desiredMonthlyTakeHome * 12,
    effectiveTaxRate,
  };
};

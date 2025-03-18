export interface TaxResults {
  monthlyIncome: number;
  monthlyTax: number;
  monthlyAfterTax: number;
  yearlyIncome: number;
  yearlyTax: number;
  yearlyAfterTax: number;
}

export type CalculationMode =
  | "gross-to-net"
  | "net-to-gross"
  | "hourly-to-monthly";

export interface TaxWiseLogoProps {
  size?: "small" | "medium" | "large";
  showTagline?: boolean;
}

export type Currency = "PKR" | "USD";

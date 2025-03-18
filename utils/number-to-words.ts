/**
 * Converts a number to words using Pakistani currency terminology
 * Handles Rupees, Hundreds, Thousands, Lacs, Crores, and Arabs
 */
export const convertToWords = (amount: number): string => {
  if (amount === 0) return "Zero Rupees";
  if (amount === 1) return "One Rupee";

  if (amount < 100) {
    // For numbers less than 100
    const units = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];

    if (amount < 20) {
      return `${units[amount]} Rupees`;
    } else {
      const unit = amount % 10;
      const ten = Math.floor(amount / 10);
      return `${tens[ten]}${unit ? "-" + units[unit] : ""} Rupees`;
    }
  } else if (amount < 1000) {
    // For hundreds
    const hundred = Math.floor(amount / 100);
    const remainder = amount % 100;
    return `Rs. ${hundred} Hundred${
      remainder
        ? " and " + convertToWords(remainder).replace(" Rupees", "")
        : ""
    }`;
  } else if (amount < 100000) {
    // For thousands (up to 99,999)
    const thousand = Math.floor(amount / 1000);
    const remainder = amount % 1000;
    return `Rs. ${thousand} Thousand${
      remainder ? " " + convertToWords(remainder).replace("Rs. ", "") : ""
    }`;
  } else if (amount < 10000000) {
    // For lacs (1 lac = 100,000) (up to 99 lacs)
    const lac = Math.floor(amount / 100000);
    const remainder = amount % 100000;
    return `Rs. ${lac} Lac${lac > 1 ? "s" : ""}${
      remainder ? " " + convertToWords(remainder).replace("Rs. ", "") : ""
    }`;
  } else if (amount < 1000000000) {
    // For crores (1 crore = 10,000,000) (up to 99 crores)
    const crore = Math.floor(amount / 10000000);
    const remainder = amount % 10000000;
    return `Rs. ${crore} Crore${crore > 1 ? "s" : ""}${
      remainder ? " " + convertToWords(remainder).replace("Rs. ", "") : ""
    }`;
  } else {
    // For amounts >= 1 Arab (1 Arab = 1,000,000,000)
    const arab = Math.floor(amount / 1000000000);
    const remainder = amount % 1000000000;
    return `Rs. ${arab} Arab${arab > 1 ? "s" : ""}${
      remainder ? " " + convertToWords(remainder).replace("Rs. ", "") : ""
    }`;
  }
};

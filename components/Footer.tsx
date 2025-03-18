import Link from "next/link";

type FooterProps = {
  theme: "light" | "dark";
};

export default function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`w-full max-w-4xl mx-auto mt-12 mb-6 px-4 ${
        theme === "dark" ? "text-gray-400" : "text-gray-600"
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4">PayWise</h3>
          <p className="text-sm">
            {`Pakistan's most accurate income tax calculator. Convert hourly rates
            to monthly salary with precise tax calculations.`}
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Tax Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/tax-rates" className="hover:underline">
                Pakistan Tax Rates 2024-2025
              </Link>
            </li>
            <li>
              <Link href="/usd-to-pkr" className="hover:underline">
                USD to PKR Conversion for Salary
              </Link>
            </li>
            <li>
              <Link href="/hourly-to-monthly" className="hover:underline">
                Hourly Rate to Monthly Salary Guide
              </Link>
            </li>
            <li>
              <Link href="/tax-deductions" className="hover:underline">
                Understanding Tax Deductions in Pakistan
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                About PayWise
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs">
        <p>
          © {currentYear} PayWise. All rights reserved. The most accurate
          Pakistan income tax calculator.
        </p>
        <p className="mt-2">
          PayWise helps freelancers, salaried employees, and businesses
          calculate their income tax, convert hourly rates to monthly salary,
          and determine required gross salary for desired take-home pay.
        </p>
      </div>
    </footer>
  );
}

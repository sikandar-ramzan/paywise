import { motion } from "framer-motion";
import { TaxCalculationResult } from "@/utils/tax-calculator";

type TaxBreakdownProps = {
  taxData: TaxCalculationResult;
  theme: "light" | "dark";
};

export default function TaxBreakdown({ taxData, theme }: TaxBreakdownProps) {
  return (
    <div className="lg:flex lg:gap-8 lg:items-start">
      <div className="mb-6 lg:flex-1 lg:mb-0">
        <h3 className="flex items-center text-lg font-semibold mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a.75.75 0 01.75.75v14.5a.75.75 0 01-1.5 0V2.75A.75.75 0 0110 2z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L10 8.94l3.47-3.47a.75.75 0 111.06 1.06L11.06 10l3.47 3.47a.75.75 0 11-1.06 1.06L10 11.06l-3.47 3.47a.75.75 0 01-1.06-1.06L8.94 10 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
          Tax Breakdown
        </h3>

        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">Effective Tax Rate</p>
          <div className="flex items-center justify-between">
            <div className="w-full bg-gray-700 rounded-full h-2.5 mr-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{
                  width: `${Math.min(taxData.effectiveTaxRate * 2, 100)}%`,
                }}
                transition={{ duration: 1 }}
                className="bg-yellow-400 h-2.5 rounded-full"
              ></motion.div>
            </div>
            <span className="text-lg font-bold whitespace-nowrap">
              {taxData.effectiveTaxRate.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>10%</span>
            <span>20%</span>
            <span>30%</span>
            <span>40%</span>
            <span>50%</span>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className={`p-3 rounded-md ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-800"
            }`}
          >
            <p className="text-sm text-gray-300 mb-1">Gross Income</p>
            <p className="text-lg font-bold text-white">
              Rs {taxData.monthlyIncome.toFixed(0).toLocaleString()}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="p-3 bg-red-900 bg-opacity-90 rounded-md"
          >
            <p className="text-sm text-red-200 mb-1">Tax</p>
            <p className="text-lg font-bold text-white">
              - Rs {taxData.monthlyTax.toFixed(0).toLocaleString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="p-3 bg-yellow-500 rounded-md"
          >
            <p className="text-sm text-gray-900 mb-1">Take Home</p>
            <p className="text-lg font-bold text-gray-900">
              Rs {taxData.monthlyTakeHome.toFixed(0).toLocaleString()}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mt-8 lg:mt-14 lg:flex-1 lg:ml-6 lg:border-l lg:border-gray-700 lg:pl-8 py-10">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">Monthly Income</p>
            <p className="text-xl font-bold">
              Rs {taxData.monthlyIncome.toFixed(0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Yearly Income</p>
            <p className="text-xl font-bold">
              Rs {taxData.yearlyIncome.toFixed(0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Monthly Tax</p>
            <p className="text-xl font-bold">
              Rs {taxData.monthlyTax.toFixed(0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Yearly Tax</p>
            <p className="text-xl font-bold">
              Rs {taxData.yearlyTax.toFixed(0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Monthly Take Home</p>
            <p className="text-xl font-bold">
              Rs {taxData.monthlyTakeHome.toFixed(0).toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2">Yearly Take Home</p>
            <p className="text-xl font-bold">
              Rs {taxData.yearlyTakeHome.toFixed(0).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

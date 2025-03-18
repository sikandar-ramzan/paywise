import { motion } from "framer-motion";

export default function CalculatorHeader() {
  return (
    <div className="text-center mb-8">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-300 flex items-center justify-center mx-auto mb-4">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ yoyo: Infinity, duration: 2 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </motion.div>
      </div>
      <h1 className="text-3xl font-bold mb-2">Calculate Your Income Wisely</h1>
      <p className="text-gray-400 text-sm">
        Calculate your income tax, convert hourly rates to monthly salary, and
        find gross salary requirements
        <br />
        according to Pakistan&apos;s latest 2024-2025 tax regulations
      </p>
    </div>
  );
}

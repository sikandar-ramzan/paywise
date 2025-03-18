type RequiredGrossSalaryProps = {
  takeHome: number | "";
  monthlyTax: number;
  requiredGrossSalary: number;
  theme: "light" | "dark";
};

export default function RequiredGrossSalary({
  takeHome,
  monthlyTax,
  requiredGrossSalary,
  theme,
}: RequiredGrossSalaryProps) {
  return (
    <div
      className={`mb-6 p-4 rounded-md ${
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
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </span>
        <h3
          className={`font-semibold ${
            theme === "dark" ? "text-orange-400" : "text-orange-600"
          }`}
        >
          Required Gross Salary
        </h3>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm">To Get</p>
        <div className="flex items-center">
          <p className="font-bold text-lg">
            Rs {typeof takeHome === "number" ? takeHome.toLocaleString() : "0"}
          </p>
          <span className="mx-2 text-gray-500">+</span>
          <span className="text-sm bg-gray-700 px-2 py-1 rounded text-white">
            Tax: Rs {monthlyTax.toFixed(0).toLocaleString()}
          </span>
          <span className="mx-2 text-gray-500">→</span>
        </div>
        <p className="font-bold text-lg">
          Rs {requiredGrossSalary.toFixed(0).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

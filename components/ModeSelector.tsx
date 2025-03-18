type ModeSelectorProps = {
  mode: "calculate" | "find" | "hourly";
  setMode: (mode: "calculate" | "find" | "hourly") => void;
  theme: "light" | "dark";
  income: number | "";
  setTakeHome: (value: number | "") => void;
  calculatedTakeHome?: number;
};

export default function ModeSelector({
  mode,
  setMode,
  theme,
  income,
  setTakeHome,
  calculatedTakeHome,
}: ModeSelectorProps) {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-500 mb-2">Calculation Mode</p>
      <div className="grid grid-cols-3 gap-2">
        <button
          className={`p-3 rounded-md flex justify-center cursor-pointer ${
            mode === "calculate"
              ? theme === "dark"
                ? "bg-white text-gray-900"
                : "bg-gray-900 text-white"
              : theme === "dark"
              ? "bg-gray-700 text-gray-400"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => {
            setMode("calculate");
          }}
        >
          <span className="text-sm">Calculate Tax</span>
        </button>
        <button
          className={`p-3 rounded-md flex justify-center ${
            mode === "find"
              ? theme === "dark"
                ? "bg-white text-gray-900"
                : "bg-gray-900 text-white"
              : theme === "dark"
              ? "bg-gray-700 text-gray-400"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => {
            // If switching tabs and there's a value in income field, use it as the desired take-home
            if (income !== "") {
              setTakeHome(income);
            } else if (calculatedTakeHome) {
              // If we have calculated values, use the calculated take-home amount
              setTakeHome(calculatedTakeHome);
            }

            setMode("find");
          }}
        >
          <span className="text-sm">Find Gross</span>
        </button>
        <button
          className={`p-3 rounded-md flex justify-center cursor-pointer ${
            mode === "hourly"
              ? theme === "dark"
                ? "bg-white text-gray-900"
                : "bg-gray-900 text-white"
              : theme === "dark"
              ? "bg-gray-700 text-gray-400"
              : "bg-gray-100 text-gray-500"
          }`}
          onClick={() => {
            setMode("hourly");
          }}
        >
          <span className="text-sm">Hourly Rate</span>
        </button>
      </div>
    </div>
  );
}

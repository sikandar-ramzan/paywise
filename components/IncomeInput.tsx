import { KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { convertToWords } from "@/utils/number-to-words";

type IncomeInputProps = {
  value: number | "";
  onChange: (value: number | "") => void;
  placeholder: string;
  theme: "light" | "dark";
};

export default function IncomeInput({
  value,
  onChange,
  placeholder,
  theme,
}: IncomeInputProps) {
  // Handle Enter key press to close the mobile keyboard
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "Return") {
      // Blur the input to dismiss the keyboard
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="mb-6">
      <label className="text-sm text-gray-500 mb-2 block">
        {placeholder.includes("take-home")
          ? "Desired Take-Home Amount"
          : "Monthly Income"}
      </label>
      <div className="flex">
        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-700 bg-gray-800 text-gray-400">
          Rs.
        </span>
        <Input
          type="number"
          inputMode="numeric"
          placeholder={placeholder}
          className={`rounded-l-none ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700 text-white"
              : "bg-white border-gray-300"
          }`}
          value={value === "" ? "" : value}
          onChange={(e) => {
            const inputValue = e.target.value;
            onChange(inputValue === "" ? "" : Number(inputValue.split(".")[0]));
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      {value !== "" && (
        <p className="text-sm mt-2 text-gray-400 italic">
          {convertToWords(typeof value === "number" ? value : 0)}
        </p>
      )}
    </div>
  );
}

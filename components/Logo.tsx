import { motion } from "framer-motion";

type LogoProps = {
  theme: "light" | "dark";
};

export default function Logo({ theme }: LogoProps) {
  return (
    <div className="absolute top-4 left-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center"
      >
        <div className="mr-2 w-7 h-7 bg-gradient-to-br from-blue-500 to-cyan-300 rounded-md flex items-center justify-center shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <div className="font-bold text-xl">
          <span
            className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
          >
            Pay
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-300">
            Wise
          </span>
        </div>
      </motion.div>
    </div>
  );
}

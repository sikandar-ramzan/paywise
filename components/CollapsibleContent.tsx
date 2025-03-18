import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CollapsibleContentProps = {
  title: string;
  children: React.ReactNode;
  theme: "light" | "dark";
  initiallyOpen?: boolean;
  buttonText?: string;
};

export default function CollapsibleContent({
  title,
  children,
  theme,
  initiallyOpen = false,
  buttonText = "Learn More",
}: CollapsibleContentProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="mt-8 w-full">
      {!isOpen ? (
        <div className="flex justify-center">
          <button
            onClick={() => setIsOpen(true)}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
              theme === "dark"
                ? "underline  text-white"
                : "underline  text-gray-800"
            } transition-colors`}
          >
            {buttonText} {title}
          </button>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden`}
          >
            <div className="mb-2 flex justify-between items-center">
              <h2 className="text-xl font-bold">{title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className={`px-3 py-1 rounded-md text-sm ${
                  theme === "dark"
                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                } transition-colors`}
              >
                Hide
              </button>
            </div>
            <div>{children}</div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

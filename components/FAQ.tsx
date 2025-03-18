import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQProps = {
  theme: "light" | "dark";
};

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ({ theme }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "How is income tax calculated in Pakistan?",
      answer:
        "Income tax in Pakistan follows a progressive taxation system based on income slabs. For the 2024-2025 tax year, income up to Rs. 600,000 is tax-free. Income between Rs. 600,001 to 1,200,000 is taxed at 5% of the amount exceeding Rs. 600,000. Higher income slabs have progressively higher tax rates up to 35% for the highest income bracket. PayWise calculator uses these rates to calculate your exact tax liability.",
    },
    {
      question:
        "How do I convert my hourly rate to a monthly salary in Pakistan?",
      answer:
        "To convert an hourly rate to a monthly salary, multiply your hourly rate by the number of hours you work per day, then multiply that by the number of working days in a month (typically 22 days for a standard work month). PayWise does this calculation automatically and also applies the appropriate tax calculations to show your after-tax monthly income.",
    },
    {
      question: "What is the current USD to PKR exchange rate used in PayWise?",
      answer:
        "PayWise uses a default exchange rate of 280.26 PKR per USD, but you can update this to the latest exchange rate when using the Hourly Rate calculator. The calculator will then convert your USD hourly rate to PKR and calculate taxes accordingly.",
    },
    {
      question: "How accurate is the PayWise tax calculator?",
      answer:
        "PayWise uses the latest 2024-2025 tax regulations from Pakistan's Federal Board of Revenue (FBR) to calculate income tax. The calculator accounts for the progressive tax slabs and provides accurate calculations for monthly and annual tax liabilities. However, it's important to note that your actual tax may vary based on deductions, exemptions, or other factors specific to your situation.",
    },
    {
      question:
        "What is the difference between gross salary and take-home salary?",
      answer:
        "Gross salary is your total income before any deductions or taxes. Take-home salary (or net salary) is what you actually receive after all taxes and other deductions have been subtracted from your gross salary. PayWise helps you understand both figures and the relationship between them.",
    },
    {
      question:
        "Can I calculate how much gross salary I need for a specific take-home amount?",
      answer:
        "Yes, PayWise offers a 'Find Gross' feature specifically for this purpose. Simply enter your desired take-home amount, and the calculator will determine what gross salary you would need to earn to achieve that take-home pay after tax deductions.",
    },
  ];

  return (
    <div className="w-full mt-12 px-4">
      <div
        className={`p-6 rounded-lg ${
          theme === "dark" ? "bg-[#1a1a1a] border-gray-800" : "bg-white shadow"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`border ${
                theme === "dark" ? "border-gray-700" : "border-gray-200"
              } rounded-lg overflow-hidden`}
            >
              <button
                className={`w-full p-4 text-left flex justify-between items-center ${
                  openIndex === index
                    ? theme === "dark"
                      ? "bg-gray-800"
                      : "bg-gray-100"
                    : ""
                }`}
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`p-4 border-t ${
                        theme === "dark" ? "border-gray-700" : "border-gray-200"
                      }`}
                    >
                      <p className="text-sm">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

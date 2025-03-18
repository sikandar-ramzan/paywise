# PayWise - Pakistan Income Tax Calculator

PayWise is a comprehensive Pakistan income tax calculator that helps users calculate their tax liabilities, convert hourly rates to monthly salaries, and determine required gross salary for desired take-home pay.

**Live Demo:** [https://paywise.sikandar.dev](https://paywise.sikandar.dev)

## Features

- **Tax Calculator:** Calculate income tax based on monthly salary with instant results
- **Find Gross Salary:** Determine the gross salary needed for a specific take-home amount
- **Hourly Rate Conversion:** Convert hourly rates (PKR or USD) to monthly salary with tax calculations
- **Currency Conversion:** Built-in USD to PKR conversion with customizable exchange rates
- **Mobile Responsive:** Works seamlessly across all devices
- **Dark/Light Mode:** Toggle between dark and light themes

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI components

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/yourusername/paywise.git
cd paywise
```

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pakistan Income Tax Calculation (2024-2025)

### For Income Earned in PKR

The following tax slabs apply to salary income earned in Pakistani Rupees:

| Annual Income (PKR)    | Tax Rate                                    |
| ---------------------- | ------------------------------------------- |
| Up to 600,000          | 0%                                          |
| 600,001 to 1,200,000   | 5% of amount exceeding 600,000              |
| 1,200,001 to 2,200,000 | 30,000 + 15% of amount exceeding 1,200,000  |
| 2,200,001 to 3,200,000 | 180,000 + 25% of amount exceeding 2,200,000 |
| 3,200,001 to 4,100,000 | 430,000 + 30% of amount exceeding 3,200,000 |
| Above 4,100,000        | 700,000 + 35% of amount exceeding 4,100,000 |

#### Example Calculation (PKR)

For an annual income of PKR 1,500,000:

- Tax would be: 30,000 + 15% of (1,500,000 - 1,200,000)
- 30,000 + 15% of 300,000 = 30,000 + 45,000 = PKR 75,000

### For Foreign-Source Income (USD)

For resident individuals receiving foreign-source salary, the tax treatment depends on whether foreign income tax has been paid on that salary:

- **Foreign Tax Paid**: If foreign income tax has been paid on the foreign-source salary, it is exempt from tax in Pakistan.
- **No Foreign Tax Paid**: If no foreign income tax has been paid, the foreign-source salary is taxable in Pakistan using the same tax slabs as local income.

A tax credit is available for any foreign income tax paid, equal to the lesser of the foreign income tax paid or the Pakistan tax payable on that income.

#### Example Calculation (USD to PKR)

Assuming a foreign-source salary of USD 50,000 and an exchange rate of 1 USD = PKR 300:

1. Annual income in PKR: 50,000 × 300 = PKR 15,000,000
2. Tax calculation:
   - Up to PKR 600,000: No tax = PKR 0
   - Next PKR 600,000 (600,001 to 1,200,000): 5% of 600,000 = PKR 30,000
   - Next PKR 1,000,000 (1,200,001 to 2,200,000): 15% of 1,000,000 = PKR 150,000
   - Next PKR 1,000,000 (2,200,001 to 3,200,000): 25% of 1,000,000 = PKR 250,000
   - Next PKR 900,000 (3,200,001 to 4,100,000): 30% of 900,000 = PKR 270,000
   - Remaining PKR 10,900,000 (above 4,100,000): 35% of 10,900,000 = PKR 3,815,000
3. Total tax liability: PKR 30,000 + 150,000 + 250,000 + 270,000 + 3,815,000 = PKR 4,515,000

Therefore, on a salary of USD 50,000 (equivalent to PKR 15,000,000), the income tax payable in Pakistan would be PKR 4,515,000, provided no foreign income tax has been paid.

## Deployment

The project is deployed using [Vercel](https://vercel.com/), with automatic deployments from the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

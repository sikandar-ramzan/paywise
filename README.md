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

## Tax Calculation Formula

PayWise uses the latest Pakistan income tax slabs for 2024-2025:

| Annual Income (PKR)    | Tax Rate                                    |
| ---------------------- | ------------------------------------------- |
| Up to 600,000          | 0%                                          |
| 600,001 to 1,200,000   | 5% of amount exceeding 600,000              |
| 1,200,001 to 2,200,000 | 30,000 + 15% of amount exceeding 1,200,000  |
| 2,200,001 to 3,200,000 | 180,000 + 25% of amount exceeding 2,200,000 |
| 3,200,001 to 4,100,000 | 430,000 + 30% of amount exceeding 3,200,000 |
| Above 4,100,000        | 700,000 + 35% of amount exceeding 4,100,000 |

## Deployment

The project is deployed using [Vercel](https://vercel.com/), with automatic deployments from the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "PayWise Tax Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "PKR",
    },
    description:
      "Calculate income tax, convert hourly pay to monthly salary, and determine required gross salary according to Pakistan's latest tax regulations.",
    featureList: [
      "Calculate tax on monthly income",
      "Find required gross salary for desired take-home pay",
      "Convert hourly rates to monthly salary with tax calculations",
      "Support for PKR and USD with customizable exchange rates",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "125",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

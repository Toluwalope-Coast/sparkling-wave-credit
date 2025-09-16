import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark SME — Business Loans for Nigerian SMEs | Spark Wave Credit",
  description:
    "Fast, flexible SME loans for working capital, equipment, and expansion. Transparent fees, quick approval (24–72h). Apply online with Spark Wave.",
  keywords:
    "SME loans Nigeria, business loans Nigeria, Spark SME, Spark Wave Credit, working capital loan, equipment financing, expansion loans, small business funding, quick SME loans, civil servant loans alternative, Nigerian SME financing",
  authors: [{ name: "Spark Wave Credit" }],
  creator: "Spark Wave Credit",
  publisher: "Sparkling Wave Investment Company Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.sparkwavecredit.com/loans/spark-sme",
    siteName: "Spark Wave Credit",
    title: "Spark SME — Business Loans for Nigerian SMEs",
    description:
      "Fast, flexible SME loans for working capital, equipment, and expansion. Transparent fees, quick approval (24–72h).",
    images: [
      {
        url: "https://www.sparkwavecredit.com/img/banner/spark-sme-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spark SME - Business Loans for Nigerian SMEs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark SME — Business Loans for Nigerian SMEs",
    description:
      "Fast, flexible SME loans for working capital, equipment, and expansion. Transparent fees, quick approval (24–72h).",
    images: ["https://www.sparkwavecredit.com/img/banner/spark-sme-og.jpg"],
  },
  alternates: {
    canonical: "https://www.sparkwavecredit.com/loans/spark-sme",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function SparkSMELayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.sparkwavecredit.com/loans/spark-sme#service",
            name: "Spark SME — Business Loans",
            url: "https://www.sparkwavecredit.com/loans/spark-sme",
            serviceType: "Business loan service for SMEs",
            description:
              "Fast, flexible SME loans for Nigerian businesses — working capital, equipment, and expansion. Transparent fees and quick approval (24–72h).",
            brand: { "@type": "Brand", name: "Spark Wave" },
            provider: {
              "@type": "FinancialService",
              name: "Spark Wave Credit",
              legalName: "Sparkling Wave Investment Company Limited",
              url: "https://www.sparkwavecredit.com/",
              logo: "https://www.sparkwavecredit.com/img/logo.webp",
              areaServed: "NG",
              currenciesAccepted: "NGN",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  telephone: "+234-XXXXXXXXXX",
                  email: "support@sparkwavecredit.com",
                  availableLanguage: ["en"],
                  areaServed: "NG",
                },
              ],
            },
            areaServed: { "@type": "Country", name: "Nigeria" },
            serviceAudience: {
              "@type": "BusinessAudience",
              name: "Small and Medium Enterprises",
            },
            termsOfService: "https://www.sparkwavecredit.com/policy",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Spark SME Loan Offers",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Working Capital Loan",
                  category: "SME Loan",
                  url: "https://www.sparkwavecredit.com/loans/spark-sme#working-capital",
                  eligibility:
                    "Registered business or entrepreneur with verifiable income.",
                  areaServed: "NG",
                  availability: "InStock",
                },
                {
                  "@type": "Offer",
                  name: "Equipment Finance",
                  category: "SME Loan",
                  url: "https://www.sparkwavecredit.com/loans/spark-sme#equipment",
                  eligibility:
                    "Registered business with purchase quotation or invoice.",
                  areaServed: "NG",
                  availability: "InStock",
                },
                {
                  "@type": "Offer",
                  name: "Expansion Loan",
                  category: "SME Loan",
                  url: "https://www.sparkwavecredit.com/loans/spark-sme#expansion",
                  eligibility:
                    "Operating history and repayment capacity required.",
                  areaServed: "NG",
                  availability: "InStock",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.sparkwavecredit.com/loans/spark-sme#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can apply for Spark SME?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Registered businesses, startups, and entrepreneurs with verifiable income or operations.",
                },
              },
              {
                "@type": "Question",
                name: "How much can I borrow?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Loan limits depend on profile, revenue, and repayment capacity.",
                },
              },
              {
                "@type": "Question",
                name: "How long does approval take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most applications are processed within 24–72 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need collateral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "In most cases, no collateral is required — eligibility is based on verification and repayment history.",
                },
              },
              {
                "@type": "Question",
                name: "Can I repay early?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, early repayment is allowed without penalty.",
                },
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.sparkwavecredit.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Loans",
                item: "https://www.sparkwavecredit.com/loans",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Spark SME — Business Loans",
                item: "https://www.sparkwavecredit.com/loans/spark-sme",
              },
            ],
          }),
        }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": "https://www.sparkwavecredit.com/loans/spark-sme#howto",
            name: "How to Get a Spark SME Loan",
            description:
              "A simple, four-step process for Nigerian SMEs to apply for business loans.",
            totalTime: "P3D",
            step: [
              {
                "@type": "HowToStep",
                name: "Apply in Minutes",
                text: "Submit your application via website, USSD, or mobile app.",
                url: "https://www.sparkwavecredit.com/loans/spark-sme#apply",
              },
              {
                "@type": "HowToStep",
                name: "Verify Business Profile",
                text: "Provide basic business details and bank statements for quick checks.",
                url: "https://www.sparkwavecredit.com/loans/spark-sme#verify",
              },
              {
                "@type": "HowToStep",
                name: "Approval (24–72h)",
                text: "We evaluate your eligibility and share an offer with transparent fees.",
                url: "https://www.sparkwavecredit.com/loans/spark-sme#approve",
              },
              {
                "@type": "HowToStep",
                name: "Receive Funds",
                text: "Funds are disbursed directly to your business account.",
                url: "https://www.sparkwavecredit.com/loans/spark-sme#disburse",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}

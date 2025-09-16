import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Spark Credit — Civil Servant Loans (Remita Integrated) | Spark Wave Credit",
  description:
    "Spark Credit offers fast, salary-backed loans for Nigerian civil servants via Remita integration. No collateral, quick approval in 24–48h, transparent fees. Apply today with Spark Wave.",
  keywords:
    "Spark Credit, civil servant loans Nigeria, Remita loans Nigeria, salary-backed loans, quick civil servant loan, Remita integration loan, government worker loans, Spark Wave Credit, fast loans for civil servants, payroll loans Nigeria",
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
    url: "https://www.sparkwavecredit.com/loans/spark-credit",
    siteName: "Spark Wave Credit",
    title: "Spark Credit — Civil Servant Loans (Remita Integrated)",
    description:
      "Fast, salary-backed loans for Nigerian civil servants via Remita integration. No collateral, quick approval in 24–48h, transparent fees.",
    images: [
      {
        url: "https://www.sparkwavecredit.com/img/banner/spark-credit-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spark Credit - Civil Servant Loans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Credit — Civil Servant Loans (Remita Integrated)",
    description:
      "Fast, salary-backed loans for Nigerian civil servants via Remita integration. No collateral, quick approval in 24–48h.",
    images: ["https://www.sparkwavecredit.com/img/banner/spark-credit-og.jpg"],
  },
  alternates: {
    canonical: "https://www.sparkwavecredit.com/loans/spark-credit",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function SparkCreditLayout({
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-credit#service",
            name: "Spark Credit — Civil Servant Loans (Remita Integrated)",
            url: "https://www.sparkwavecredit.com/loans/spark-credit",
            serviceType: "Civil Servant Loan Service",
            description:
              "Fast, salary-backed loans for Nigerian civil servants, seamlessly powered by Remita. No collateral required and repayment via automatic salary deductions.",
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
              "@type": "Audience",
              audienceType: "Civil Servants",
            },
            termsOfService: "https://www.sparkwavecredit.com/policy",
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-credit#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who can apply for Spark Credit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Any Nigerian civil servant with salary collection through Remita.",
                },
              },
              {
                "@type": "Question",
                name: "How long does approval take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most applications are approved within 24–48 hours.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need collateral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Salary history and Remita integration are enough.",
                },
              },
              {
                "@type": "Question",
                name: "How does repayment work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Deductions are made automatically from your salary via Remita.",
                },
              },
              {
                "@type": "Question",
                name: "Can I repay early?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Early repayment is allowed without penalties.",
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
                name: "Spark Credit — Civil Servant Loans (Remita Integrated)",
                item: "https://www.sparkwavecredit.com/loans/spark-credit",
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-credit#howto",
            name: "How to Apply for Spark Credit Civil Servant Loan",
            description:
              "Step-by-step guide for Nigerian civil servants applying for Spark Credit loans via Remita integration.",
            totalTime: "P2D",
            step: [
              {
                "@type": "HowToStep",
                name: "Apply",
                text: "Start your application via USSD, website, or mobile app.",
                url: "https://www.sparkwavecredit.com/loans/spark-credit#apply",
              },
              {
                "@type": "HowToStep",
                name: "Verify Salary",
                text: "Remita integration automatically checks your payroll details.",
                url: "https://www.sparkwavecredit.com/loans/spark-credit#verify",
              },
              {
                "@type": "HowToStep",
                name: "Approval",
                text: "Loan approval within 24–48 hours. Offer shared with repayment plan.",
                url: "https://www.sparkwavecredit.com/loans/spark-credit#approval",
              },
              {
                "@type": "HowToStep",
                name: "Receive Funds",
                text: "Loan disbursed directly to your bank account.",
                url: "https://www.sparkwavecredit.com/loans/spark-credit#funds",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Spark Lyfestyle — Buy Now Pay Later (BNPL) in Nigeria | Spark Wave Credit",
  description:
    "Spark Lyfestyle lets you buy phones, laptops, appliances, and lifestyle essentials now and pay later in easy installments. Flexible 3–12 month repayment plans. FCCPC compliant.",
  keywords:
    "BNPL Nigeria, buy now pay later Nigeria, Spark Lyfestyle, pay-as-you-go loans Nigeria, phone financing Nigeria, laptop installment plan Nigeria, appliance financing Nigeria, Spark Wave Credit, lifestyle loans Nigeria, consumer credit Nigeria",
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
    url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle",
    siteName: "Spark Wave Credit",
    title: "Spark Lyfestyle — Buy Now Pay Later (BNPL) in Nigeria",
    description:
      "Spark Lyfestyle lets you buy phones, laptops, appliances, and lifestyle essentials now and pay later in easy installments. Flexible 3–12 month repayment plans.",
    images: [
      {
        url: "https://www.sparkwavecredit.com/img/banner/spark-lyfestyle-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spark Lyfestyle - Buy Now Pay Later",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Lyfestyle — Buy Now Pay Later (BNPL) in Nigeria",
    description:
      "Spark Lyfestyle lets you buy phones, laptops, appliances, and lifestyle essentials now and pay later in easy installments. Flexible 3–12 month repayment plans.",
    images: [
      "https://www.sparkwavecredit.com/img/banner/spark-lyfestyle-og.jpg",
    ],
  },
  alternates: {
    canonical: "https://www.sparkwavecredit.com/loans/spark-lyfestyle",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function SparkLyfestyleLayout({
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
            "@id":
              "https://www.sparkwavecredit.com/loans/spark-lyfestyle#service",
            name: "Spark Lyfestyle — Buy Now Pay Later (BNPL)",
            url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle",
            serviceType: "Consumer credit — Buy Now Pay Later",
            description:
              "Spark Lyfestyle offers BNPL services for phones, laptops, appliances, and lifestyle essentials in Nigeria. Flexible 3–12 month repayments with transparent fees.",
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
              audienceType: "Consumers",
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-lyfestyle#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "What items can I buy with Spark Lyfestyle?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Phones, laptops, appliances, and lifestyle essentials from approved vendors.",
                },
              },
              {
                "@type": "Question",
                name: "Do I need collateral?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Repayment is tied to your verified income source.",
                },
              },
              {
                "@type": "Question",
                name: "How long does approval take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typically 24–48 hours.",
                },
              },
              {
                "@type": "Question",
                name: "How do repayments work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You pay monthly installments as per your repayment schedule.",
                },
              },
              {
                "@type": "Question",
                name: "Can I pay off early?",
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
                name: "Spark Lyfestyle — Buy Now Pay Later (BNPL)",
                item: "https://www.sparkwavecredit.com/loans/spark-lyfestyle",
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
            "@id":
              "https://www.sparkwavecredit.com/loans/spark-lyfestyle#howto",
            name: "How to Use Spark Lyfestyle Buy Now Pay Later",
            description:
              "Step-by-step guide for buying products with Spark Lyfestyle BNPL in Nigeria.",
            totalTime: "P2D",
            step: [
              {
                "@type": "HowToStep",
                name: "Choose Your Product",
                text: "Select phones, laptops, appliances, or lifestyle items from approved vendors.",
                url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle#choose",
              },
              {
                "@type": "HowToStep",
                name: "Apply",
                text: "Submit your Spark Lyfestyle BNPL application via website, USSD, or mobile app.",
                url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle#apply",
              },
              {
                "@type": "HowToStep",
                name: "Approval",
                text: "Receive approval within 24–48 hours and get your repayment plan.",
                url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle#approve",
              },
              {
                "@type": "HowToStep",
                name: "Take Home Today",
                text: "Spark pays the vendor, you take home your product, and repay in installments.",
                url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle#takehome",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}

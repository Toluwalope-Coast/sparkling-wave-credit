import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spark Green — Solar & Climate Finance in Nigeria | Spark Wave Credit",
  description:
    "Finance solar panels, inverters, and batteries with Spark Green. Flexible 3–18 month repayments, vetted installers, transparent fees. Approval in 24–72h.",
  keywords:
    "solar financing Nigeria, inverter loan Nigeria, battery finance, climate finance Nigeria, renewable energy loan, Spark Green, Spark Wave Credit, solar instalment plan, SME solar loan, home solar loan",
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
    url: "https://www.sparkwavecredit.com/loans/spark-green",
    siteName: "Spark Wave Credit",
    title: "Spark Green — Solar & Climate Finance in Nigeria",
    description:
      "Finance solar panels, inverters, and batteries with Spark Green. Flexible 3–18 month repayments, vetted installers, transparent fees.",
    images: [
      {
        url: "https://www.sparkwavecredit.com/img/banner/spark-green-og.jpg",
        width: 1200,
        height: 630,
        alt: "Spark Green - Solar & Climate Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Green — Solar & Climate Finance in Nigeria",
    description:
      "Finance solar panels, inverters, and batteries with Spark Green. Flexible 3–18 month repayments, vetted installers, transparent fees.",
    images: ["https://www.sparkwavecredit.com/img/banner/spark-green-og.jpg"],
  },
  alternates: {
    canonical: "https://www.sparkwavecredit.com/loans/spark-green",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function SparkGreenLayout({
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-green#service",
            name: "Spark Green — Solar & Climate Finance",
            url: "https://www.sparkwavecredit.com/loans/spark-green",
            serviceType: "Solar and climate finance",
            description:
              "Affordable financing for solar panels, inverters, batteries, and climate-friendly projects with vetted installer partners and flexible 3–18 month repayments.",
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
              audienceType: "Households, SMEs, Communities",
            },
            termsOfService: "https://www.sparkwavecredit.com/policy",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Spark Green Offers",
              itemListElement: [
                {
                  "@type": "Offer",
                  name: "Home Solar Bundle",
                  category: "Solar Finance",
                  url: "https://www.sparkwavecredit.com/loans/spark-green#home",
                  eligibility:
                    "Valid ID, BVN, address, bank statements; installer quote.",
                  areaServed: "NG",
                  availability: "InStock",
                },
                {
                  "@type": "Offer",
                  name: "SME Hybrid System",
                  category: "Solar Finance",
                  url: "https://www.sparkwavecredit.com/loans/spark-green#sme",
                  eligibility:
                    "Business documents (if available) and installer quote.",
                  areaServed: "NG",
                  availability: "InStock",
                },
                {
                  "@type": "Offer",
                  name: "Community / Mini-grid",
                  category: "Climate Finance",
                  url: "https://www.sparkwavecredit.com/loans/spark-green#community",
                  eligibility:
                    "Site assessment, installer EPC proposal, affordability checks.",
                  areaServed: "NG",
                  availability: "PreOrder",
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-green#faq",
            mainEntity: [
              {
                "@type": "Question",
                name: "What can I finance with Spark Green?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Solar panels, inverters, batteries, cabling, and related climate-friendly hardware.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide installers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We match you with vetted partners or work with your preferred installer.",
                },
              },
              {
                "@type": "Question",
                name: "How long does approval take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Typically 24–72 hours after documents and installer quote are received.",
                },
              },
              {
                "@type": "Question",
                name: "What are the tenure options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Commonly 3–18 months, depending on project size and profile.",
                },
              },
              {
                "@type": "Question",
                name: "Is collateral required?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Usually no; the financed assets and affordability checks apply.",
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
                name: "Spark Green — Solar & Climate Finance",
                item: "https://www.sparkwavecredit.com/loans/spark-green",
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
            "@id": "https://www.sparkwavecredit.com/loans/spark-green#howto",
            name: "How to Get Spark Green Solar & Climate Finance",
            description:
              "Four-step process for financing solar and climate-friendly projects in Nigeria.",
            totalTime: "P3D",
            step: [
              {
                "@type": "HowToStep",
                name: "Apply",
                text: "Start online, via USSD, or app.",
                url: "https://www.sparkwavecredit.com/loans/spark-green#apply",
              },
              {
                "@type": "HowToStep",
                name: "Get a Quote",
                text: "Provide installer quotation or request a partner installer.",
                url: "https://www.sparkwavecredit.com/loans/spark-green#quote",
              },
              {
                "@type": "HowToStep",
                name: "Approval",
                text: "Affordability checks and approval within 24–72 hours.",
                url: "https://www.sparkwavecredit.com/loans/spark-green#approve",
              },
              {
                "@type": "HowToStep",
                name: "Install & Activate",
                text: "Funds disbursed, equipment installed and commissioned.",
                url: "https://www.sparkwavecredit.com/loans/spark-green#install",
              },
            ],
          }),
        }}
      />

      {children}
    </>
  );
}

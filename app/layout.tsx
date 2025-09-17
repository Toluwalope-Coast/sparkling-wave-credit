import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternetCheck from "@/utils/InternetChecker";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title:
    "Spark Wave Credit | SME Loans, Civil Servant Loans, Solar Finance & BNPL Nigeria",
  description:
    "Spark Wave Credit offers fast, transparent financing in Nigeria — SME business loans, civil servant salary-backed loans (Remita), solar & climate finance, and buy now pay later (BNPL). Apply online or via USSD. FCCPC compliant and NDPR secure.",
  keywords:
    "Spark Wave Credit, SME loans Nigeria, business loans Nigeria, civil servant loans Nigeria, Remita loans, salary-backed loans, solar financing Nigeria, climate finance Nigeria, BNPL Nigeria, buy now pay later Nigeria, pay-as-you-go loans, quick loans Nigeria, Spark SME, Spark Credit, Spark Green, Spark Lyfestyle",
  authors: [{ name: "Spark Wave Credit" }],
  creator: "Spark Wave Credit",
  publisher: "Sparkling Wave Investment Company Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.sparkwavecredit.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.sparkwavecredit.com",
    siteName: "Spark Wave Credit",
    title:
      "Spark Wave Credit | SME Loans, Civil Servant Loans, Solar Finance & BNPL Nigeria",
    description:
      "Spark Wave Credit offers fast, transparent financing in Nigeria — SME business loans, civil servant salary-backed loans (Remita), solar & climate finance, and buy now pay later (BNPL). Apply online or via USSD. FCCPC compliant and NDPR secure.",
    images: [
      {
        url: "/img/banner/banner.png",
        width: 1200,
        height: 630,
        alt: "Spark Wave Credit - Smart Finance, Bright Future",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Spark Wave Credit | SME Loans, Civil Servant Loans, Solar Finance & BNPL Nigeria",
    description:
      "Spark Wave Credit offers fast, transparent financing in Nigeria — SME business loans, civil servant salary-backed loans (Remita), solar & climate finance, and buy now pay later (BNPL). Apply online or via USSD. FCCPC compliant and NDPR secure.",
    images: ["/img/banner/banner.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              "@id": "https://www.sparkwavecredit.com/#org",
              name: "Spark Wave Credit",
              url: "https://www.sparkwavecredit.com/",
              legalName: "Sparkling Wave Investment Company Limited",
              logo: "https://www.sparkwavecredit.com/static/brand/spark-wave-logo.png",
              brand: {
                "@type": "Brand",
                name: "Spark Wave",
              },
              slogan: "Smart Finance, Bright Future",
              description:
                "Fast, secure, and transparent financing across SME loans, civil servant loans (Remita), solar & climate finance, and BNPL.",
              areaServed: "NG",
              currenciesAccepted: "NGN",
              paymentAccepted: "Card, BankTransfer, DirectDebit",
              sameAs: [
                "https://www.facebook.com/sparkwavecredit",
                "https://www.instagram.com/sparkwavecredit",
                "https://www.linkedin.com/company/sparkwavecredit",
                "https://x.com/sparkwavecredit",
              ],
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
              address: {
                "@type": "PostalAddress",
                addressCountry: "NG",
              },
              knowsAbout: [
                "SME loans",
                "civil servant loans via Remita",
                "solar finance",
                "climate finance",
                "BNPL",
                "loan calculator",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Spark Suite",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Spark SME — Business Loans",
                    url: "https://www.sparkwavecredit.com/loans/spark-sme",
                  },
                  {
                    "@type": "Offer",
                    name: "Spark Credit — Civil Servant Loans (Remita)",
                    url: "https://www.sparkwavecredit.com/loans/spark-credit",
                  },
                  {
                    "@type": "Offer",
                    name: "Spark Green — Solar & Climate Finance",
                    url: "https://www.sparkwavecredit.com/loans/spark-green",
                  },
                  {
                    "@type": "Offer",
                    name: "Spark Lyfestyle — BNPL",
                    url: "https://www.sparkwavecredit.com/loans/spark-lyfestyle",
                  },
                ],
              },
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.sparkwavecredit.com/#website",
              url: "https://www.sparkwavecredit.com/",
              name: "Spark Wave Credit",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.sparkwavecredit.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col">
          <InternetCheck />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

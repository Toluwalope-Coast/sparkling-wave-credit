"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillBank } from "react-icons/ai";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDollarSign,
  FiBriefcase,
  FiChevronDown,
  FiShield,
  FiZap,
  FiSun,
  FiShoppingCart,
  FiCreditCard,
  FiGlobe,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState(0); // 0 = first FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    accountNumber: "",
    bankName: "",
    bvn: "",
    phoneNumber: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const faqData = [
    {
      question: "Who can apply for Spark Credit (civil servant loan)?",
      answer:
        "Any verified civil servant whose salary is collected through Remita is eligible to apply.",
    },
    {
      question: "How fast will I receive my loan?",
      answer:
        "Most approved loans are disbursed within 24 hours after successful verification.",
    },
    {
      question: "Do you charge hidden fees?",
      answer:
        "No. All fees are transparent and disclosed upfront before you accept an offer.",
    },
    {
      question: "Can I repay early?",
      answer:
        "Yes. Early repayment is allowed without penalty, and interest is recalculated accordingly.",
    },
    {
      question: "Which products do you offer?",
      answer:
        "Spark SME (business loans), Spark Credit (civil servant loans via Remita), Spark Green (solar & climate finance), and Spark Lyfestyle (BNPL).",
    },
  ];

  const brands = [
    // { src: "/img/brand/brand1.png", alt: "Brand 1" },
    {
      src: "/img/brand/brand6.png",
      alt: "fccpc",
      href: "",
    },
    { src: "/img/brand/brand7.png", alt: "npdr" },
    { src: "/img/brand/brand8.png", alt: "remita" },
    { src: "/img/brand/wema-bank.png", alt: "wema bank" },
    {
      src: "/img/brand/brand2.png",
      alt: "Brand 2",
      href: "https://www.coastresearchtechnology.com.ng",
    },
    {
      src: "/img/brand/coast-infrastructure.png",
      alt: "Coast System & Technologies",
      href: "https://www.coastinfrastructure.com.ng",
    },
    {
      src: "/img/brand/Coast-System-&-Technologies.png",
      alt: "Coast System & Technologies",
      href: "https://coastsystemtechnologies.com.ng",
    },
  ];

  const repeatedBrands = [...brands, ...brands];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://www.sparkwavecredit.com/#faq",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden min-h-screen flex items-center h-[120vh]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url(/img/banner/banner.png)",
            }}
          ></div>

          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary-500 opacity-50 z-10"></div>

          <div className="container mx-auto px-12 relative z-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Smart Finance,{" "}
                  <span className="text-secondary">Bright Future</span>
                </h1>
                <p className="text-xl text-gray-200">
                  Fast, secure, and transparent financing for civil servants,
                  businesses, green energy projects, and lyfestyle essentials.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <FiCheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">FCCPC Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <FiShield className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-medium">
                      Remita-Integrated
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <FiShield className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">NDPC Secure</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                    <AiFillBank className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm font-medium">WEMA Bank</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/loans"
                    className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 inline-flex items-center gap-2 group"
                  >
                    Apply Now
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                  >
                    Check Balance
                  </Link>
                </div>
              </div>

              {/* Eligibility Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 lg:max-w-md lg:justify-self-end mt-10">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Check Your Eligibility
                  </h3>
                  <p className="text-gray-200 text-md">
                    Quick verification to get started
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="block text-white text-[12px] font-medium mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-[12px] font-medium mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                        placeholder="Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-[12px] font-medium mb-1">
                        Middle Name
                      </label>
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                        placeholder="R"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-[12px] font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                      placeholder="08012345678"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-white text-[12px] font-medium mb-1">
                        Bank Name
                      </label>
                      <select
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                      >
                        <option value="" className="text-gray-800">
                          Select Bank
                        </option>
                        <option value="First Bank" className="text-gray-800">
                          First Bank
                        </option>
                        <option value="Access Bank" className="text-gray-800">
                          Access Bank
                        </option>
                        <option value="GTBank" className="text-gray-800">
                          GTBank
                        </option>
                        <option value="Zenith Bank" className="text-gray-800">
                          Zenith Bank
                        </option>
                        <option value="UBA" className="text-gray-800">
                          UBA
                        </option>
                        <option value="FCMB" className="text-gray-800">
                          FCMB
                        </option>
                        <option value="Stanbic IBTC" className="text-gray-800">
                          Stanbic IBTC
                        </option>
                        <option value="Union Bank" className="text-gray-800">
                          Union Bank
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-white text-[12px] font-medium mb-1">
                        Account Number
                      </label>
                      <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                        placeholder="5012284010"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-[12px] font-medium mb-1">
                      BVN
                    </label>
                    <input
                      type="text"
                      name="bvn"
                      value={formData.bvn}
                      onChange={handleInputChange}
                      maxLength={11}
                      className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary text-[12px]"
                      placeholder="22222222223"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300"
                  >
                    Check Eligibility
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services - The Spark Suite */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Services – The Spark Suite
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our tailored financial products designed for every need
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Sparkwave Credit */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/img/banner/bradcam2.png"
                    alt="Spark Credit"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiCreditCard className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">
                        Personal Credit
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Sparkwave Credit
                    </h3>
                    <p className="text-white/90 text-sm">₦50,000 - ₦200,000</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Salary-backed loans for civil servants, seamlessly powered
                    by Remita.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Quick approval in 24-48 hours
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Flexible repayment terms
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Remita salary verification
                    </li>
                  </ul>
                  <Link
                    href="/loans/spark-credit"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sparkwave SME */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/img/banner/loan.png"
                    alt="Spark SME"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiBriefcase className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">
                        Business Loans
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Sparkwave SME
                    </h3>
                    <p className="text-white/90 text-sm">
                      ₦100,000 - ₦1,000,000
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Fuel your growth with quick, flexible loans for SMEs and
                    entrepreneurs.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Fast business funding
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Up to 12 months tenure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Competitive interest rates
                    </li>
                  </ul>
                  <Link
                    href="/loans/spark-sme"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sparkwave Green */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/spark-green-hero.jpg"
                    alt="Spark Green"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiSun className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">
                        Solar Finance
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Sparkwave Green
                    </h3>
                    <p className="text-white/90 text-sm">
                      ₦200,000 - ₦2,000,000
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Affordable financing for solar installations and
                    climate-friendly projects.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Solar system financing
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Up to 24 months tenure
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Climate-friendly projects
                    </li>
                  </ul>
                  <Link
                    href="/loans/spark-green"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Sparkwave Lyfestyle */}
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src="/spark-lyfestyle.jpg"
                    alt="Spark Lyfestyle"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FiShoppingCart className="w-6 h-6 text-white" />
                      <span className="text-white font-semibold">BNPL</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Sparkwave Lyfestyle
                    </h3>
                    <p className="text-white/90 text-sm">
                      ₦50,000 - ₦1,500,000
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Get gadgets, appliances, and essentials today. Pay in simple
                    installments.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Buy now, pay later
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Flexible installment plans
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Lifestyle essentials
                    </li>
                  </ul>
                  <Link
                    href="/loans/spark-lyfestyle"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
                  >
                    Learn More
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                Learn More About Our Services
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with Spark Wave is simple
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  number: "01",
                  title: "Apply in Minutes",
                  description:
                    "Apply via USSD, website, or app. Complete your application in just a few minutes with our streamlined process.",
                },
                {
                  number: "02",
                  title: "Get Verified & Approved",
                  description:
                    "Automated checks, salary validation via Remita. Our advanced verification system ensures quick and secure approval.",
                },
                {
                  number: "03",
                  title: "Receive Your Funds",
                  description:
                    "Quick disbursement directly to your account. Get your funds within 24 hours of approval.",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-primary-200 text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/loans/spark-credit"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                See Full Process
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Spark Wave Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Spark Wave?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive financial solutions with competitive
                rates, flexible terms, and exceptional customer service
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                {
                  icon: FiDollarSign,
                  title: "Transparent Fees",
                  description: "No hidden charges",
                  color: "text-green-500",
                  bgColor: "bg-green-50",
                },
                {
                  icon: FiShield,
                  title: "Trusted Systems",
                  description: "Backed by Remita & regulated frameworks",
                  color: "text-blue-500",
                  bgColor: "bg-blue-50",
                },
                {
                  icon: FiGlobe,
                  title: "Wide Coverage",
                  description:
                    "Serving SMEs, civil servants, households, and communities",
                  color: "text-purple-500",
                  bgColor: "bg-purple-50",
                },
                {
                  icon: FiCheckCircle,
                  title: "Fully Compliant",
                  description:
                    "FCCPC licensed, NDPC secure, aligned with CBN guidelines",
                  color: "text-orange-500",
                  bgColor: "bg-orange-50",
                },
                {
                  icon: FiZap,
                  title: "Fast & Reliable",
                  description: "Apply and get funded in record time",
                  color: "text-yellow-500",
                  bgColor: "bg-yellow-50",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                Apply Now
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* By the Numbers Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                By the Numbers
              </h2>
              <p className="text-xl text-gray-600">Our impact in numbers</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "₦35M+",
                  label: "disbursed in loans",
                  color: "text-green-600",
                },
                {
                  number: "1,000+",
                  label: "customers served",
                  color: "text-blue-600",
                },
                {
                  number: "95%",
                  label: "approval rate for civil servants",
                  color: "text-purple-600",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-gray-50 rounded-2xl"
                >
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        {/* <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Success Stories
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Ada",
                  role: "SME Owner",
                  quote:
                    "Spark Wave helped me expand my shop with the right capital at the right time.",
                  avatar: "A",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  name: "John",
                  role: "Ministry of Education",
                  quote:
                    "As a civil servant, I finally got access to a quick loan without stress or delays.",
                  avatar: "J",
                  color: "bg-purple-100 text-purple-600",
                },
                {
                  name: "Chinedu",
                  role: "Homeowner",
                  quote:
                    "Through Spark Green, I installed solar for my home and cut my electricity bills in half.",
                  avatar: "C",
                  color: "bg-green-100 text-green-600",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center font-bold text-lg`}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
        </section> */}

        {/* Resources & Insights Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Resources & Insights
              </h2>
              <p className="text-xl text-gray-600">
                Stay informed with expert financial guidance
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiSun,
                  title: "Budget Smarter: 5 tips to manage your salary better",
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-50",
                },
                {
                  icon: FiSun,
                  title:
                    "Solar Finance Made Easy: How Spark Green can save you money",
                  color: "text-green-600",
                  bgColor: "bg-green-50",
                },
                {
                  icon: FiShoppingCart,
                  title:
                    "BNPL Explained: How to use Spark Lyfestyle responsibly",
                  color: "text-orange-600",
                  bgColor: "bg-orange-50",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 ${resource.bgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <resource.icon className={`w-6 h-6 ${resource.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                Visit Blog
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white">
          <div className="container pr-12">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Purple Block with Photo */}
              <div className="relative">
                <div className="bg-gradient-to-b from-primary-600 to-primary-800 rounded-2xl h-full min-h-[700px] relative overflow-hidden">
                  {/* Photo overlapping the purple block */}
                  <div className="absolute z-20">
                    <Image
                      src="/img/about/aboutImg.png"
                      alt="Team Member"
                      width={400}
                      height={500}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - FAQ Content */}
              <div className="lg:col-span-1 pl-12 py-12">
                <div className="max-w-2xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-12">
                    Frequently Asked Questions
                  </h2>

                  <div className="space-y-6">
                    {faqData.map((item, index) => (
                      <div
                        key={index}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div
                          className="flex items-center justify-between cursor-pointer hover:text-primary py-3 rounded-lg transition-all duration-300 ease-in-out"
                          onClick={() => toggleFAQ(index)}
                        >
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.question}
                          </h3>
                          <div
                            className={`transition-transform duration-300 ease-in-out ${
                              openFAQ === index ? "rotate-180" : "rotate-0"
                            }`}
                          >
                            <FiChevronDown className="text-primary text-2xl" />
                          </div>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            openFAQ === index
                              ? "max-h-96 opacity-100 mt-4"
                              : "max-h-0 opacity-0 mt-0"
                          }`}
                        >
                          <p className="text-gray-600 leading-relaxed pb-2">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/faq"
                      className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
                    >
                      See All FAQs &gt;&gt;&gt;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Real stories from satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Kazeem Olarewaju",
                  image: "/img/testmonial/Kazeem.jpg",
                  testimonial:
                    "Thanks to Sparkling Wave Investment, I now have the car of my dreams! Their seamless process and personalized service made it possible for me to purchase a vehicle without hassle. I'm grateful for their support and highly recommend their services to anyone in need of financial assistance.",
                },
                {
                  name: "Favour Iroghama",
                  image: "/img/testmonial/Favour.jpg",
                  testimonial:
                    "As a small business owner, securing funding can be daunting, but Sparkling Wave Investment Company Limited made the process seamless. Their flexible terms and quick approval allowed me to expand my operations and realize my business goals.",
                },
                {
                  name: "Stephen Tovia",
                  image: "/img/testmonial/Tovia.jpg",
                  testimonial:
                    "I was hesitant about taking out a loan until I discovered Sparkling Wave Investment Company Limited. The application process was seamless, and their transparency and low processing fees made the decision easy. Highly recommended!",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    &ldquo;{testimonial.testimonial}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="relative w-full">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25, // speed of the scroll (lower = faster)
              }}
            >
              {repeatedBrands.map((brand, index) => (
                <div
                  key={index}
                  className="flex justify-center flex-shrink-0 w-40"
                >
                  {brand.href ? (
                    <Link
                      href={brand.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      <Image
                        src={brand.src}
                        alt={brand.alt}
                        width={160}
                        height={160}
                        className="h-20 w-auto object-contain"
                      />
                    </Link>
                  ) : (
                    <Image
                      src={brand.src}
                      alt={brand.alt}
                      width={160}
                      height={160}
                      className="h-20 w-auto object-contain"
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Barcode Image (Static Below) */}
          <div className="mt-12 flex justify-center">
            <Image
              src="/img/brand/ndpc-barcode.jpg"
              alt="ndpc"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: "url(/img/banner/loan.png)",
            }}
          ></div>

          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-primary-900 opacity-40 z-10"></div>

          <div className="container mx-auto px-12 relative z-20">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to spark your future?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Apply today and unlock brighter opportunities.
              </p>
              <Link
                href="/loans/spark-credit"
                className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

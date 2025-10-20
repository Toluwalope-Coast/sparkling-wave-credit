"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiShield,
  FiDollarSign,
  FiShoppingCart,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiZap,
  FiClock,
  FiSmartphone,
  FiFileText,
  FiUsers,
  FiStar,
  FiHome,
  FiBriefcase,
} from "react-icons/fi";

// Purchase Calculator Component
const PurchaseCalculator = () => {
  const [productPrice, setProductPrice] = useState(200000);
  const [tenure, setTenure] = useState(6);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);

  useEffect(() => {
    // Simple calculation - in real app, this would use actual interest rates
    const interestRate = 0.15; // 15% annual interest for BNPL
    const monthlyRate = interestRate / 12;
    const monthlyPayment =
      (productPrice * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    setMonthlyInstallment(Math.round(monthlyPayment));
  }, [productPrice, tenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <p className="text-gray-600 mb-8 text-center font-bold">
        See how affordable your purchase can be
      </p>

      <div className="space-y-6">
        {/* Product Price Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Product Price: {formatCurrency(productPrice)}
          </label>
          <input
            type="range"
            min="50000"
            max="1500000"
            step="25000"
            value={productPrice}
            onChange={(e) => setProductPrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₦50,000</span>
            <span>₦1,500,000</span>
          </div>
        </div>

        {/* Tenure Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tenure: {tenure} month{tenure > 1 ? "s" : ""}
          </label>
          <input
            type="range"
            min="3"
            max="12"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>3 months</span>
            <span>12 months</span>
          </div>
        </div>

        {/* Monthly Installment Display */}
        <div className="bg-purple-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Estimated Monthly Installment
          </p>
          <p className="text-3xl font-bold text-purple-600">
            {formatCurrency(monthlyInstallment)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            *Figures are estimates. Final offer depends on product and
            eligibility
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300"
          >
            Apply Now
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Pre-qualification Form Component
const PreQualificationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    bvn: "",
    phoneNumber: "",
    employer: "",
    itemPriceRange: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <p className="text-gray-600 mb-8 text-center font-bold">
        Quick pre-qualification in under 2 minutes
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Enter your full name"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              BVN
            </label>
            <input
              type="text"
              name="bvn"
              value={formData.bvn}
              onChange={handleChange}
              required
              maxLength={11}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="11-digit BVN"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="08012345678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employer/Income Source
          </label>
          <input
            type="text"
            name="employer"
            value={formData.employer}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="e.g., Company Name, Business Owner, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Item Price Range
          </label>
          <select
            name="itemPriceRange"
            value={formData.itemPriceRange}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select price range</option>
            <option value="50k-200k">₦50,000 - ₦200,000</option>
            <option value="200k-500k">₦200,000 - ₦500,000</option>
            <option value="500k-800k">₦500,000 - ₦800,000</option>
            <option value="800k-1.2m">₦800,000 - ₦1,200,000</option>
            <option value="1.2m-1.5m">₦1,200,000 - ₦1,500,000</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiCheck className="w-5 h-5" />
          Check Eligibility
        </button>
      </form>
    </div>
  );
};

export default function SparkLyfestylePage() {
  const [openFAQ, setOpenFAQ] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const keyFeatures = [
    {
      icon: FiShoppingCart,
      title: "Wide Product Range",
      description: "Phones, laptops, appliances, lifestyle items",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FiClock,
      title: "Flexible Tenure (3–12 months)",
      description: "Choose what fits your budget",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FiDollarSign,
      title: "Transparent Fees",
      description: "No hidden charges, clear repayment plan",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FiZap,
      title: "Fast Approval",
      description: "Apply and get approved in as little as 24 hours",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const useCases = [
    {
      icon: FiSmartphone,
      title: "Smartphones & Laptops",
      description: "For work or school",
      color: "text-blue-600",
    },
    {
      icon: FiHome,
      title: "Home Appliances",
      description: "Refrigerators, freezers, washing machines",
      color: "text-green-600",
    },
    {
      icon: FiBriefcase,
      title: "Electronics & TVs",
      description: "Home electronics and appliances",
      color: "text-purple-600",
    },
    {
      icon: FiUsers,
      title: "Furniture & Lifestyle",
      description: "Furniture & lifestyle products",
      color: "text-orange-600",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Choose Your Product",
      description: "From approved vendors or your quotation",
      icon: FiShoppingCart,
    },
    {
      number: "02",
      title: "Apply for Spark Lyfestyle",
      description: "Via web, USSD, or mobile app",
      icon: FiSmartphone,
    },
    {
      number: "03",
      title: "Approval (24–48h)",
      description: "Receive repayment schedule & terms",
      icon: FiCheckCircle,
    },
    {
      number: "04",
      title: "Take Home Today",
      description: "Spark pays vendor; you pay in installments",
      icon: FiHome,
    },
  ];

  const faqData = [
    {
      question: "What items can I buy with Spark Lyfestyle?",
      answer:
        "Phones, laptops, appliances, and lifestyle essentials from approved vendors.",
    },
    {
      question: "Do I need collateral?",
      answer: "No. Repayment is tied to your verified income source.",
    },
    {
      question: "How long does approval take?",
      answer: "Typically 24–48 hours.",
    },
    {
      question: "How do repayments work?",
      answer: "You pay monthly installments as per your repayment schedule.",
    },
    {
      question: "Can I pay off early?",
      answer: "Yes. Early repayment is allowed without penalties.",
    },
  ];

  const testimonials = [
    {
      name: "Chidera",
      role: "University Student",
      content:
        "I got my laptop through Spark Lyfestyle. Easy approval, simple monthly payments.",
    },
    {
      name: "Bola",
      role: "Civil Servant",
      content:
        "Instead of saving for months, I got my fridge right away. Repayments are smooth and affordable.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Sticky Apply Button */}
      <div
        className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
          isSticky ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Link
          href="#apply"
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        >
          <FiShoppingCart className="w-4 h-4" />
          Apply Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-white py-20 overflow-hidden h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/spark-lyfestyle-hero.jpg)",
          }}
        ></div>

        {/* Primary Color Overlay */}
        <div className="absolute inset-0 bg-purple-600 opacity-60 z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-16 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Buy Now, Pay Later —{" "}
              <span className="text-yellow-400">The Spark Way</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Access the gadgets, appliances, and lifestyle essentials you need
              today, and spread your payments over time with Spark Lyfestyle.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">FCCPC Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiShield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">NDPC Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiDollarSign className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">
                  Transparent Repayments
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link
                href="#apply"
                className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply for Spark Lyfestyle
              </Link>
              <Link
                href="#calculator"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-lg hover:transform hover:-translate-y-1"
              >
                Talk to an Advisor on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                See How Affordable Your Purchase Can Be
              </h2>
              <p className="text-lg text-gray-600">
                Use our interactive calculator to plan your BNPL purchase
              </p>
            </div>
            <PurchaseCalculator />
          </div>
        </div>
      </section>

      {/* Pre-qualification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Quick Pre-Qualification
              </h2>
              <p className="text-lg text-gray-600">
                Check your eligibility in under 2 minutes
              </p>
            </div>
            <PreQualificationForm />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Shop Today, Pay Tomorrow
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Spark Lyfestyle makes life easier by giving you access to
                  phones, laptops, household appliances, and lifestyle
                  essentials without paying everything upfront.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Instead of waiting, you can shop today and pay in manageable
                  installments — fully transparent and designed to fit your
                  monthly income.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/spark-lyfestyle.jpg"
                    alt="Spark Lyfestyle Overview"
                    fill
                    className="object-cover rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-purple-600 text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                  <div className="text-center">
                    <p className="text-lg sm:text-2xl font-bold">24-48h</p>
                    <p className="text-xs sm:text-sm">Quick Approval</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Spark Lyfestyle?
              </h2>
              <p className="text-lg text-gray-600">
                Key features that make us the preferred choice for BNPL
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center`}
                  >
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Common Use Cases
              </h2>
              <p className="text-lg text-gray-600">
                Discover what you can buy with Spark Lyfestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center`}
                    >
                      <useCase.icon className={`w-6 h-6 ${useCase.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Eligibility & Documents
                </h2>
                <div className="space-y-4">
                  {[
                    "Valid ID + BVN",
                    "Verifiable income source (salary, business, or employer)",
                    "3–6 months' bank statements",
                    "Proof of address",
                    "Product invoice or quotation",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">Valid Government ID</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">BVN Verification</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">
                      Bank Statements (3-6 months)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">Proof of Address</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-purple-600" />
                    <span className="text-gray-700">
                      Product Invoice or Quotation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Simple steps to get your Spark Lyfestyle BNPL
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                      <div className="w-full h-full bg-purple-600"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 text-lg"
              >
                Apply Now
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Spark Lyfestyle Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Spark Lyfestyle?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Shop now, pay later — without stress
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Transparent repayment plans
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      No collateral required
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Perfect for both personal and household needs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 text-lg"
            >
              Talk to an Advisor on WhatsApp
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Real experiences from customers who trust Spark Lyfestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
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
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about Spark Lyfestyle
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                    <div
                      className={`transition-transform duration-300 ${
                        openFAQ === index ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <FiChevronDown className="text-purple-600 text-2xl" />
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFAQ === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
              Compliance & Trust
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <Image
                  src="/fccpc-ndpc.png"
                  alt="FCCPC"
                  width={100}
                  height={100}
                  className="flex justify-center items-center w-full"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  FCCPC & NDPC Compliant
                </h3>
                <p className="text-gray-600 text-sm">
                  Fully compliant with Nigerian financial regulations
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <FiCheckCircle className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Pricing Policy
                </h3>
                <p className="text-gray-600 text-sm">No hidden fees policy</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <FiUsers className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vendor-Vetted Ecosystem
                </h3>
                <p className="text-gray-600 text-sm">
                  Quality standards and vetting processes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="apply"
        className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/loan.png)",
          }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-purple-800 opacity-40 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Enjoy What You Need Today — and Pay at Your Own Pace
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Join thousands of Nigerians who have made their purchases with
                Spark Lyfestyle. Get what you need now and pay comfortably over
                time.
              </p>
            </div>
            <div className="text-right">
              <div className="flex flex-col gap-4 items-end">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-purple-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Apply for Spark Lyfestyle
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-lg hover:transform hover:-translate-y-1"
                >
                  Talk to an Advisor on WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiCheckCircle,
  FiShield,
  FiBriefcase,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiClock,
  FiDollarSign,
  FiSmartphone,
  FiStar,
} from "react-icons/fi";
import Image from "next/image";

// Loan Calculator Component
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(6);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  useEffect(() => {
    // Simple calculation - in real app, this would use actual interest rates
    const interestRate = 0.18; // 18% annual interest for SME loans
    const monthlyRate = interestRate / 12;
    const monthlyPayment =
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    setMonthlyRepayment(Math.round(monthlyPayment));
  }, [loanAmount, tenure]);

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
        Plan your repayment in seconds
      </p>

      <div className="space-y-6">
        {/* Loan Amount Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount: {formatCurrency(loanAmount)}
          </label>
          <input
            type="range"
            min="100000"
            max="5000000"
            step="50000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₦100,000</span>
            <span>₦5,000,000</span>
          </div>
        </div>

        {/* Tenure Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tenure: {tenure} month{tenure > 1 ? "s" : ""}
          </label>
          <input
            type="range"
            min="1"
            max="12"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1 month</span>
            <span>12 months</span>
          </div>
        </div>

        {/* Monthly Repayment Display */}
        <div className="bg-blue-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Estimated Monthly Repayment
          </p>
          <p className="text-3xl font-bold text-blue-600">
            {formatCurrency(monthlyRepayment)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            *Figures are estimates; final offers depend on verification
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
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
    businessName: "",
    cacNumber: "",
    monthlyRevenue: "",
    purpose: "",
    fullName: "",
    email: "",
    phone: "",
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
        No documents needed to start
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your business name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CAC Number (if available)
            </label>
            <input
              type="text"
              name="cacNumber"
              value={formData.cacNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="RC123456789"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Revenue Band
          </label>
          <select
            name="monthlyRevenue"
            value={formData.monthlyRevenue}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select revenue band</option>
            <option value="100k-300k">₦100,000 - ₦300,000</option>
            <option value="300k-500k">₦300,000 - ₦500,000</option>
            <option value="500k-1m">₦500,000 - ₦1,000,000</option>
            <option value="1m-1.5m">₦1,000,000 - ₦1,500,000</option>
            <option value="1.5m-3m">₦1,500,000 - ₦3,000,000</option>
            <option value="3m+">₦3,000,000+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Purpose
          </label>
          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select purpose</option>
            <option value="working-capital">Working Capital</option>
            <option value="equipment">Equipment Purchase</option>
            <option value="expansion">Business Expansion</option>
            <option value="inventory">Inventory Restock</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
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
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="08012345678"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiCheck className="w-5 h-5" />
          Check Eligibility
        </button>
      </form>
    </div>
  );
};

export default function SparkSMEPage() {
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

  const howItWorks = [
    {
      number: "01",
      title: "Apply",
      description: "Submit your application via website, USSD, or mobile app.",
      icon: FiSmartphone,
    },
    {
      number: "02",
      title: "Verify Business Profile",
      description:
        "Provide basic business details and bank statements for quick checks.",
      icon: FiCheckCircle,
    },
    {
      number: "03",
      title: "Approval (24–72h)",
      description:
        "We evaluate your eligibility and share an offer with transparent fees.",
      icon: FiClock,
    },
    {
      number: "04",
      title: "Receive Funds",
      description: "Funds are disbursed directly to your business account.",
      icon: FiDollarSign,
    },
  ];

  const faqData = [
    {
      question: "Who can apply for Spark SME?",
      answer:
        "Registered businesses, startups, and entrepreneurs with verifiable income or operations.",
    },
    {
      question: "How much can I borrow?",
      answer: "Loan limits depend on profile, revenue, and repayment capacity.",
    },
    {
      question: "How long does approval take?",
      answer: "Most applications are processed within 24–72 hours.",
    },
    {
      question: "Do I need collateral?",
      answer:
        "In most cases, no collateral is required — eligibility is based on verification and repayment history.",
    },
    {
      question: "Can I repay early?",
      answer: "Yes, early repayment is allowed without penalty.",
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
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        >
          <FiBriefcase className="w-4 h-4" />
          Apply Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-white py-20 overflow-hidden h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/spark-sme-hero.jpg)",
          }}
        ></div>

        {/* Primary Color Overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-60 z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-16 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Grow Your Business,{" "}
              <span className="text-yellow-400">Spark Your Success</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Fast, flexible SME loans for working capital, equipment, and
              expansion — with transparent fees and quick approval (24–72h).
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiCheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm font-medium">FCCPC Compliant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiShield className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-medium">NDPR Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/30 transition-all duration-300">
                <FiUsers className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">
                  Trusted Vendor Ecosystem
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link
                href="#apply"
                className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply for Spark SME
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

      {/* Loan Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Plan Your Repayment in Seconds
              </h2>
              <p className="text-lg text-gray-600">
                Use our interactive calculator to estimate your monthly payments
              </p>
            </div>
            <LoanCalculator />
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
                No documents needed to start
              </p>
            </div>
            <PreQualificationForm />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Running a Business in Nigeria is Tough
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Cash flow dips, supplier deadlines, and growth opportunities
              don&apos;t wait. Spark SME gives you the capital to move fast: buy
              inventory, upgrade equipment, expand locations, or bridge
              receivables without slowing down.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiBriefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quick Approval (24–72h)
                </h3>
                <p className="text-gray-600">
                  Fast screening and decision process
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexible Repayment (1–12 months)
                </h3>
                <p className="text-gray-600">Aligned with your cash cycle</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiShield className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  No hidden charges; fee breakdown upfront
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Growth-Ready
                </h3>
                <p className="text-gray-600">
                  Working capital, equipment finance, expansion
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Common Use Cases
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Inventory Restock
                </h3>
                <p className="text-gray-600 text-sm">
                  Before peak sales periods
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Equipment Purchase
                </h3>
                <p className="text-gray-600 text-sm">
                  POS, machinery, tools upgrade
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Branch Expansion
                </h3>
                <p className="text-gray-600 text-sm">
                  New locations or renovations
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Payroll Smoothing
                </h3>
                <p className="text-gray-600 text-sm">
                  During receivable delays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Eligibility & Documents
              </h2>
              <p className="text-lg text-gray-600">
                Simple checklist to get started
              </p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Registered business or operating proof (shop lease,
                        invoices)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Valid ID (Director/Owner), BVN
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Bank statements (3–6 months)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        CAC docs (if available)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Basic cash-flow info / revenue band
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="bg-yellow-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-600 font-bold text-sm">
                        💡
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Pro Tip
                      </h4>
                      <p className="text-gray-600 text-sm">
                        You can apply first and upload documents later. Start
                        your application now and complete verification as you
                        go.
                      </p>
                    </div>
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
                Simple steps to get your Spark SME loan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                      <div className="w-full h-full bg-blue-600"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 text-lg"
              >
                Start Your Application
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Spark SME Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Spark SME?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Built for Nigerian SMEs and solo founders
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Fast decisions, minimal paperwork
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Compliance-led and data-driven risk checks
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Real support: speak to an advisor when you need help
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
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
                Real experiences from businesses that trust Spark SME
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Amina</h4>
                    <p className="text-gray-600 text-sm">Boutique Owner</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;Spark SME gave me the working capital to restock. Sales
                  tripled the next cycle.&rdquo;
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-lg">T</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tunde</h4>
                    <p className="text-gray-600 text-sm">Furniture Maker</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &ldquo;I upgraded machines and doubled output in 2 months.
                  Straightforward process.&rdquo;
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
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
                Get answers to common questions about Spark SME
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
                      <FiChevronDown className="text-blue-600 text-2xl" />
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
                  FCCPC & NDPR Compliant
                </h3>
                <p className="text-gray-600 text-sm">
                  Fully compliant with Nigerian financial regulations
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <FiCheckCircle className="w-24 h-24 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600 text-sm">No hidden fees policy</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <FiUsers className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Vetted Partnerships
                </h3>
                <p className="text-gray-600 text-sm">
                  Vendor/installer partnerships vetted for quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="apply"
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/loan.png)",
          }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-800 opacity-40 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Spark Your Business Growth Today
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Join thousands of Nigerian businesses that have grown with Spark
                SME. Get the capital you need to scale and succeed.
              </p>
            </div>
            <div className="text-right">
              <div className="flex flex-col gap-4 items-end">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Apply for Spark SME
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

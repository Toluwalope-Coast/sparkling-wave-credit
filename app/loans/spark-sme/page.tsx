"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronDown,
  FiZap,
  FiShield,
  FiClock,
  FiDollarSign,
  FiBriefcase,
  FiTrendingUp,
  FiHome,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiPhone,
  FiCreditCard,
  FiGift,
  FiTarget,
  FiBarChart,
} from "react-icons/fi";

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
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/spark-sme-hero.jpg)",
          }}
        ></div>

        {/* Primary Color Overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-80 z-10"></div>

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

      {/* Final CTA Section */}
      <section
        id="apply"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Spark Your Business Growth Today
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Join thousands of Nigerian businesses that have grown with Spark
              SME. Get the capital you need to scale and succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </main>
  );
}

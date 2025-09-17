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
  const [isSticky, setIsSticky] = useState(false);

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
          className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        >
          <FiShoppingCart className="w-4 h-4" />
          Apply Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
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
                <span className="text-sm font-medium">NDPR Secure</span>
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

      {/* Final CTA Section */}
      <section
        id="apply"
        className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Enjoy What You Need Today — and Pay at Your Own Pace
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Join thousands of Nigerians who have made their purchases with
              Spark Lyfestyle. Get what you need now and pay comfortably over
              time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
    </main>
  );
}

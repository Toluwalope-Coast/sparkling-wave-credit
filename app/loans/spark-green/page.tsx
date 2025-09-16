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
  FiSun,
  FiBattery,
  FiHome,
  FiBriefcase,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiFileText,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

// Solar Project Calculator Component
const SolarCalculator = () => {
  const [projectSize, setProjectSize] = useState(500000);
  const [tenure, setTenure] = useState(12);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  useEffect(() => {
    // Simple calculation - in real app, this would use actual interest rates
    const interestRate = 0.12; // 12% annual interest for solar projects
    const monthlyRate = interestRate / 12;
    const monthlyPayment =
      (projectSize * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
      (Math.pow(1 + monthlyRate, tenure) - 1);
    setMonthlyRepayment(Math.round(monthlyPayment));
  }, [projectSize, tenure]);

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
        Estimate your monthly payment
      </p>

      <div className="space-y-6">
        {/* Project Size Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Size: {formatCurrency(projectSize)}
          </label>
          <input
            type="range"
            min="150000"
            max="5000000"
            step="25000"
            value={projectSize}
            onChange={(e) => setProjectSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₦150,000</span>
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
            min="3"
            max="18"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>3 months</span>
            <span>18 months</span>
          </div>
        </div>

        {/* Monthly Repayment Display */}
        <div className="bg-green-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Estimated Monthly Repayment
          </p>
          <p className="text-3xl font-bold text-green-600">
            {formatCurrency(monthlyRepayment)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            *Estimates only; final offer depends on verification and installer
            quote
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
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
    phoneNumber: "",
    projectType: "",
    location: "",
    estimatedBudget: "",
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
        <div className="grid md:grid-cols-2 gap-4">
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
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
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
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="08012345678"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Type
          </label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="">Select project type</option>
            <option value="home">Home Solar System</option>
            <option value="business">Business/Commercial</option>
            <option value="community">Community/Mini-grid</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State/Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="e.g., Lagos, Abuja, Port Harcourt"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Budget (₦)
          </label>
          <input
            type="number"
            name="estimatedBudget"
            value={formData.estimatedBudget}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="150000"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiCheck className="w-5 h-5" />
          Check Eligibility
        </button>
      </form>
    </div>
  );
};

export default function SparkGreenPage() {
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
      icon: FiSun,
      title: "Solar & Storage Finance",
      description: "Panels, inverters, batteries, balance-of-system",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: FiZap,
      title: "Reliable Power, Lower Bills",
      description: "Reduce diesel spend and outages",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FiClock,
      title: "Flexible Tenure (3–18 months)",
      description: "Align payments to cash flow",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FiDollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees; clear schedule upfront",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FiShield,
      title: "Vetted Vendors",
      description: "Certified partner-installers and after-sales support",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const useCases = [
    {
      icon: FiHome,
      title: "Home Backup",
      description: "1–5 kVA solar + battery",
      color: "text-blue-600",
    },
    {
      icon: FiBriefcase,
      title: "SME Hybrid Systems",
      description: "Restaurants, clinics, retail",
      color: "text-green-600",
    },
    {
      icon: FiUsers,
      title: "Office Retrofits",
      description: "Inverter + LiFePO₄ storage",
      color: "text-purple-600",
    },
    {
      icon: FiSun,
      title: "Mini-grid / Community Solar",
      description: "Staged deployments",
      color: "text-orange-600",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Apply",
      description:
        "Start online, via USSD, or app to begin your solar financing journey.",
      icon: FiZap,
    },
    {
      number: "02",
      title: "Get a Quote",
      description:
        "Provide installer quotation or request a partner installer from our network.",
      icon: FiFileText,
    },
    {
      number: "03",
      title: "Verify & Approve (24–72h)",
      description:
        "We confirm budget and repayment capacity with quick verification.",
      icon: FiCheckCircle,
    },
    {
      number: "04",
      title: "Install & Activate",
      description:
        "Funds disbursed, equipment installed and commissioned by certified partners.",
      icon: FiSun,
    },
  ];

  const whyChooseUs = [
    "Quality hardware through vetted partners",
    "Faster approvals; clear repayment plan",
    "Compliance-led, data-driven decisions",
    "Human support when you need it",
    "Transparent pricing with no hidden fees",
    "Flexible payment terms to match your budget",
  ];

  const faqData = [
    {
      question: "What can I finance with Spark Green?",
      answer:
        "Solar panels, inverters, batteries, cabling, and related climate-friendly hardware.",
    },
    {
      question: "Do you provide installers?",
      answer:
        "Yes. We match you with vetted partners or work with your preferred installer.",
    },
    {
      question: "How long does approval take?",
      answer:
        "Typically 24–72 hours after documents and installer quote are received.",
    },
    {
      question: "What are the tenure options?",
      answer: "Commonly 3–18 months, depending on project size and profile.",
    },
    {
      question: "Is collateral required?",
      answer: "Usually no; the financed assets and affordability checks apply.",
    },
    {
      question: "What documents do I need?",
      answer:
        "Valid ID, BVN, address/site location, 3-6 months bank statements, and installer quotation.",
    },
  ];

  const testimonials = [
    {
      name: "Ngozi Adebayo",
      role: "Restaurant Owner",
      content:
        "Spark Green cut our generator spend by half. Financing made it doable.",
      avatar: "/img/testmonial/Ngozi.jpg",
    },
    {
      name: "Seyi Ogunlade",
      role: "Homeowner",
      content:
        "My home now enjoys steady power. Smooth process from quote to installation.",
      avatar: "/img/testmonial/Seyi.jpg",
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
          className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        >
          <FiSun className="w-4 h-4" />
          Apply Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/spark-green-hero.jpg)",
          }}
        ></div>

        {/* Primary Color Overlay */}
        <div className="absolute inset-0 bg-green-600 opacity-80 z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-16 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Finance Green, <span className="text-yellow-400">Live Clean</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Affordable financing for solar panels, inverters, and
              climate-friendly projects. Lower bills, gain reliability, and pay
              in flexible instalments.
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
                <FiSun className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">
                  Vendor-vetted Installers
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link
                href="#apply"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply for Spark Green
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

      {/* Solar Calculator Section */}
      <section id="calculator" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Estimate Your Monthly Payment
              </h2>
              <p className="text-lg text-gray-600">
                Use our interactive calculator to plan your solar project
                financing
              </p>
            </div>
            <SolarCalculator />
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
                  Power Your Future with Clean Energy
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Power cuts and diesel costs slow homes and businesses. Spark
                  Green makes clean, reliable energy affordable with flexible
                  financing for solar panels, inverters, batteries, and
                  community or SME climate projects.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  We partner with vetted installers so you get quality hardware
                  + structured repayments that match your budget.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/inverter-installation.jpg"
                    alt="Spark Green Overview"
                    fill
                    className="object-cover top-0 rounded-2xl shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-green-600 text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                  <div className="text-center">
                    <p className="text-lg sm:text-2xl font-bold">24-72h</p>
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
                Why Choose Spark Green?
              </h2>
              <p className="text-lg text-gray-600">
                Key features that make us the preferred choice for solar
                financing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Discover how Spark Green can power your specific needs
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
                    "Valid ID & BVN",
                    "Address / site location (photos or Google pin)",
                    "3–6 months bank statements (for affordability check)",
                    "Installer quotation (we can connect you to partners)",
                    "For SMEs: CAC docs (if available)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <p className="text-green-800 font-medium">
                    💡 <strong>Tip:</strong> You can start your application;
                    upload documents later.
                  </p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Valid Government ID</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">BVN Verification</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiMapPin className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Site Location Details</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">
                      Bank Statements (3-6 months)
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white rounded-lg">
                    <FiFileText className="w-6 h-6 text-green-600" />
                    <span className="text-gray-700">Installer Quotation</span>
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
                Simple steps to get your Spark Green solar financing
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                      <div className="w-full h-full bg-green-600"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Start Your Application
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Real experiences from customers who trust Spark Green
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold text-lg">
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
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-yellow-400 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <FiSun key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about Spark Green
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl overflow-hidden"
                >
                  <div
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-all duration-300"
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
                      <FiChevronDown className="text-green-600 text-2xl" />
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
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg">
                <Image src="/FCCPC.png" alt="fccpc logo" width={300} height={300} className="flex justify-center items-center w-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    FCCPC Compliant
                  </h3>
                  <p className="text-gray-600">
                    Fully compliant with Federal Competition and Consumer
                    Protection Commission regulations
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg">
                <Image src="/ndpc.png" alt="fccpc logo" width={300} height={300} className="flex justify-center items-center w-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    NDPR Secure
                  </h3>
                  <p className="text-gray-600">
                    Your data is protected under Nigeria Data Protection
                    Regulation
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg">
                <Image src="/remita.png" alt="fccpc logo" width={300} height={300} className="flex justify-center items-center w-full" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Powered by Remita
                  </h3>
                  <p className="text-gray-600">
                    Trusted payroll integration for seamless salary verification
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        id="apply"
        className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Go Solar the Smart Way?
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              Join thousands of Nigerians who have made the switch to clean,
              reliable energy. Get started with Spark Green today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-green-800 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply for Spark Green
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

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronDown,
  FiZap,
  FiShield,
  FiDollarSign,
  FiSmartphone,
  FiFileText,
  FiArrowRight,
  FiCheck,
  FiStar,
} from "react-icons/fi";

// Loan Calculator Component
const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(6);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  useEffect(() => {
    // Simple calculation - in real app, this would use actual interest rates
    const interestRate = 0.15; // 15% annual interest
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
        Calculate your monthly repayment instantly
      </p>

      <div className="space-y-6">
        {/* Loan Amount Slider */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Amount: {formatCurrency(loanAmount)}
          </label>
          <input
            type="range"
            min="50000"
            max="3000000"
            step="25000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>₦50,000</span>
            <span>₦3,000,000</span>
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
        <div className="bg-primary-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600 mb-2">Monthly Repayment</p>
          <p className="text-3xl font-bold text-primary-600">
            {formatCurrency(monthlyRepayment)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-500 mb-4">
            *Figures are estimates; final offers depend on verification
          </p>
          <Link
            href="#apply"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300"
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
    firstName: "",
    lastName: "",
    middleName: "",
    accountNumber: "",
    bankName: "",
    bvn: "",
    phoneNumber: "",
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
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Teresa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Stoker"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Middle Name (Optional)
          </label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="R"
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
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="08012345678"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank Name
          </label>
          <select
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="">Select Bank</option>
            <option value="First Bank">First Bank</option>
            <option value="Access Bank">Access Bank</option>
            <option value="GTBank">GTBank</option>
            <option value="Zenith Bank">Zenith Bank</option>
            <option value="UBA">UBA</option>
            <option value="FCMB">FCMB</option>
            <option value="Stanbic IBTC">Stanbic IBTC</option>
            <option value="Union Bank">Union Bank</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account Number
          </label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 text-gray-900 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="5012284010"
          />
        </div>

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
            className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="22222222223"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 flex items-center justify-center gap-2"
        >
          <FiCheck className="w-5 h-5" />
          Check Eligibility
        </button>
      </form>
    </div>
  );
};

export default function SparkCreditPage() {
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
      icon: FiShield,
      title: "Remita Integrated",
      description: "Salary verification & deductions directly via Remita",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: FiZap,
      title: "Quick Disbursement",
      description: "Funds released within 24–48 hours",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: FiFileText,
      title: "No Collateral Needed",
      description: "Only salary history verification required",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: FiDollarSign,
      title: "Transparent Fees",
      description: "No hidden charges, clear deductions",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Apply",
      description:
        "Dial USSD, visit website, or use our app to start your application.",
      icon: FiSmartphone,
    },
    {
      number: "02",
      title: "Verify Salary",
      description:
        "Remita integration automatically checks your payroll details.",
      icon: FiCheckCircle,
    },
    {
      number: "03",
      title: "Eligibility Check",
      description: "We check your eligibility based on the DTI ratio.",
      icon: FiCheckCircle,
    },
    {
      number: "04",
      title: "Approval (24–48h)",
      description: "Loan offer sent with detailed repayment plan.",
      icon: FiCheckCircle,
    },
    {
      number: "05",
      title: "Receive Funds",
      description: "Loan disbursed directly to your bank account.",
      icon: FiDollarSign,
    },
  ];

  const faqData = [
    {
      question: "Who can apply for Spark Credit?",
      answer:
        "Any Nigerian civil servant with salary collection through Remita.",
    },
    {
      question: "How long does approval take?",
      answer: "Most applications are approved within 24–48 hours.",
    },
    {
      question: "Do I need collateral?",
      answer: "No. Salary history and Remita integration are enough.",
    },
    {
      question: "How does repayment work?",
      answer: "Deductions are made automatically from your salary via Remita.",
    },
    {
      question: "Can I repay early?",
      answer: "Yes. Early repayment is allowed without penalties.",
    },
    {
      question: "What documents do I need?",
      answer: "Valid ID, BVN, and last 3 months' payslip or Remita records.",
    },
  ];

  const testimonials = [
    {
      name: "Chinwe Okafor",
      role: "Civil Servant",
      content:
        "Getting my Spark Credit loan was stress-free. Salary verification was instant and repayment is automatic.",
      avatar: "/img/testmonial/Chinwe.jpg",
    },
    {
      name: "Ibrahim Mohammed",
      role: "Federal Ministry Staff",
      content:
        "I got ₦500,000 in 48 hours without collateral. The Remita deductions give me peace of mind.",
      avatar: "/img/testmonial/Ibrahim.jpg",
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
          className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl hover:transform hover:-translate-y-1"
        >
          <FiZap className="w-4 h-4" />
          Apply Now
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative flex justify-center items-center text-white overflow-hidden h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/spark-credit-hero.jpg)",
          }}
        ></div>

        {/* Primary Color Overlay */}
        <div className="absolute inset-0 bg-primary opacity-60 z-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-16 pb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              Civil Servants,{" "}
              <span className="text-secondary">Credit Made Simple</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 animate-fade-in-up animation-delay-200">
              Fast, salary-backed loans seamlessly integrated with Remita
              payroll. Secure, transparent, and hassle-free.
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
                <FiZap className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Powered by Remita</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link
                href="#apply"
                className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
              >
                Apply for Spark Credit
              </Link>
              <Link
                href="#calculator"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-lg hover:transform hover:-translate-y-1"
              >
                Check Balance
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
                Plan Your Loan Repayment
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
                  Built for Nigerian Civil Servants
                </h2>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Civil servants across Nigeria deserve easy access to credit
                  without stress. Spark Credit is built just for you —
                  leveraging Remita payroll integration to make borrowing
                  simple, secure, and automated.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  With Spark Credit, loan approval and repayment are tied
                  directly to your salary, eliminating delays and making the
                  process transparent from start to finish.
                </p>
              </div>
              <div className="relative order-1 lg:order-2">
                <div className="relative w-full h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/civil-servant.jpg"
                    alt="Spark Credit Overview"
                    fill
                    className="object-cover rounded-2xl shadow-xl top-0"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 bg-primary text-white p-3 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
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
                Why Choose Spark Credit?
              </h2>
              <p className="text-lg text-gray-600">
                Key features that make us the preferred choice for civil
                servants
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

      {/* Eligibility & Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Eligibility & Documents
                </h2>
                <div className="space-y-4">
                  {[
                    "Must be a Nigerian civil servant",
                    "Salary must be paid via Remita",
                    "BVN",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Required Documents
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FiFileText className="w-6 h-6 text-primary" />
                    <span className="text-gray-700">BVN Verification</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FiFileText className="w-6 h-6 text-primary" />
                    <span className="text-gray-700">Payslips (3 months)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <FiFileText className="w-6 h-6 text-primary" />
                    <span className="text-gray-700">Remita Records</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600">
                Simple steps to get your Spark Credit loan
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 relative z-10">
                    {step.number}
                  </div>
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-1/2 h-0.5 bg-primary -z-10 transform translate-x-0"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="#apply"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-all duration-300 text-lg"
              >
                Start Your Application
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </div>
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
                Real experiences from civil servants who trust Spark Credit
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
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
                Get answers to common questions about Spark Credit
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
                      <FiChevronDown className="text-primary text-2xl" />
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
                <Image
                  src="/FCCPC.png"
                  alt="fccpc logo"
                  width={300}
                  height={300}
                  className="flex justify-center items-center w-full"
                />
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
                <Image
                  src="/ndpc.png"
                  alt="fccpc logo"
                  width={300}
                  height={300}
                  className="flex justify-center items-center w-full"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    NDPC Secure
                  </h3>
                  <p className="text-gray-600">
                    Your data is protected under Nigeria Data Protection
                    Regulation
                  </p>
                </div>
              </div>
              <div className="flex flex-col bg-white rounded-2xl p-8 shadow-lg">
                <Image
                  src="/remita.png"
                  alt="fccpc logo"
                  width={300}
                  height={300}
                  className="flex justify-center items-center w-full"
                />
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
        className="relative py-20 bg-gradient-to-r from-primary-900 to-primary-700 text-white overflow-hidden"
      >
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Civil Servants Deserve Stress-Free Credit
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Apply now and access Spark Credit in just 24–48 hours. No
                collateral, no stress, just simple credit when you need it.
              </p>
            </div>
            <div className="text-right">
              <div className="flex flex-col gap-4 items-end">
                <Link
                  href="/contact"
                  className="bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg"
                >
                  Apply for Spark Credit
                </Link>
                <Link
                  href="/contact"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300 text-lg"
                >
                  Check Balance
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

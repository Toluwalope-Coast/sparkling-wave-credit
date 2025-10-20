import Link from "next/link";
import React from "react";
import Image from "next/image";
import {
  FiBriefcase,
  FiCheckCircle,
  FiDollarSign,
  FiCreditCard,
  FiShoppingCart,
  FiSun,
  FiArrowRight,
  FiUsers,
  FiShield,
  FiZap,
} from "react-icons/fi";

const page = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/bradcam10.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-secondary">Loan Services</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Quick approval loans that suit your terms and financial needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Loan Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of loan products designed to
              meet your personal and business financial needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Spark Credit */}
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
                    Spark Credit
                  </h3>
                  <p className="text-white/90 text-sm">₦50,000 - ₦200,000</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Quick personal loans for immediate financial needs. Fast
                  approval, flexible terms, and competitive rates.
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
                    No collateral required
                  </li>
                </ul>
                <Link
                  href="/loans/spark-credit"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Spark SME */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/img/banner/bradcam3.png"
                  alt="Spark SME"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FiBriefcase className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">
                      Business Loan
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Spark SME</h3>
                  <p className="text-white/90 text-sm">₦100,000 - ₦1,000,000</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Fuel your business growth with our SME loans. Designed for
                  small and medium enterprises to scale and expand.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Up to ₦1M funding
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Business growth support
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Flexible repayment options
                  </li>
                </ul>
                <Link
                  href="/loans/spark-sme"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Spark Green */}
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
                      Green Energy
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Spark Green</h3>
                  <p className="text-white/90 text-sm">₦200,000 - ₦2,000,000</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Invest in renewable energy solutions. Solar panels, inverters,
                  and green technology financing for a sustainable future.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Solar panel financing
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Energy savings benefits
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Long-term investment
                  </li>
                </ul>
                <Link
                  href="/loans/spark-green"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Spark Lyfestyle */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48">
                <Image
                  src="/spark-lyfestyle.jpg"
                  alt="Spark Lyfestyle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FiShoppingCart className="w-6 h-6 text-white" />
                    <span className="text-white font-semibold">
                      Buy Now, Pay Later
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Spark Lyfestyle
                  </h3>
                  <p className="text-white/90 text-sm">₦50,000 - ₦1,500,000</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Shop now, pay later. Get gadgets, appliances, and lifestyle
                  essentials today and spread payments over time.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Wide product range
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Flexible tenure (3-12 months)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    Fast approval
                  </li>
                </ul>
                <Link
                  href="/loans/spark-lyfestyle"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-all duration-300 group-hover:transform group-hover:-translate-y-1"
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Loan Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive financial solutions with competitive
              rates, flexible terms, and exceptional customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiZap,
                title: "Fast Approval",
                description:
                  "Get approved in 24-48 hours with our streamlined process",
                color: "text-yellow-500",
                bgColor: "bg-yellow-50",
              },
              {
                icon: FiShield,
                title: "Secure & Compliant",
                description:
                  "FCCPC & NDPC compliant with transparent processes",
                color: "text-green-500",
                bgColor: "bg-green-50",
              },
              {
                icon: FiUsers,
                title: "Expert Support",
                description:
                  "Dedicated customer support throughout your loan journey",
                color: "text-blue-500",
                bgColor: "bg-blue-50",
              },
              {
                icon: FiDollarSign,
                title: "Competitive Rates",
                description: "Affordable interest rates tailored to your needs",
                color: "text-purple-500",
                bgColor: "bg-purple-50",
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
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How it Works
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              At Sparkling Wave Investment Company Limited, accessing funding is
              simple. Choose your loan product, apply online, and get approved
              quickly. Our team customizes a loan to fit your needs and approves
              it promptly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                number: "01",
                title: "Choose Your Loan",
                description:
                  "Select from our range of loan products - Spark Credit, Spark SME, Spark Green, or Spark Lyfestyle. Each designed for specific needs with tailored terms and conditions.",
              },
              {
                number: "02",
                title: "Apply Online",
                description:
                  "Complete our simple online application form. Provide your details, upload required documents, and submit your application in minutes.",
              },
              {
                number: "03",
                title: "Get Approved & Funded",
                description:
                  "Our team reviews your application and approves it within 24-48 hours. Once approved, funds are disbursed directly to your account or vendor.",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col gap-4 items-start">
                <div className="w-16 h-16 bg-primary-200 text-primary rounded-full flex items-center justify-center text-xl font-semibold mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-200 leading-relaxed mb-6">
                Choose from our comprehensive range of loan products designed to
                meet your personal and business financial needs. Quick approval,
                competitive rates, and flexible terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <FiCheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm font-medium">FCCPC Compliant</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <FiShield className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">NDPC Secure</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <FiZap className="w-5 h-5 text-yellow-400" />
                  <span className="text-sm font-medium">24-48h Approval</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Apply Now
                </Link>
                <p className="text-gray-300 text-sm">
                  Or explore our loan products above
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;

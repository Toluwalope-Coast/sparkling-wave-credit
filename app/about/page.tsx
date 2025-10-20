"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiCheckCircle,
  FiChevronDown,
  FiMessageSquare,
  FiTrendingUp,
  FiBriefcase,
  FiDollarSign,
} from "react-icons/fi";
import { motion } from "framer-motion";

export default function AboutPage() {
  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  const faqData = [
    {
      question: "How long does the loan approval process take?",
      answer:
        "The duration of the loan approval process can vary depending on several factors, including the lender's internal procedures, the complexity of the loan application, and the completeness of the applicant's documentation. In general, the process typically takes anywhere from a few hours to several weeks.",
    },
    {
      question: "What documents are required for a loan application?",
      answer:
        "For the client, 3 passport photos & ID card, 2 guarantors & ID cards are required.",
    },
    {
      question: "Can I apply for a loan online?",
      answer:
        "YES. Contact our Customer Service via Call/WhatsApp for a seamless online application process.",
    },
    {
      question: "What are the eligibility criteria for obtaining a loan?",
      answer:
        "Age, Steady Income, Credit History, Debt-to-Income Ratio, Collateral (Depends on the amount), Employment Status, Residency Status.",
    },
  ];

  const advantages = [
    {
      number: "01",
      title: "Spark SME",
      description:
        "Empower your business growth with our comprehensive SME loan solutions. From working capital to expansion funding, we provide the financial support your business needs to thrive and scale effectively.",
      icon: FiBriefcase,
    },
    {
      number: "02",
      title: "Spark Credit",
      description:
        "Experience seamless salary-backed loans for civil servants through our Remita integration. Quick approval, flexible terms, and transparent processes designed specifically for government employees.",
      icon: FiDollarSign,
    },
    {
      number: "03",
      title: "Spark Green",
      description:
        "Invest in a sustainable future with our solar and climate finance solutions. From solar installations to green energy projects, we support your environmental goals while building financial stability.",
      icon: FiTrendingUp,
    },
  ];

  const testimonials = [
    {
      name: "Kazeem Olarewaju",
      image: "/img/testmonial/Kazeem.jpg",
      text: "Thanks to Sparkling Wave Investment, I now have the car of my dreams! Their seamless process and personalized service made it possible for me to purchase a vehicle without hassle. I'm grateful for their support and highly recommend their services to anyone in need of financial assistance.",
    },
    {
      name: "Favour Iroghama",
      image: "/img/testmonial/Favour.jpg",
      text: "As a small business owner, securing funding can be daunting, but Sparkling Wave Investment Company Limited made the process seamless. Their flexible terms and quick approval allowed me to expand my operations and realize my business goals. With their support, my business is thriving like never before.",
    },
    {
      name: "Stephen Tovia",
      image: "/img/testmonial/Tovia.jpg",
      text: "I was hesitant about taking out a loan until I discovered Sparkling Wave Investment Company Limited. Their Cash Loan service exceeded all my expectations. The application process was seamless, and I was impressed by how quickly they processed my request. What truly stood out to me was their commitment to transparency and affordability—their processing fee was the lowest I found, making it a no-brainer choice for me. Thanks to Sparkling Wave, I was able to address my financial needs without any stress or hassle. I highly recommend their services to anyone in need of financial assistance.",
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/bradcam2.png)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-secondary">Spark Wave</span>
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed mb-4">
              Empowering People, Enabling Growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are more than just a financial services provider—we are
              visionaries, innovators, and partners in progress.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving financial empowerment across Africa through innovative
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-primary-800 mb-4 flex items-center gap-3">
                <FiTrendingUp className="w-8 h-8" />
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide accessible, innovative, and reliable financial
                solutions that empower individuals and businesses to grow,
                thrive, and achieve long-term financial stability.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-secondary-800 mb-4 flex items-center gap-3">
                <FiBriefcase className="w-8 h-8" />
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be Africa&apos;s leading inclusive investment and credit
                solutions company, driving economic growth through financial
                empowerment and technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container pr-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Image
                src="/img/about/aboutt.png"
                alt="About Us"
                width={600}
                height={500}
                className="shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">
                Smart Finance, Bright Future
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Sparkling Wave Investment Company Limited, we are more than
                just a financial services provider—we are visionaries,
                innovators, and partners in progress. Founded with a clear
                mission to revolutionize the financial landscape, our company is
                committed to empowering individuals and businesses with
                accessible and efficient solutions that drive economic
                empowerment and foster growth.
              </p>

              <div className="space-y-4">
                {[
                  "Spark Suite: SME Loans, Civil Servant Loans, Solar Finance & BNPL",
                  "Cutting-edge Technology for Tailored Financial Solutions",
                  "Empowering Communities & Fostering Growth",
                  "Seamless Remita Integration for Civil Servants",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FiCheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/apply"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Apply for Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Spark Suite
            </h2>
            <p className="text-lg text-gray-600 max-w-5xl mx-auto">
              Empowering People, Enabling Growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col gap-4 items-start">
                <div className="w-16 h-16 bg-primary-200 text-primary rounded-full flex items-center justify-center text-xl font-semibold mb-6">
                  {advantage.number}
                </div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      {/* <section className="py-20 bg-white">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">
            Board of Trustees & Leadership
          </h2>
          <p className="text-lg text-gray-600 max-w-5xl mx-auto">
            Get to know our board members
          </p>
        </div>
      </section> */}

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
                  Frequently ask
                </h2>

                <div className="space-y-6">
                  {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-200 pb-6">
                      <div
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 ease-in-out"
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
            {testimonials.map((testimonial, index) => (
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
                <div className="relative">
                  <FiMessageSquare className="absolute -top-2 -left-2 text-primary text-3xl opacity-20" />
                  <p className="text-gray-600 leading-relaxed italic pl-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
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
              <h2 className="text-4xl font-bold mb-6">
                Ready to Spark Your Financial Future?
              </h2>
              <p className="text-xl text-gray-200 leading-relaxed">
                Choose from our comprehensive Spark Suite and get started with
                our quick and easy loan application process.
              </p>
            </div>
            <div className="text-center lg:text-right">
              <Link
                href="/apply"
                className="inline-block bg-secondary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 text-lg"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

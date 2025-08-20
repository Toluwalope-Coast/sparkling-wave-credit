"use client";

import React from "react";
import {
  FiTrendingUp,
  FiUsers,
  FiSmartphone,
  FiDollarSign,
} from "react-icons/fi";
import TotalGrossLoanDisbursedPage from "./views/gross-loans/page";
import TotalNetLoanDisbursedPage from "./views/total-net-loan-disbursed/page";
import ActiveLoansPage from "./views/active-loans/page";
import AppUserCountPage from "./views/app-user-count/page";
import AverageLoanAmountPage from "./views/average-loan-amount/page";

const AnalyticsPage = () => {
  const analyticsSections = [
    {
      title: "Loan Disbursement Analytics",
      description:
        "Comprehensive overview of loan distribution and financial performance metrics",
      icon: FiTrendingUp,
      color: "from-primary-600 to-primary-800",
      components: [
        {
          component: TotalGrossLoanDisbursedPage,
          title: "Total Gross Loan Disbursed",
        },
        {
          component: TotalNetLoanDisbursedPage,
          title: "Total Net Loan Disbursed",
        },
      ],
    },
    {
      title: "Active Loans & Outstanding Amounts",
      description:
        "Real-time tracking of active loans and outstanding loan amounts",
      icon: FiUsers,
      color: "from-green-600 to-green-800",
      components: [{ component: ActiveLoansPage, title: "Active Loans" }],
    },
    {
      title: "User & Platform Analytics",
      description:
        "App usage statistics, user engagement, and loan amount metrics",
      icon: FiSmartphone,
      color: "from-orange-600 to-orange-800",
      components: [
        { component: AppUserCountPage, title: "App User Count" },
        { component: AverageLoanAmountPage, title: "Average Loan Amount" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: "url(/img/banner/analytics.webp)",
          }}
        ></div>

        {/* Primary Color Overlay with 50% opacity */}
        <div className="absolute inset-0 bg-primary opacity-50 z-10"></div>

        <div className="container mx-auto px-12 relative z-20">
          <div className="text-center max-w-4xl mx-auto pt-24">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-secondary">SW Credit </span>Analytics
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              At SparkWave Credit, every loan is approved, disbursed, and repaid
              with full borrower consent. Salary deductions via Remita are
              automated only after loan acceptance, ensuring transparency,
              accuracy, and protection against unauthorized charges.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-amber-50 border-b-4 border-amber-200">
        <div className="container mx-auto px-12">
          <div className="bg-amber-100 border border-amber-300 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-amber-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-amber-700 leading-relaxed">
                  The analytical data presented herein does not originate from
                  the Sparkle Wave Project. Rather, it pertains to a client
                  project that commenced last year, which I managed directly.
                  The model for Sparkle Wave Credit was developed using insights
                  and inspiration derived from that prior project. Accordingly,
                  the data should be viewed solely in that context and not as a
                  direct representation of Sparkle Wave Project performance or
                  results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Content */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto">
          <div className="space-y-12">
            {analyticsSections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Section Header */}
                <div
                  className="p-8 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${
                      section.color.split(" ")[1]
                    } 0%, ${section.color.split(" ")[3]} 100%)`,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {/* <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      {section.icon && <section.icon className="w-6 h-6" />}
                    </div> */}
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                  </div>
                  <p className="text-gray-600 text-lg">{section.description}</p>
                </div>

                {/* Section Content */}
                <div className="p-8">
                  <div className="space-y-8">
                    {section.components.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="border-b border-gray-100 pb-8 last:border-b-0 last:pb-0"
                      >
                        <div className="mb-6">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <div className="w-16 h-1 bg-primary rounded-full"></div>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <item.component />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Performance Indicators
            </h2>
            <p className="text-lg text-gray-600">
              Real-time metrics that drive business decisions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FiTrendingUp,
                label: "Loan Disbursement",
                value: "Active",
                color: "text-green-600",
              },
              {
                icon: FiUsers,
                label: "App Users",
                value: "Growing",
                color: "text-blue-600",
              },
              {
                icon: FiDollarSign,
                label: "Loan Analytics",
                value: "Comprehensive",
                color: "text-primary-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AnalyticsPage;

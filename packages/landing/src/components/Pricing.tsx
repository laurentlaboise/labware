/**
 * Pricing Section
 * Three tiers: Free, Professional, Enterprise
 */

import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  color: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for trying out our AI organization',
    features: [
      'Agent 001 + 5 agents (6 total)',
      '100 messages/month',
      'Basic integrations',
      'Community support',
    ],
    cta: 'Get Started',
    color: 'border-gray-200',
  },
  {
    name: 'Professional',
    price: '$99',
    period: '/month',
    description: 'For teams ready to scale with AI',
    features: [
      'All 64 agents',
      'Unlimited messages',
      'Full tool stack',
      'Priority response',
      'Advanced analytics',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    color: 'border-blue-500',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with specific needs',
    features: [
      'Everything in Professional',
      'Custom agent training',
      'White-label options',
      'Dedicated support',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    color: 'border-purple-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

interface PricingProps {
  onGetStarted: (tier: string) => void;
  onContactSales: () => void;
}

export const Pricing: React.FC<PricingProps> = ({
  onGetStarted,
  onContactSales,
}) => {
  const handleCTAClick = (tier: PricingTier) => {
    if (tier.name === 'Enterprise') {
      onContactSales();
    } else {
      onGetStarted(tier.name.toLowerCase());
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your organization
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
                    POPULAR
                  </span>
                </div>
              )}

              <div
                className={`relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${tier.color} ${
                  tier.highlighted ? 'scale-105 md:scale-110' : ''
                }`}
              >
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 min-h-[48px]">
                  {tier.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-gray-900">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="ml-2 text-gray-600">{tier.period}</span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleCTAClick(tier)}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 ${
                    tier.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            All plans include HIPAA & FERPA compliance
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span>FERPA Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <span>Enterprise Security</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

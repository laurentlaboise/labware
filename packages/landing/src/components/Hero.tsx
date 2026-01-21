/**
 * Hero Section for Labware.icu Landing Page
 * Matches Figma design with gradient background and dual CTAs
 */

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onGetStarted: () => void;
  onMeetTeam: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted, onMeetTeam }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        >
          <span className="text-sm font-medium text-white">
            Dignity Through Utility
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-white">Your AI Organization,</span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Serve
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          64 specialized AI agents working together to serve schools and hospitals.
          <br />
          From strategic planning to daily operations—your complete AI workforce.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          {/* Primary CTA */}
          <button
            onClick={onGetStarted}
            className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 w-full sm:w-auto"
          >
            Start Free Trial
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onMeetTeam}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-200 w-full sm:w-auto group"
          >
            Meet Your Team
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">
              →
            </span>
          </button>
        </motion.div>

        {/* Stats/Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">64</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              Specialized Agents
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">40+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              AI Models
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              Always Available
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

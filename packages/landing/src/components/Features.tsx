/**
 * Features Section
 * Three core principles: Intelligent Orchestration, Cognitive Diversity, Mission-Aligned
 */

import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: '🎯',
    title: 'Intelligent Orchestration',
    description:
      'Agent 001 (Alex Strategic) coordinates 64 specialized agents, delegating tasks to the right expert every time.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🧠',
    title: 'Cognitive Diversity',
    description:
      '40+ AI models from Claude, GPT, Gemini, DeepSeek, and more—each agent uses the optimal model for their role.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '❤️',
    title: 'Mission-Aligned',
    description:
      'Every agent designed with "Dignity Through Utility" at core—serving schools and hospitals with HIPAA & FERPA compliance built-in.',
    color: 'from-pink-500 to-red-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
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
            Built for Healthcare & Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core principles power our AI organization platform
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                ></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-full">
            <div className="flex -space-x-2">
              {['🐻', '🦊', '🦉', '🐴'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white border-2 border-white shadow-sm flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700">
              64 specialized agents ready to help
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

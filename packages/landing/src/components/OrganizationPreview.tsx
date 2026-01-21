/**
 * Organization Chart Preview
 * Shows the 64-agent hierarchy with farm animal avatars
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_AGENTS, getAgentsByLayer } from '@labware/shared/src/data/agents';

interface OrganizationPreviewProps {
  onViewFullChart: () => void;
}

export const OrganizationPreview: React.FC<OrganizationPreviewProps> = ({
  onViewFullChart,
}) => {
  const [expandedLayer, setExpandedLayer] = useState<1 | 2 | 3 | null>(null);

  const layer1 = getAgentsByLayer(1); // Agent 001
  const layer2 = getAgentsByLayer(2); // 7 C-Suite agents
  const layer3 = getAgentsByLayer(3); // 56 specialists

  const toggleLayer = (layer: 1 | 2 | 3) => {
    setExpandedLayer(expandedLayer === layer ? null : layer);
  };

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
            Meet Your AI Organization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            64 specialized agents across 17 departments, organized in three
            hierarchical layers
          </p>
          <button
            onClick={onViewFullChart}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View Full Organization Chart
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>

        {/* Layered Organization View */}
        <div className="max-w-5xl mx-auto">
          {/* Layer 1: CEO Advisor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="relative">
                {/* Agent 001 Card */}
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border-2 border-amber-400 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 max-w-md">
                  <div className="flex items-center gap-4">
                    <div className="text-6xl">{layer1[0]?.visual.emoji}</div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-1">
                        Layer 1 • CEO Advisor
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {layer1[0]?.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {layer1[0]?.role}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
                          {layer1[0]?.ai_models.primary}
                        </span>
                        <span className="text-xs text-gray-500">
                          Orchestrates 64 agents
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connection line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-amber-400 to-blue-400"></div>
              </div>
            </div>
          </motion.div>

          {/* Layer 2: C-Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <button
              onClick={() => toggleLayer(2)}
              className="w-full mb-4 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-300 rounded-xl hover:border-blue-400 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👔</span>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    Layer 2: C-Suite Executives
                  </h4>
                  <p className="text-sm text-gray-600">7 executive-level agents</p>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  expandedLayer === 2 ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {expandedLayer === 2 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden"
                >
                  {layer2.map((agent) => (
                    <div
                      key={agent.id}
                      className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="text-3xl mb-2">{agent.visual.emoji}</div>
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {agent.name}
                      </div>
                      <div className="text-xs text-gray-600 truncate">
                        {agent.role}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Layer 3: Specialists */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => toggleLayer(3)}
              className="w-full mb-4 flex items-center justify-between px-6 py-4 bg-gradient-to-r from-green-50 to-teal-50 border-2 border-green-300 rounded-xl hover:border-green-400 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    Layer 3: Specialists & Experts
                  </h4>
                  <p className="text-sm text-gray-600">
                    56 operational agents across 17 departments
                  </p>
                </div>
              </div>
              <svg
                className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                  expandedLayer === 3 ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <AnimatePresence>
              {expandedLayer === 3 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {/* Department Groups */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 max-h-96 overflow-y-auto p-2">
                    {layer3.slice(0, 24).map((agent) => (
                      <div
                        key={agent.id}
                        className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="text-2xl mb-1">{agent.visual.emoji}</div>
                        <div className="text-xs font-semibold text-gray-900 truncate">
                          {agent.name.split(' ')[0]}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          {agent.department}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      onClick={onViewFullChart}
                      className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View all {layer3.length} specialists →
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">17</div>
            <div className="text-sm text-gray-600">Departments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Hierarchy Layers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">40+</div>
            <div className="text-sm text-gray-600">AI Models</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Compliance</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

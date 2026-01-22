/**
 * TeamViewModal - Full organizational chart modal
 * Shows all 64 agents in hierarchical layer structure
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ALL_AGENTS } from '@labware/shared';
import type { AgentProfile } from '@labware/shared';
import { AnimalAvatar } from './AnimalAvatar';

interface TeamViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAgentClick: (agent: AgentProfile) => void;
}

export const TeamViewModal: React.FC<TeamViewModalProps> = ({
  isOpen,
  onClose,
  onAgentClick,
}) => {
  const [expandedLayers, setExpandedLayers] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
  });

  // Group agents by layer
  const layer1Agents = ALL_AGENTS.filter((a) => a.layer === 1);
  const layer2Agents = ALL_AGENTS.filter((a) => a.layer === 2);
  const layer3Agents = ALL_AGENTS.filter((a) => a.layer === 3);

  // Group layer 3 agents by department
  const layer3ByDepartment = layer3Agents.reduce((acc, agent) => {
    if (!acc[agent.department]) {
      acc[agent.department] = [];
    }
    acc[agent.department].push(agent);
    return acc;
  }, {} as Record<string, AgentProfile[]>);

  const toggleLayer = (layer: number) => {
    setExpandedLayers((prev) => ({ ...prev, [layer]: !prev[layer] }));
  };

  const handleAgentClick = (agent: AgentProfile) => {
    onAgentClick(agent);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-10 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Full Organization Chart
                </h2>
                <p className="text-blue-100 text-sm mt-1">
                  64 specialized agents across 3 hierarchical layers
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Layer 1: CEO Advisor */}
              <div className="mb-8">
                <button
                  onClick={() => toggleLayer(1)}
                  className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedLayers[1] ? 'rotate-90' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Layer 1: CEO Advisor (1 agent)
                </button>

                {expandedLayers[1] && (
                  <div className="flex justify-center">
                    {layer1Agents.map((agent) => (
                      <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border-2 border-amber-300"
                        onClick={() => handleAgentClick(agent)}
                      >
                        <div className="flex flex-col items-center">
                          <AnimalAvatar
                            animal={agent.visual.animal_type}
                            size={100}
                            color={agent.visual.color}
                            status={agent.status}
                          />
                          <h3 className="mt-3 text-lg font-bold text-gray-900">
                            {agent.name}
                          </h3>
                          <p className="text-sm text-gray-600">{agent.role}</p>
                          <span className="mt-2 px-3 py-1 bg-amber-200 rounded-full text-xs font-medium text-amber-900">
                            {agent.department}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Layer 2: C-Suite */}
              <div className="mb-8">
                <button
                  onClick={() => toggleLayer(2)}
                  className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedLayers[2] ? 'rotate-90' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Layer 2: C-Suite Executives (7 agents)
                </button>

                {expandedLayers[2] && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
                    {layer2Agents.map((agent, index) => (
                      <motion.div
                        key={agent.id}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 hover:border-blue-300"
                        onClick={() => handleAgentClick(agent)}
                      >
                        <div className="flex flex-col items-center">
                          <AnimalAvatar
                            animal={agent.visual.animal_type}
                            size={70}
                            color={agent.visual.color}
                            status={agent.status}
                          />
                          <h4 className="mt-2 text-sm font-bold text-gray-900 text-center">
                            {agent.name}
                          </h4>
                          <p className="text-xs text-gray-600 text-center">
                            {agent.role}
                          </p>
                          <span
                            className="mt-2 px-2 py-1 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: agent.visual.color + '20',
                              color: agent.visual.color,
                            }}
                          >
                            {agent.department}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Layer 3: Specialists by Department */}
              <div>
                <button
                  onClick={() => toggleLayer(3)}
                  className="flex items-center gap-3 mb-4 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedLayers[3] ? 'rotate-90' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Layer 3: Operational Specialists (56 agents)
                </button>

                {expandedLayers[3] && (
                  <div className="space-y-6">
                    {Object.entries(layer3ByDepartment).map(
                      ([department, agents]) => (
                        <div key={department}>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            {department} ({agents.length})
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
                            {agents.map((agent, index) => (
                              <motion.div
                                key={agent.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02 }}
                                className="bg-white rounded-lg p-3 shadow hover:shadow-md transition-shadow cursor-pointer border border-gray-100 hover:border-blue-200"
                                onClick={() => handleAgentClick(agent)}
                              >
                                <div className="flex flex-col items-center">
                                  <AnimalAvatar
                                    animal={agent.visual.animal_type}
                                    size={50}
                                    color={agent.visual.color}
                                    status={agent.status}
                                  />
                                  <p className="mt-2 text-xs font-semibold text-gray-900 text-center">
                                    {agent.name}
                                  </p>
                                  <p className="text-xs text-gray-500 text-center line-clamp-2">
                                    {agent.role}
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

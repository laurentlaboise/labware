/**
 * OfficeView - Main 2D Tycoon-Style Interface
 * Shows 64 agents as farm animal characters across 4 floors
 */

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ALL_AGENTS, getAgentsByFloor, type AgentProfile } from '@labware/shared';
import { AnimalAvatar } from './AnimalAvatar';
import { OfficeFurniture } from './OfficeFurniture';

interface OfficeViewProps {
  onAgentClick: (agent: AgentProfile) => void;
}

interface ViewportState {
  zoom: number;
  panX: number;
  panY: number;
}

export const OfficeView: React.FC<OfficeViewProps> = ({ onAgentClick }) => {
  const [viewport, setViewport] = useState<ViewportState>({
    zoom: 1,
    panX: 0,
    panY: 0,
  });
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [hoveredAgent, setHoveredAgent] = useState<AgentProfile | null>(null);
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Get agents by floor
  const executiveAgents = getAgentsByFloor('executive');
  const financeTechAgents = getAgentsByFloor('finance_tech');
  const marketingOpsAgents = getAgentsByFloor('marketing_ops');
  const specialistsAgents = getAgentsByFloor('specialists');

  const floors = [
    {
      id: 'executive',
      name: 'Executive Floor',
      icon: '👔',
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-50',
      agents: executiveAgents,
    },
    {
      id: 'finance_tech',
      name: 'Finance & Tech',
      icon: '🛡️',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50',
      agents: financeTechAgents,
    },
    {
      id: 'marketing_ops',
      name: 'Marketing & Ops',
      icon: '🖥️',
      color: 'from-pink-500 to-green-500',
      bgColor: 'bg-pink-50',
      agents: marketingOpsAgents,
    },
    {
      id: 'specialists',
      name: 'Specialists',
      icon: '⚡',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50',
      agents: specialistsAgents,
    },
  ];

  // Zoom controls
  const handleZoomIn = () => {
    setViewport((prev) => ({ ...prev, zoom: Math.min(prev.zoom + 0.2, 2) }));
  };

  const handleZoomOut = () => {
    setViewport((prev) => ({ ...prev, zoom: Math.max(prev.zoom - 0.2, 0.5) }));
  };

  const handleResetView = () => {
    setViewport({ zoom: 1, panX: 0, panY: 0 });
  };

  // Pan controls
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) {
      // Left mouse button
      setIsPanning(true);
      setPanStart({ x: e.clientX - viewport.panX, y: e.clientY - viewport.panY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setViewport((prev) => ({
        ...prev,
        panX: e.clientX - panStart.x,
        panY: e.clientY - panStart.y,
      }));
    }
  };

  const handleMouseUp = () => {
    setIsPanning(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-500';
      case 'processing':
        return 'bg-orange-500';
      case 'escalation':
        return 'bg-blue-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Header Controls */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Office View</h1>
          <div className="flex gap-2">
            {floors.map((floor) => (
              <button
                key={floor.id}
                onClick={() =>
                  setSelectedFloor(selectedFloor === floor.id ? null : floor.id)
                }
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedFloor === floor.id
                    ? `bg-gradient-to-r ${floor.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {floor.icon} {floor.name} ({floor.agents.length})
              </button>
            ))}
          </div>
        </div>

        {/* Zoom Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Zoom Out"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"
              />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-600 min-w-[60px] text-center">
            {Math.round(viewport.zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Zoom In"
          >
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
          </button>
          <button
            onClick={handleResetView}
            className="ml-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-sm font-medium text-gray-700"
          >
            Reset View
          </button>
        </div>
      </div>

      {/* Office Building View */}
      <div
        ref={containerRef}
        className="flex-1 overflow-hidden relative cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="h-full w-full"
          style={{
            transform: `scale(${viewport.zoom}) translate(${viewport.panX}px, ${viewport.panY}px)`,
            transformOrigin: 'center center',
            transition: isPanning ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          {/* Building with 4 Floors */}
          <div className="flex flex-col gap-4 p-8">
            {floors.map((floor, floorIndex) => {
              const isHidden = selectedFloor && selectedFloor !== floor.id;
              if (isHidden) return null;

              return (
                <motion.div
                  key={floor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: floorIndex * 0.1 }}
                  className={`${floor.bgColor} rounded-2xl border-2 border-gray-300 shadow-xl overflow-hidden`}
                >
                  {/* Floor Header */}
                  <div
                    className={`bg-gradient-to-r ${floor.color} px-6 py-3 flex items-center justify-between`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{floor.icon}</span>
                      <h2 className="text-xl font-bold text-white">
                        {floor.name}
                      </h2>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white">
                        {floor.agents.length} agents
                      </span>
                    </div>
                  </div>

                  {/* Floor Content - Agent Grid */}
                  <div className="relative p-8 min-h-[400px]">
                    {/* Office Furniture Decorations */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Scattered furniture based on floor type */}
                      {floor.id === 'executive' && (
                        <>
                          <div className="absolute top-4 left-4 w-20 h-16">
                            <OfficeFurniture type="meeting-table" />
                          </div>
                          <div className="absolute top-4 right-4 w-12 h-16">
                            <OfficeFurniture type="plant" />
                          </div>
                        </>
                      )}
                      {floor.id === 'finance_tech' && (
                        <>
                          <div className="absolute bottom-4 left-8 w-12 h-20">
                            <OfficeFurniture type="filing-cabinet" />
                          </div>
                          <div className="absolute top-4 right-8 w-16 h-16">
                            <OfficeFurniture type="coffee-station" />
                          </div>
                        </>
                      )}
                      {floor.id === 'marketing_ops' && (
                        <>
                          <div className="absolute top-4 left-8 w-12 h-16">
                            <OfficeFurniture type="plant" />
                          </div>
                          <div className="absolute bottom-4 right-8 w-10 h-20">
                            <OfficeFurniture type="water-cooler" />
                          </div>
                        </>
                      )}
                      {floor.id === 'specialists' && (
                        <>
                          <div className="absolute top-4 left-4 w-12 h-20">
                            <OfficeFurniture type="filing-cabinet" />
                          </div>
                          <div className="absolute top-4 right-4 w-12 h-16">
                            <OfficeFurniture type="plant" />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Grid layout for agents */}
                    <div className="grid grid-cols-8 gap-6 relative z-10">
                      {floor.agents.map((agent) => (
                        <motion.div
                          key={agent.id}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.1, zIndex: 10 }}
                          transition={{ duration: 0.2 }}
                          className="relative group cursor-pointer"
                          onMouseEnter={() => setHoveredAgent(agent)}
                          onMouseLeave={() => setHoveredAgent(null)}
                          onClick={(e) => {
                            e.stopPropagation();
                            onAgentClick(agent);
                          }}
                        >
                          {/* Agent Character */}
                          <div className="relative flex flex-col items-center">
                            {/* Agent Avatar with SVG cartoon */}
                            <AnimalAvatar
                              animal={agent.visual.animal_type}
                              size={80}
                              color={agent.visual.color}
                              status={agent.status}
                              className="group-hover:scale-110 transition-transform duration-200"
                            />

                            {/* Agent Name Label */}
                            <div className="mt-2 text-center">
                              <div className="text-xs font-semibold text-gray-900 truncate">
                                {agent.name.split(' ')[0]}
                              </div>
                              <div className="text-xs text-gray-500 truncate">
                                {agent.role.split(' ')[0]}
                              </div>
                            </div>

                            {/* Hover Tooltip */}
                            {hoveredAgent?.id === agent.id && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none"
                              >
                                <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl min-w-[200px]">
                                  <div className="font-bold text-sm mb-1">
                                    {agent.name}
                                  </div>
                                  <div className="text-xs text-gray-300 mb-2">
                                    {agent.role}
                                  </div>
                                  <div className="text-xs text-blue-300">
                                    {agent.ai_models.primary}
                                  </div>
                                  <div className="mt-2 text-xs">
                                    <span
                                      className={`inline-block px-2 py-1 rounded ${
                                        agent.status === 'available'
                                          ? 'bg-green-500/20 text-green-300'
                                          : 'bg-orange-500/20 text-orange-300'
                                      }`}
                                    >
                                      {agent.status}
                                    </span>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Minimap */}
      <div className="absolute bottom-6 right-6 w-48 h-48 bg-white rounded-lg shadow-xl border-2 border-gray-300 p-3">
        <div className="text-xs font-semibold text-gray-700 mb-2">
          Office Map
        </div>
        <div className="space-y-1">
          {floors.map((floor) => (
            <div
              key={floor.id}
              className={`h-10 rounded ${floor.bgColor} flex items-center justify-between px-2 cursor-pointer hover:opacity-75 transition-opacity`}
              onClick={() =>
                setSelectedFloor(selectedFloor === floor.id ? null : floor.id)
              }
            >
              <span className="text-xs font-medium">{floor.icon}</span>
              <span className="text-xs text-gray-600">
                {floor.agents.length}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-xl border-2 border-gray-300 p-4">
        <div className="text-xs font-semibold text-gray-700 mb-3">
          Agent Status
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-xs text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className="text-xs text-gray-600">Processing</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="text-xs text-gray-600">Requires Escalation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-400" />
            <span className="text-xs text-gray-600">Offline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

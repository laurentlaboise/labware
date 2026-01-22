/**
 * Main App Component for app.labware.icu
 * Tycoon-style AI Agent Management Interface
 */

import React, { useState } from 'react';
import { OfficeView } from './components/OfficeView';
import { ChatPanel } from './components/ChatPanel';
import { TeamViewModal } from './components/TeamViewModal';
import type { AgentProfile } from '@labware/shared/src/types/agent';

interface AppHeaderProps {
  onTeamViewClick: () => void;
  onAccountClick: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
  onTeamViewClick,
  onAccountClick,
}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Logo */}
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🏢</span>
          </div>
          <span className="text-xl font-bold text-gray-900">Labware.icu</span>
        </a>

        {/* Quick Actions */}
        <button
          onClick={onTeamViewClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Team View
        </button>
      </div>

      {/* User Menu */}
      <div className="flex items-center gap-4">
        {/* Active Conversations Indicator */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-gray-600">All agents available</span>
        </div>

        {/* Account Menu */}
        <button
          onClick={onAccountClick}
          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            U
          </div>
          <svg
            className="w-5 h-5 text-gray-600"
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
      </div>
    </header>
  );
};

function App() {
  const [selectedAgent, setSelectedAgent] = useState<AgentProfile | null>(null);
  const [isChatPanelOpen, setIsChatPanelOpen] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);

  const handleAgentClick = (agent: AgentProfile) => {
    setSelectedAgent(agent);
    setIsChatPanelOpen(true);
  };

  const handleCloseChatPanel = () => {
    setIsChatPanelOpen(false);
    // Don't clear selectedAgent immediately to allow smooth exit animation
    setTimeout(() => setSelectedAgent(null), 300);
  };

  const handleTeamViewClick = () => {
    setShowTeamModal(true);
  };

  const handleAccountClick = () => {
    // TODO: Implement account dropdown menu
    console.log('Account menu clicked');
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* App Header */}
      <AppHeader
        onTeamViewClick={handleTeamViewClick}
        onAccountClick={handleAccountClick}
      />

      {/* Main Content - Office View */}
      <main className="flex-1 overflow-hidden">
        <OfficeView onAgentClick={handleAgentClick} />
      </main>

      {/* Chat Panel (Sliding Side Panel) */}
      <ChatPanel
        agent={selectedAgent}
        isOpen={isChatPanelOpen}
        onClose={handleCloseChatPanel}
      />

      {/* Team View Modal (Full Organization Chart) */}
      <TeamViewModal
        isOpen={showTeamModal}
        onClose={() => setShowTeamModal(false)}
        onAgentClick={handleAgentClick}
      />
    </div>
  );
}

export default App;

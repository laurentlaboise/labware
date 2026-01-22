/**
 * ChatPanel - Sliding Side Panel for Agent Conversations
 * Opens when user clicks on an agent in the office view
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { AgentProfile } from '@labware/shared';

interface Message {
  id: string;
  sender: 'user' | 'agent';
  content: string;
  timestamp: Date;
  toolCalls?: ToolCall[];
}

interface ToolCall {
  id: string;
  toolName: string;
  status: 'pending' | 'executing' | 'completed' | 'failed';
  result?: any;
}

interface ChatPanelProps {
  agent: AgentProfile | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ChatPanel: React.FC<ChatPanelProps> = ({
  agent,
  isOpen,
  onClose,
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen && agent) {
      inputRef.current?.focus();
      // Load or initialize conversation
      loadConversation(agent.id);
    }
  }, [isOpen, agent]);

  const loadConversation = (agentId: string) => {
    // TODO: Load conversation history from backend
    // For now, show welcome message
    setMessages([
      {
        id: '1',
        sender: 'agent',
        content: `Hello! I'm ${agent?.name}, your ${agent?.role}. How can I help you today?`,
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || !agent) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // TODO: Send to backend API
    // Simulate agent response
    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'agent',
        content: `Thank you for your message. As ${agent.role}, I'm processing your request using ${agent.ai_models.primary}.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!agent) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={onClose}
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-[600px] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Agent Avatar */}
                <div
                  className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-4xl shadow-lg"
                  style={{ borderColor: agent.visual.color }}
                >
                  {agent.visual.emoji}
                </div>

                {/* Agent Info */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-white">{agent.name}</h2>
                  <p className="text-sm text-blue-100">{agent.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-1 bg-white/20 rounded-full text-white">
                      {agent.ai_models.primary}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        agent.status === 'available'
                          ? 'bg-green-500/30 text-green-100'
                          : 'bg-orange-500/30 text-orange-100'
                      }`}
                    >
                      {agent.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
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

            {/* Agent Details Expandable Section */}
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-sm font-medium text-gray-700">
                  <span>Agent Details</span>
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
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
                </summary>
                <div className="mt-3 text-xs space-y-2">
                  <div>
                    <span className="font-semibold text-gray-700">Mission:</span>
                    <p className="text-gray-600 mt-1">
                      {agent.personality.mission}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">
                      Communication Style:
                    </span>
                    <p className="text-gray-600 mt-1">
                      {agent.personality.communication_style}
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Department:</span>
                    <p className="text-gray-600 mt-1">{agent.department}</p>
                  </div>
                </div>
              </details>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    } rounded-2xl px-4 py-3`}
                  >
                    {message.sender === 'agent' && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{agent.visual.emoji}</span>
                        <span className="text-xs font-semibold">
                          {agent.name}
                        </span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">
                      {message.content}
                    </p>
                    <div
                      className={`text-xs mt-2 ${
                        message.sender === 'user'
                          ? 'text-blue-100'
                          : 'text-gray-500'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>

                    {/* Tool Calls */}
                    {message.toolCalls && message.toolCalls.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.toolCalls.map((tool) => (
                          <div
                            key={tool.id}
                            className="border-l-2 border-blue-400 pl-3 py-1"
                          >
                            <div className="text-xs font-semibold">
                              🔧 {tool.toolName}
                            </div>
                            <div className="text-xs text-gray-600">
                              Status: {tool.status}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{agent.visual.emoji}</span>
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 px-6 py-4 bg-white">
              <div className="flex items-end gap-3">
                <div className="flex-1 relative">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={`Message ${agent.name}...`}
                    rows={1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    style={{
                      minHeight: '52px',
                      maxHeight: '120px',
                    }}
                  />
                  <div className="absolute right-3 bottom-3 text-xs text-gray-400">
                    Shift+Enter for new line
                  </div>
                </div>

                {/* File Upload */}
                <button className="p-3 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    />
                  </svg>
                </button>

                {/* Send Button */}
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Send
                </button>
              </div>

              {/* Helper Text */}
              <div className="mt-2 text-xs text-gray-500">
                Powered by {agent.ai_models.primary} • Use @ to mention other
                agents
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

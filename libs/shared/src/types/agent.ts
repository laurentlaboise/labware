/**
 * Agent Profile Structure - 8 Layers
 * Following the "Dignity Through Utility" mission
 * 64 specialized AI agents with farm animal cartoon avatars
 */

export type AIModel =
  | 'claude-3-opus-20240229'
  | 'claude-3-sonnet-20240229'
  | 'claude-3-haiku-20240307'
  | 'gpt-4-turbo-preview'
  | 'gpt-4'
  | 'gpt-3.5-turbo'
  | 'gemini-pro'
  | 'gemini-ultra'
  | 'deepseek-coder'
  | 'deepseek-chat'
  | 'mistral-large'
  | 'mistral-medium'
  | 'qwen-72b'
  | 'qwen-14b';

export type AgentArchetype =
  | 'Strategist'
  | 'Analyst'
  | 'Coordinator'
  | 'Specialist'
  | 'Advisor'
  | 'Executor'
  | 'Guardian'
  | 'Innovator';

export type AgentStatus = 'available' | 'processing' | 'escalation' | 'offline';

/**
 * Farm Animal Avatar Types
 * Each agent is represented as a cute fat cartoon farm animal head
 */
export type FarmAnimalType =
  | 'dog'
  | 'bunny'
  | 'tiger'
  | 'cow'
  | 'horse'
  | 'pig'
  | 'chicken'
  | 'bull'
  | 'duck'
  | 'sheep'
  | 'goat'
  | 'cat'
  | 'bear'
  | 'fox'
  | 'owl';

/**
 * Office Floor/Zone for the tycoon-style interface
 */
export type OfficeFloor = 'executive' | 'finance_tech' | 'marketing_ops' | 'specialists';

export interface OfficePosition {
  floor: OfficeFloor;
  x: number; // 0-100 percentage of floor width
  y: number; // 0-100 percentage of floor height
  zone?: string; // e.g., 'desk-3', 'meeting-room-a', 'corner-office'
}

export interface AgentPersonality {
  mission: string;
  archetype: AgentArchetype;
  voice: string;
  communication_style: string;
  tools: string[];
  reporting_structure: {
    reports_to: string | null;
    manages: string[];
  };
  signal_to_noise_ratio: number; // 0-1, how much detail they provide
  decision_framework: string;
}

export interface AgentProfile {
  id: string; // Format: "001" to "064"
  name: string;
  role: string;
  department: string;
  layer: 1 | 2 | 3; // Organizational hierarchy
  personality: AgentPersonality;
  ai_models: {
    primary: AIModel;
    fallback: AIModel;
  };
  n8n_tool_nodes: string[]; // Tools this agent can invoke
  visual: {
    animal_type: FarmAnimalType; // Farm animal cartoon avatar
    color: string; // Hex color for department coding
    emoji: string; // Emoji representation
    position: OfficePosition; // Position in the 2D office view
  };
  status: AgentStatus;
}

export type AgentLayer = {
  layer1: AgentProfile[]; // CEO Advisor (Agent 001)
  layer2: AgentProfile[]; // C-Suite (7 agents)
  layer3: AgentProfile[]; // VPs, Directors, Specialists (56 agents)
};

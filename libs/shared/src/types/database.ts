/**
 * Database Schema Types for PostgreSQL
 */

export interface User {
  id: string;
  email: string;
  password_hash: string;
  full_name: string;
  organization: string;
  industry: string;
  subscription_tier: 'free' | 'professional' | 'enterprise';
  created_at: Date;
  verified: boolean;
  last_login: Date | null;
}

export interface Conversation {
  id: string;
  user_id: string;
  title: string;
  primary_agent_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface Message {
  id: string;
  conversation_id: string;
  sender_type: 'user' | 'agent' | 'system';
  sender_id: string; // user_id or agent_id
  content: string;
  metadata: {
    model_used?: string;
    tokens_used?: number;
    tool_calls?: ToolCall[];
    coordination_plan?: CoordinationStep[];
  };
  created_at: Date;
}

export interface ToolCall {
  tool_name: string;
  parameters: Record<string, any>;
  result: any;
  duration_ms: number;
  status: 'success' | 'failure' | 'timeout';
}

export interface CoordinationStep {
  agent_id: string;
  task_description: string;
  dependencies: string[];
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  result?: string;
}

export interface AgentInteraction {
  id: string;
  conversation_id: string;
  agent_id: string;
  action_type: 'message' | 'tool_execution' | 'escalation' | 'handoff';
  details: Record<string, any>;
  created_at: Date;
}

export interface UserPreferences {
  user_id: string;
  favorite_agents: string[];
  ui_theme: 'light' | 'dark' | 'system';
  notification_settings: {
    email: boolean;
    push: boolean;
    agent_updates: boolean;
  };
  custom_shortcuts: Record<string, string>;
}

export interface AuditLog {
  id: string;
  user_id: string;
  action: string;
  resource: string;
  details: Record<string, any>;
  ip_address: string;
  user_agent: string;
  created_at: Date;
}

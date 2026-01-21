/**
 * Authentication and Authorization Types
 */

export interface SignupRequest {
  email: string;
  password: string;
  full_name: string;
  organization: string;
  industry: string;
  terms_accepted: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
  remember_me?: boolean;
}

export interface AuthTokens {
  access_token: string; // 15 minutes
  refresh_token: string; // 7 days
}

export interface TokenPayload {
  user_id: string;
  email: string;
  subscription_tier: 'free' | 'professional' | 'enterprise';
  iat: number;
  exp: number;
}

export interface PasswordResetRequest {
  email: string;
}

export interface PasswordResetConfirm {
  token: string;
  new_password: string;
}

export interface AuthResponse {
  success: boolean;
  data?: {
    user: {
      id: string;
      email: string;
      full_name: string;
      organization: string;
      subscription_tier: string;
    };
    tokens: AuthTokens;
  };
  error?: string;
}

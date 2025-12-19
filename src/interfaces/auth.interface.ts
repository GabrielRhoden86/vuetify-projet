
export interface AuthResponse {
  message: string;
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface AuthPayload {
  email: string;
  password: string;
}

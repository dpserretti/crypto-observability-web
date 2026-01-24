export type User = {
    id: string
    email: string
}

export interface AuthContextType {
    token: string | null
    isAuthenticated: boolean
    login: (token: string) => void
    logout: () => void
}
export interface LoginRequest {
    username: string
    password: string
  }

  export interface LoginResponse {
    access_token: string
    token_type: 'bearer'
  }

  export interface AuthState {
    token: string | null
    isAuthenticated: boolean
  }


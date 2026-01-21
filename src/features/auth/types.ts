export type User = {
    id: string
    email: string
}

export interface AuthContextType {
    login: (email: string, password: string) => void
    logout: () => void
    isAuthenticated: boolean
}


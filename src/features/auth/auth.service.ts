import { api } from '@/services/api'
import type { LoginRequest, LoginResponse } from '@/features/auth/types'

export async function loginRequest(
  data: LoginRequest,
): Promise<LoginResponse> {
  const response = await api.post<LoginResponse>('/auth/login', data)
  return response.data
}

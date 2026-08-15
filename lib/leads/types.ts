import type { EmployeeSize, Industry } from '@/lib/leads/constants'

export type LeadSubmitPayload = {
  name: string
  role: string | null
  company: string
  email: string
  employee_size: EmployeeSize
  industry: Industry
}

export type LeadSubmitSuccessResponse = {
  success: true
  id: string
}

export type LeadSubmitErrorResponse = {
  success: false
  error: string
}

export type LeadSubmitResponse =
  | LeadSubmitSuccessResponse
  | LeadSubmitErrorResponse

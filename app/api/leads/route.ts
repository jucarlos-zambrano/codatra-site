import { NextResponse } from 'next/server'

import { leadInputSchema } from '@/lib/leads/schema'
import type {
  LeadSubmitErrorResponse,
  LeadSubmitSuccessResponse,
} from '@/lib/leads/types'
import { getSupabaseAdmin } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json<LeadSubmitErrorResponse>(
      { success: false, error: 'Datos inválidos.' },
      { status: 400 },
    )
  }

  const parsed = leadInputSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json<LeadSubmitErrorResponse>(
      { success: false, error: 'Datos inválidos.' },
      { status: 400 },
    )
  }

  try {
    const supabase = getSupabaseAdmin()

    const { data, error } = await supabase
      .from('leads')
      .insert({
        name: parsed.data.name,
        role: parsed.data.role,
        company: parsed.data.company,
        email: parsed.data.email,
        employee_size: parsed.data.employee_size,
        industry: parsed.data.industry,
      })
      .select('id')
      .single()

    if (error) {
      console.error('[POST /api/leads] Supabase insert failed:', error.message)
      return NextResponse.json<LeadSubmitErrorResponse>(
        { success: false, error: 'No pudimos procesar tu solicitud.' },
        { status: 500 },
      )
    }

    return NextResponse.json<LeadSubmitSuccessResponse>(
      { success: true, id: data.id },
      { status: 201 },
    )
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Unknown server error'
    console.error('[POST /api/leads] Unexpected error:', message)

    return NextResponse.json<LeadSubmitErrorResponse>(
      { success: false, error: 'No pudimos procesar tu solicitud.' },
      { status: 500 },
    )
  }
}

export function GET() {
  return NextResponse.json<LeadSubmitErrorResponse>(
    { success: false, error: 'Method not allowed.' },
    { status: 405 },
  )
}

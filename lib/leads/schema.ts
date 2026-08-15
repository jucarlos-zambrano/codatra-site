import { z } from 'zod'

import {
  EMPLOYEE_SIZE_VALUES,
  INDUSTRY_VALUES,
} from '@/lib/leads/constants'

export const leadInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'El nombre debe tener al menos 2 caracteres.')
    .max(100, 'El nombre no puede superar 100 caracteres.'),
  role: z
    .string()
    .trim()
    .max(100, 'El cargo no puede superar 100 caracteres.')
    .optional()
    .transform((value) => (value && value.length > 0 ? value : null)),
  company: z
    .string()
    .trim()
    .min(2, 'La empresa debe tener al menos 2 caracteres.')
    .max(200, 'La empresa no puede superar 200 caracteres.'),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email('Ingresa un correo electrónico válido.')
    .max(254, 'El correo no puede superar 254 caracteres.'),
  employee_size: z.enum(EMPLOYEE_SIZE_VALUES, {
    message: 'Selecciona un rango de empleados válido.',
  }),
  industry: z.enum(INDUSTRY_VALUES, {
    message: 'Selecciona una industria válida.',
  }),
})

export type LeadInput = z.infer<typeof leadInputSchema>

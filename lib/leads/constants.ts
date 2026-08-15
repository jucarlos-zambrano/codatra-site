export const EMPLOYEE_SIZE_VALUES = [
  '10-25',
  '26-50',
  '51-100',
  '101-200',
] as const

export type EmployeeSize = (typeof EMPLOYEE_SIZE_VALUES)[number]

export const EMPLOYEE_SIZE_OPTIONS: ReadonlyArray<{
  value: EmployeeSize
  label: string
}> = [
  { value: '10-25', label: '10 - 25 empleados' },
  { value: '26-50', label: '26 - 50 empleados' },
  { value: '51-100', label: '51 - 100 empleados' },
  { value: '101-200', label: '101 - 200 empleados' },
]

export const INDUSTRY_VALUES = [
  'tecnologia',
  'manufactura',
  'retail',
  'servicios-profesionales',
  'salud',
  'educacion',
  'construccion',
  'logistica',
  'finanzas',
  'rrhh',
  'alimentos',
  'otro',
] as const

export type Industry = (typeof INDUSTRY_VALUES)[number]

export const INDUSTRY_OPTIONS: ReadonlyArray<{
  value: Industry
  label: string
}> = [
  { value: 'tecnologia', label: 'Tecnología / Software' },
  { value: 'manufactura', label: 'Manufactura' },
  { value: 'retail', label: 'Retail / Comercio' },
  { value: 'servicios-profesionales', label: 'Servicios profesionales' },
  { value: 'salud', label: 'Salud' },
  { value: 'educacion', label: 'Educación' },
  { value: 'construccion', label: 'Construcción' },
  { value: 'logistica', label: 'Logística / Transporte' },
  { value: 'finanzas', label: 'Finanzas / Seguros' },
  { value: 'rrhh', label: 'RRHH / Servicios corporativos' },
  { value: 'alimentos', label: 'Alimentos y bebidas' },
  { value: 'otro', label: 'Otro' },
]

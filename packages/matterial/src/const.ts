import { Color, Accent, Severity, NamedColor } from './interfaces/theme'

export const SEVERITIES: Severity[] = ['error', 'warning', 'info', 'success']

export const NAMED_COLORS: NamedColor[] = [
  'mt-red',
  'mt-green',
  'mt-blue',
  'mt-yellow',
]

export const COLORS: Color[] = [
  'primary',
  'secondary',
  'dark',
  'light',
  'contrast',
  ...SEVERITIES,
  ...NAMED_COLORS,
]

export const ACCENTS: Accent[] = [
  'accent-1',
  'accent-2',
  'accent-3',
  'accent-4',
  'accent-5',
  'accent-6',
  'accent-7',
  'accent-8',
]

import { Color, Accent, Severity } from './interfaces/theme'
import packageJson from '../package.json'

export const PACKAGE = packageJson.name
export const VERSION = packageJson.version
export const DESCRIPTION = packageJson.description

export const SEVERITIES: Severity[] = ['error', 'warning', 'info', 'success']

export const COLORS: Color[] = [
  'primary',
  'secondary',
  'dark',
  'light',
  ...SEVERITIES,
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

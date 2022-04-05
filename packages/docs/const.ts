import packageJson from './package.json'
import { Color } from 'interfaces/theme'

export const COLORS: Color[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'dark',
  'light',
]

export const TITLE = 'Matterial UI'

export const PAGES = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/setup',
    title: 'Setup',
  },
  {
    link: '/components',
    title: 'Components',
  },
]

export const DESCRIPTION = packageJson.description

export const PACKAGE = 'matterial'

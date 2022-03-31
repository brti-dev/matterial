import { COLORS, ACCENTS } from '../const'

/**
 * Parse color prop to CSS
 *
 * @returns {string} Color parsed for use in CSS
 */
export default function cssColor(color: string, includeAccents = true) {
  const colors = [...COLORS, ...(includeAccents ? ACCENTS : [])]

  if (colors.includes(color as any)) {
    return `var(--color-${color})`
  }

  return color
}

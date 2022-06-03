import { COLORS, ACCENTS } from '../const'

/**
 * Parse color prop to CSS
 *
 * @eg primary --> var(--color-primary)
 * @eg hotpink --> hotpink
 *
 * @returns {string | null} Color parsed for use in CSS
 */
export default function cssColor(
  color?: string,
  includeAccents = true,
  allowDefaultColor = true
): string | null {
  if (!color) {
    return null
  }

  const colors = [
    ...COLORS,
    ...(includeAccents ? ACCENTS : []),
    ...(allowDefaultColor ? ['default'] : []),
  ]

  if (colors.includes(color as any)) {
    return `var(--color-${color})`
  }

  if (!allowDefaultColor && color === 'default') {
    return null
  }

  return color
}

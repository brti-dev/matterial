import * as React from 'react'

import { OpenColor } from '../interfaces/theme'
import cssColor from './css-color'

export default function useColor(color?: OpenColor): {
  cssColor: string | null
  style: React.CSSProperties
  className: string
} {
  const css = cssColor(color)

  if (!css) {
    return {
      cssColor: null,
      style: {},
      className: '',
    }
  }

  return {
    cssColor: css,
    style: { '--color': css } as React.CSSProperties,
    className: `color--${color}`,
  }
}

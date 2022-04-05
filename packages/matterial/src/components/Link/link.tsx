import { forwardRef } from 'react'

import { Color } from '../../interfaces/theme'
import cssColor from '../../lib/css-color'
import classnames from '../../lib/classnames'

type Props = {
  /**
   * Content to wrap with anchor `href`
   */
  children: React.ReactNode
  /**
   * Thematic color or open string
   */
  color?: Color | string
  /**
   * URL
   */
  href?: string
  /**
   * Unset global like style, including color, underline, hover effects, etc.; Default: false
   */
  unstyled?: boolean
}

type NativeAttrs = Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

export type LinkProps = Props & NativeAttrs

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { className, color, href, style = {}, unstyled, ...rest } = props
  if (color) {
    style['--color'] = cssColor(color)
  }

  const classNames = classnames(className, unstyled && 'unstyled')

  return (
    <a href={href} className={classNames} style={style} ref={ref} {...rest} />
  )
})

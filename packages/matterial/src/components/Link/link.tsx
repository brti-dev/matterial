import * as React from 'react'

import { ColoredElement } from '../../interfaces/theme'
import useColor from '../../lib/use-color'
import classnames from '../../lib/classnames'

interface Props extends ColoredElement {
  /**
   * Content to wrap with anchor `href`
   */
  children: React.ReactNode
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

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => {
    const {
      className,
      color: naturalColor,
      href,
      style: naturalStyle = {},
      unstyled,
      ...rest
    } = props

    const color = useColor(naturalColor)

    const classNames = classnames(
      className,
      unstyled && 'unstyled',
      color.className
    )

    const style = { ...naturalStyle, ...color.style }

    return (
      <a href={href} className={classNames} style={style} ref={ref} {...rest} />
    )
  }
)

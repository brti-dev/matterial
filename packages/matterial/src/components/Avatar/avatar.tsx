import * as React from 'react'

import { Color } from '../../interfaces/theme'
import classnames from '../../lib/classnames'
import cssColor from '../../lib/css-color'
import { Tooltip } from '../Tooltip'
import classes from './avatar.module.scss'

export type AvatarProps = {
  /**
   * Alt text used for aria-label, img alt, tooltip, etc.
   */
  alt: string
  /**
   * <Avatar> childrens
   */
  children?: React.ReactNode
  /**
   * ClassName
   */
  className?: string
  /**
   * Thematic color or a CSS color string
   */
  color?: Color | string
  /**
   * Size in pixels; Default: 40
   */
  size?: number
  /**
   * Image source
   */
  src?: string
  /**
   * CSS Style
   */
  style?: React.CSSProperties
  /**
   * Tooltip helper; If true, tooltip label is determined by `alt` prop; If string, overrides `alt`
   */
  tooltip?: string | boolean
}

const TooltipWrapper = ({ tooltipLabel, children }: any) =>
  tooltipLabel ? <Tooltip label={tooltipLabel}>{children}</Tooltip> : children

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (props, ref) => {
    const {
      alt,
      children,
      className,
      color = 'default',
      size = 40,
      src,
      style = {},
      tooltip,
      ...rest
    } = props

    const classNames = classnames(
      classes.avatar,
      'variant--contained', // Access global colors
      `color--${color}`,
      'no-hover',
      className
    )

    let tooltipLabel: string = ''
    if (!!tooltip) {
      if (tooltip === true && alt) {
        tooltipLabel = alt
      } else if (typeof tooltip === 'string') {
        tooltipLabel = tooltip as string
      }
    }

    const finalProps = {
      className: classNames,
      style: { ...style, '--size': `${size}px`, '--color': cssColor(color) },
      role: 'img',
      'aria-label': alt !== children ? alt : undefined,
      ref,
      ...rest,
    }

    return (
      <TooltipWrapper tooltipLabel={tooltipLabel}>
        <div {...finalProps}>
          {src ? <img src={src} alt={alt} /> : children}
        </div>
      </TooltipWrapper>
    )
  }
)

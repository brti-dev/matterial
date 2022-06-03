import * as React from 'react'

import { ColoredElement } from '../../interfaces/theme'
import { OptionalChildren } from '../../interfaces/children'
import classnames from '../../lib/classnames'
import useColor from '../../lib/use-color'
import { Tooltip } from '../Tooltip'
import classes from './avatar.module.scss'

export interface AvatarProps extends ColoredElement, OptionalChildren {
  /**
   * Alt text used for aria-label, img alt, tooltip, etc.
   */
  alt: string
  /**
   * ClassName
   */
  className?: string
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
      color: naturalColor = 'default',
      size = 40,
      src,
      style = {},
      tooltip,
      ...rest
    } = props

    const color = useColor(naturalColor)

    const classNames = classnames(
      classes.avatar,
      'variant--contained', // Access global colors
      color.className,
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
      style: { ...style, '--size': `${size}px`, ...color.style },
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

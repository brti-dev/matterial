import * as React from 'react'

import type { ColoredElement } from '../../interfaces/theme'
import type { RequiredChildren } from '../../interfaces/children'
import useColor from '../../lib/use-color'
import classes from './badge.module.scss'

interface BadgePropsBase
  extends Omit<React.ComponentPropsWithoutRef<'span'>, 'children' | 'content'>,
    ColoredElement,
    RequiredChildren {
  /**
   * CSS class
   */
  className?: string

  /**
   * Text label of the badge
   */
  content?: string | number | null | React.ReactElement

  /**
   * Maximum number to show on the badge label
   */
  max?: number

  /**
   * Show badge if content is 0; Default: false
   */
  showZero?: boolean

  /**
   * Size of the badge; If number, in pixels
   */
  size?: 'small' | 'medium' | 'large' | number

  /**
   * Style variant
   */
  variant?: 'default' | 'dot'
}

type BadgePropsContent = BadgePropsBase & {
  content: string | number | null | React.ReactElement
}

type BadgePropsDot = BadgePropsBase & {
  content?: string | number | null | React.ReactElement
  variant: 'dot'
}

export type BadgeProps = BadgePropsContent | BadgePropsDot

export function Badge({
  children,
  className,
  color = 'default',
  content,
  max,
  showZero = false,
  size = 'medium',
  style: naturalStyle = {},
  variant = 'default',
  ...rest
}: BadgeProps): JSX.Element {
  const cssColor = useColor(color)

  const classNames = [
    'badge',
    classes.content,
    'variant--contained', // Access global colors
    cssColor.className,
    'no-hover',
    classes[`variant--${variant}`],
    classes[`size--${size}`],
    className ? className : undefined,
  ]

  let contentOutput = content
  if (typeof content === 'number' && max && max < content) {
    contentOutput = `${max}+`
  }

  let hidden = false
  if (content === 0 && !showZero) {
    classNames.push('visually-hidden')
    hidden = true
  }

  if (React.isValidElement(content)) {
    classNames.push(classes.componentAsBadge)
  }

  const style = { ...naturalStyle, ...cssColor.style }

  return (
    <span className={classes.container}>
      {children}
      <span
        className={classNames.join(' ')}
        style={style}
        {...rest}
        hidden={hidden}
      >
        {contentOutput}
      </span>
    </span>
  )
}

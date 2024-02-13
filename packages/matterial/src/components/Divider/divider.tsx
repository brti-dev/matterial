'use client'

import React from 'react'
import classnames from '../../lib/classnames'
import useColor from '../../lib/use-color'
import ContainerContext from '../Container/container-context'
import { ColoredElement } from '../../interfaces/theme'

export type DividerProps = React.ComponentPropsWithoutRef<'hr'> &
  ColoredElement & {
    /**
     * The weight of the divider, in pixels
     */
    size?: number
  }

export function Divider({
  color,
  size = 1,
  style: naturalStyle = {},
  ...props
}: DividerProps): JSX.Element {
  const container = React.useContext(ContainerContext)
  const cssColor = useColor(color)

  const style = {
    ...naturalStyle,
    ...cssColor.style,
    '--size': `${size}px`,
  } as React.CSSProperties

  if (container?.orientation === 'row') {
    return (
      <div
        {...props}
        className={classnames('divider', 'vertical', props.className)}
        style={style}
      >
        &nbsp;
      </div>
    )
  }

  return (
    <hr
      {...props}
      className={classnames('divider', props.className)}
      style={style}
    />
  )
}

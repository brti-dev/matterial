import * as React from 'react'

import classnames from '../../lib/classnames'
import classes from './avatar.module.scss'
import { Avatar } from './avatar'

export type AvatarGroupProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Maximum number of children to display; Excess will be indicated with a
   * label at the end of the group
   */
  max?: number
  /**
   * Visual cue to indicate number of things in the group; (total-numChildren)
   * will be indicated with a label at the end of the group
   */
  total?: number
  /**
   * Avatars to include in the group; Should be <Avatar> components
   */
  children: React.ReactNode
}

export function AvatarGroup({
  children: allChildren,
  className,
  max: naturalMax,
  total: naturalTotal,
  ...rest
}: AvatarGroupProps): JSX.Element {
  const children = React.Children.toArray(allChildren)
  const numChildren = children.length

  const max = naturalMax || numChildren
  const total = naturalTotal || numChildren

  if (numChildren > max || numChildren < total) {
    const excess = numChildren > max ? numChildren - max : total - numChildren
    const childrenOutput = children
      .map((child, i) => {
        if (i < max) {
          return child
        } else {
          return null
        }
      })
      .filter(child => !!child)
      .reverse()
    childrenOutput.unshift(
      <Avatar
        alt={`There are ${excess} hidden avatars`}
        className={classes.excess}
        key="excess"
      >{`+${excess}`}</Avatar>
    )

    const classNames = classnames(classes.group, classes.groupMax, className)

    return (
      <div className={classNames} {...rest}>
        {childrenOutput}
      </div>
    )
  }

  return (
    <div className={classnames(classes.group, className)} {...rest}>
      {children.reverse()}
    </div>
  )
}

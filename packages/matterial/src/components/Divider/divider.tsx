'use client'

import React from 'react'
import classnames from '../../lib/classnames'
import ContainerContext from '../Container/container-context'

export type DividerProps = React.ComponentPropsWithoutRef<'hr'>

export function Divider(props: DividerProps): JSX.Element {
  const container = React.useContext(ContainerContext)

  if (container?.orientation === 'row') {
    return (
      <div
        {...props}
        className={classnames('divider', 'vertical', props.className)}
      >
        &nbsp;
      </div>
    )
  }

  return <hr {...props} className={classnames('divider', props.className)} />
}

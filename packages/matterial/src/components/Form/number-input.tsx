import * as React from 'react'

import { NumberInputProps } from './form.types'
import classnames from '../../lib/classnames'
import classes from './form.module.scss'

export const NumberInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  NumberInputProps
>((props, ref) => {
  const {
    append,
    className,
    onChange = () => null,
    prepend,
    width,
    ...fieldProps
  } = props

  const containerStyle: React.CSSProperties = {}
  if (typeof width === 'number') {
    containerStyle.width = `${width}px`
  } else if (typeof width === 'string') {
    containerStyle.width = width
  }

  const classNames = classnames(className, 'mt-input', classes.input)

  return (
    <div
      className={classnames('mt-field', classes.inputContainer)}
      style={containerStyle}
    >
      {prepend && <span className={classes.contentPrepend}>{prepend}</span>}
      <input
        {...fieldProps}
        type="number"
        ref={ref}
        className={classNames}
        onChange={onChange}
      />
      {append && <span className={classes.contentAppend}>{append}</span>}
    </div>
  )
})

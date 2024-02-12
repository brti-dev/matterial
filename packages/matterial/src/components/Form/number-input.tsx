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
    prepend,
    className,
    onChange = () => null,
    ...fieldProps
  } = props

  const classNames = classnames(className, 'input', classes.input)

  return (
    <div className={classes.inputContainer}>
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

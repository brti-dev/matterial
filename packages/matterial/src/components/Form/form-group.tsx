import * as React from 'react'

import classnames from '../../lib/classnames'
import { toKebabCase } from '../../lib/string'
import { FormGroupProps } from './form.types'
import classes from './form.module.scss'

export function FormGroup({
  label,
  input,
  className,
  error = false,
  helperText,
}: FormGroupProps) {
  const classNames = classnames(
    classes.formGroup,
    className,
    error && classes.error
  )
  const id = React.useId()
  const inputProps = {
    id,
    ...(error && { 'aria-invalid': true }),
    ...(helperText && { 'aria-describedby': `${id}-note` }),
  }

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>
      {React.cloneElement(input, inputProps)}
      {helperText && (
        <div role="note" id={`${id}-note`}>
          {helperText}
        </div>
      )}
    </div>
  )
}

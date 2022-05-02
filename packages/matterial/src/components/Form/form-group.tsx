import { cloneElement } from 'react'

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
  const id = `form__${toKebabCase(label)}`
  const inputProps = { id, ...(error && { 'aria-invalid': true }) }

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(input, inputProps)}
      {helperText && <div role="note">{helperText}</div>}
    </div>
  )
}

import { cloneElement } from 'react'

import classnames from '../../lib/classnames'
import classes from './form.module.scss'

export type FormGroupProps = {
  label: string
  input: React.ReactElement<HTMLInputElement>
  className?: string
  error?: boolean
  helperText?: string
} & React.ComponentPropsWithoutRef<'div'>

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
  const id = `form__${label.replace(/[\s_]+/g, '-').toLowerCase()}`
  const inputProps = { id, ...(error && { 'aria-invalid': true }) }

  return (
    <div className={classNames}>
      <label htmlFor={id}>{label}</label>
      {cloneElement(input, inputProps)}
      {helperText && <div role="note">{helperText}</div>}
    </div>
  )
}

import * as React from 'react'

import { TextInputProps } from './form.types'
import { RequiredChildren } from '../../interfaces/children'
import classes from './form.module.scss'
import classnames from '../../lib/classnames'

export const TextInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const {
    append,
    className,
    type = 'text',
    multiline = false,
    onChange = () => null,
    prepend,
    rows = 1,
    ...fieldProps
  } = props

  function Container({ children }: RequiredChildren): JSX.Element {
    return (
      <div className={classes.inputContainer}>
        {prepend && <span className={classes.contentPrepend}>{prepend}</span>}
        {children}
        {append && <span className={classes.contentAppend}>{append}</span>}
      </div>
    )
  }

  const classNames = classnames(className, 'input', classes.input)

  if (multiline) {
    return (
      <Container>
        <textarea
          {...fieldProps}
          ref={ref}
          rows={rows}
          className={classNames}
          onChange={onChange}
        />
      </Container>
    )
  }

  return (
    <Container>
      <input
        type={type}
        {...fieldProps}
        ref={ref}
        className={classNames}
        onChange={onChange}
      />
    </Container>
  )
})

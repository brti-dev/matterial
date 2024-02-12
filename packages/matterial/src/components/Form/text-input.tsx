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
    width,
    ...fieldProps
  } = props

  const containerStyle: React.CSSProperties = {}
  if (typeof width === 'number') {
    containerStyle.width = `${width}px`
  } else if (typeof width === 'string') {
    containerStyle.width = width
  }

  function Container({ children }: RequiredChildren): JSX.Element {
    return (
      <div
        className={classnames('mt-field', classes.inputContainer)}
        style={containerStyle}
      >
        {prepend && <span className={classes.contentPrepend}>{prepend}</span>}
        {children}
        {append && <span className={classes.contentAppend}>{append}</span>}
      </div>
    )
  }

  const classNames = classnames(className, 'mt-input', classes.input)

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

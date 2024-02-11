import * as React from 'react'

import { TextInputProps } from './form.types'

export const TextInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const {
    type = 'text',
    multiline = false,
    rows = 1,
    onChange = () => null,
    ...fieldProps
  } = props

  if (multiline) {
    return (
      <textarea
        {...fieldProps}
        ref={ref}
        rows={rows}
        className="input"
        onChange={onChange}
      />
    )
  }

  return (
    <input
      type={type}
      {...fieldProps}
      ref={ref}
      className="input"
      onChange={onChange}
    />
  )
})

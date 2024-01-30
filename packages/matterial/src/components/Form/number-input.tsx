import * as React from 'react'

import { NumberInputProps } from './form.types'

export const NumberInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  NumberInputProps
>((props, ref) => {
  const { name, value = 0, onChange = () => null, ...fieldProps } = props

  return (
    <input
      {...fieldProps}
      type="number"
      ref={ref}
      name={name}
      value={value}
      className="input"
      onChange={onChange}
    />
  )
})

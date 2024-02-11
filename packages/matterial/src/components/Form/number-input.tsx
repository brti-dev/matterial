import * as React from 'react'

import { NumberInputProps } from './form.types'

export const NumberInput = React.forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  NumberInputProps
>((props, ref) => {
  const { onChange = () => null, ...fieldProps } = props

  return (
    <input
      {...fieldProps}
      type="number"
      ref={ref}
      className="input"
      onChange={onChange}
    />
  )
})

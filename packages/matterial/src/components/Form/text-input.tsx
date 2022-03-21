import { useState, forwardRef, SyntheticEvent } from 'react'

export type TextInputProps = {
  type?: 'text' | 'date' | 'email' | 'number' | 'password' | 'tel' | 'url'
  name: string
  value?: string
  multiline?: boolean
  rows?: number
  // maxRows?: number
  onChange?: (event: any, text: string) => void
} & Omit<JSX.IntrinsicElements['input'], 'onChange'> & // Necessary because of some strange error
  Omit<JSX.IntrinsicElements['textarea'], 'onChange'>

export const TextInput = forwardRef<
  HTMLTextAreaElement & HTMLInputElement,
  TextInputProps
>((props, ref) => {
  const {
    type = 'text',
    name,
    value = '',
    multiline = false,
    rows = 1,
    // maxRows,
    onChange = null,
    ...fieldProps
  } = props
  const [textValue, setTextValue] = useState<string>(value)

  const handleBlur = (event: SyntheticEvent) => {
    if (onChange) {
      onChange(event, textValue)
    }
  }

  const handleChange = (event: SyntheticEvent) => {
    const { value } = event.target as HTMLInputElement
    setTextValue(value)
  }

  if (multiline) {
    return (
      <textarea
        {...fieldProps}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        rows={rows}
        ref={ref}
        className="input"
        value={textValue}
      />
    )
  }

  return (
    <input
      type={type}
      {...fieldProps}
      name={name}
      value={textValue}
      onBlur={handleBlur}
      onChange={handleChange}
      ref={ref}
      className="input"
    />
  )
})

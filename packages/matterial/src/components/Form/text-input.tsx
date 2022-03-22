import { useState, forwardRef, SyntheticEvent } from 'react'

export type TextInputProps = {
  /**
   * If true, renders a <textarea> element, otherwise renders an
   * <input type={type}> element
   */
  multiline?: boolean
  /**
   * Input name (required)
   */
  name: string
  /**
   * Callback to fire when the input element is *blurred* (doesn't fire on
   * event change)
   */
  onChange?: (event: any, text: string) => void
  /**
   * If multiline, renders this many rows
   */
  rows?: number
  /**
   * HTML input types
   */
  type?: 'text' | 'date' | 'email' | 'number' | 'password' | 'tel' | 'url'
  /**
   * Input value
   */
  value?: string
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
    onChange = () => null,
    ...fieldProps
  } = props
  const [textValue, setTextValue] = useState<string>(value)

  const handleBlur = (event: SyntheticEvent) => onChange(event, textValue)

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

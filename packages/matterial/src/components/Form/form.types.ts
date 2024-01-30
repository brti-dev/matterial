import * as React from 'react'

/**
 * Synthetic change event on an HTML input element
 */
export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>

/**
 * Interchangeable change event used by Form components
 */
export type FormChangeEvent = (
  nameOrEvent: string | ChangeEvent,
  value?: string | number | boolean | null
) => void

/**
 * Change event used by Checkbox only
 */
export type CheckboxChangeEvent = (
  nameOrEvent: string | ChangeEvent,
  value?: boolean
) => void

export type NumberInputProps = Omit<JSX.IntrinsicElements['input'], 'type'> & {
  /**
   * Input name (required)
   */
  name: string
  /**
   * Callback to fire when input changes; This should update the `value` prop
   */
  onChange?: FormChangeEvent
  /**
   * Input value
   */
  value?: number
}

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
   * Callback to fire when input changes; This should update the `value` prop
   */
  onChange?: FormChangeEvent
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

export type FormProps = React.ComponentPropsWithoutRef<'form'> & {
  children: React.ReactNode
  className?: string
}

export type FormGroupProps = {
  label: string
  input: React.ReactElement<HTMLInputElement>
  className?: string
  error?: boolean
  helperText?: string
} & React.ComponentPropsWithoutRef<'div'>

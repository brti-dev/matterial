import * as React from 'react'

import { Button, CommonButtonProps } from '../Button'
import classnames from '../../lib/classnames'
import classes from './check-button.module.scss'

export interface CheckButtonProps extends Omit<CommonButtonProps, 'type'> {
  /**
   * Whether or not it's checked
   */
  checked?: boolean

  /**
   * Initial value when component is not controlled
   */
  defaultChecked?: boolean

  /**
   * Whether or not it can be changed
   */
  disabled?: boolean

  /**
   * Unique identifier for the element; Automatically generated if none is given
   */
  id?: string

  /**
   * Indicate if there is a loading process happening; Disables the button if true
   */
  loading?: boolean

  /**
   * Input name
   */
  name: string

  /**
   * Callback function when the button is activated
   */
  onChange?: (value: boolean) => void

  /**
   * Input type; Checkbox by default
   */
  type?: 'checkbox' | 'radio'

  /**
   * Input value; A value of undefined or null will make this an uncontrolled component
   */
  value?: string
}

const PlainOlUnmemoizedCheckButton = (props: CheckButtonProps) => {
  const {
    checked,
    children,
    className,
    defaultChecked,
    disabled,
    id: naturalId,
    loading,
    name,
    onChange = () => {},
    type = 'checkbox',
    value,
    ...rest
  } = props
  const id = naturalId || React.useId()

  const toggleChecked = () => onChange(!checked)

  return (
    <div className={classnames(className, classes.checkButton)}>
      <input
        type={type}
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled || loading}
        id={id}
        className="visually-hidden"
        onChange={toggleChecked}
      />
      <Button
        as="label"
        htmlFor={id}
        className={classnames(
          'button variant--outlined',
          (disabled || loading) && 'disabled',
          checked && 'checked'
        )}
        data-loading={loading && 'true'}
        {...rest}
      >
        {children}
      </Button>
    </div>
  )
}

export const CheckButton = React.memo(PlainOlUnmemoizedCheckButton)

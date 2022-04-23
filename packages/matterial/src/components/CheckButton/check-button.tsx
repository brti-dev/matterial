import { memo, forwardRef } from 'react'

import { Button, CommonButtonProps } from '../Button'
import classnames from '../../lib/classnames'
import classes from './check-button.module.scss'

export interface CheckButtonProps extends CommonButtonProps {
  /**
   * Whether or not it's checked
   */
  checked?: boolean
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
   * Input value
   */
  value: string
}

const PlainOlUnmemoizedCheckButton = forwardRef<
  HTMLLabelElement,
  CheckButtonProps
>((props, ref) => {
  const {
    name,
    value,
    checked,
    disabled,
    loading,
    id: naturalId,
    className,
    onChange = () => {},
    children,
    ...rest
  } = props
  const id = naturalId || `checkButton__${name}__${value}`

  const toggleChecked = () => onChange(!checked)

  return (
    <div className={classnames(className, classes.checkButton)}>
      <input
        type="checkbox"
        name={name}
        value={value}
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
        ref={ref}
        {...rest}
      >
        {children}
      </Button>
    </div>
  )
})

export const CheckButton = memo(PlainOlUnmemoizedCheckButton)

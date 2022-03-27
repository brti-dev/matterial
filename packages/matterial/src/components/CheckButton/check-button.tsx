import { memo, forwardRef } from 'react'

import classnames from 'lib/classnames'
import classes from './check-button.module.scss'

export type CheckButtonProps = {
  name: string
  children: React.ReactNode
  value: string
  checked?: boolean
  className?: string
  disabled?: boolean
  id?: string
  loading?: boolean
  onChange?: (value: boolean) => void
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
    <div className={classnames(className, classes.checkButton)} {...rest}>
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
      <label
        htmlFor={id}
        className={classnames(
          'button variant--outlined',
          (disabled || loading) && 'disabled',
          checked && 'checked'
        )}
        data-loading={loading && 'true'}
        ref={ref}
      >
        <span className="text-content">{children}</span>
      </label>
    </div>
  )
})

export const CheckButton = memo(PlainOlUnmemoizedCheckButton)

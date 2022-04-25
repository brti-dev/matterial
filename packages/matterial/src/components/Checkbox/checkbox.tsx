import { forwardRef } from 'react'

import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxMinusIcon,
  CheckboxSquareIcon,
} from '../Icons'
import classnames from '../../lib/classnames'
import classes from './checkbox.module.scss'

type Size = number | 'small' | 'medium' | 'large'

type Props = {
  /**
   * Indicates if it's initially checked or not; **Controlled component**:
   * state is only set by the `checked` prop, not by the DOM
   */
  checked?: boolean
  /**
   * Label
   */
  children: React.ReactNode
  /**
   * Input name
   */
  name?: string
  /**
   * Callback executed when the input value changes
   */
  onChange?: (checked: boolean) => void
  /**
   * Size of checkbox and label; Number in pixels
   */
  size?: Size
}

type NativeProps = Omit<React.ComponentPropsWithRef<'input'>, keyof Props>
type CheckboxProps = NativeProps & Props

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: any) => {
    const {
      checked,
      children,
      className,
      name,
      onChange = () => {},
      size = 'medium',
      style: naturalStyle,
    } = props
    const sizePx = typeof size === 'number' ? `${size}px` : null
    const sizeClass = !sizePx ? `size--${size}` : null
    const style = { ...naturalStyle, ...(sizePx && { '--size': sizePx }) }
    const classNames = classnames(classes.checkbox, className, sizeClass)

    const toggleChecked = () => onChange(!checked)

    return (
      <label className={classNames} style={style}>
        <input
          type="checkbox"
          name={name}
          className="visually-hidden"
          ref={ref}
          onChange={toggleChecked}
          checked={checked}
        />
        <Icon {...props} />
        <span className={classes.label}>{children}</span>
      </label>
    )
  }
)

function Icon(props: CheckboxProps): React.ReactElement {
  let Component: any
  if (props.checked) {
    Component = CheckboxCheckedIcon
  } else {
    Component = CheckboxIcon
  }

  return <Component aria-hidden />
}

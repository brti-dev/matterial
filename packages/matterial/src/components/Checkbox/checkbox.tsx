import { forwardRef } from 'react'

import { Color } from '../../interfaces/theme'
import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxMinusIcon,
  // CheckboxSquareIcon,
} from '../Icons'
import classnames from '../../lib/classnames'
import cssColor from '../../lib/css-color'
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
   * Color of the checkbox
   */
  color?: Color | string
  /**
   * Indicates the checkbox is not changeable
   */
  disabled?: boolean
  /**
   * Limbo state
   */
  indeterminate?: boolean
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
      checked = false,
      children,
      className,
      color = 'default',
      disabled = false,
      // indeterminate = false,
      name,
      onChange = () => {},
      size = 'medium',
      style: naturalStyle,
    } = props
    const sizePx = typeof size === 'number' ? `${size}px` : null
    const sizeClass = !sizePx ? `size--${size}` : null
    const style = {
      ...naturalStyle,
      '--color': cssColor(color),
      ...(sizePx && { '--size': sizePx }),
    }
    const classNames = classnames(
      classes.checkbox,
      className,
      sizeClass,
      `variant--default color--${color}`,
      disabled ? classes.disabled : undefined
    )

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
          disabled={disabled}
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
  } else if (props.indeterminate) {
    Component = CheckboxMinusIcon
  } else {
    Component = CheckboxIcon
  }

  return <Component aria-hidden />
}

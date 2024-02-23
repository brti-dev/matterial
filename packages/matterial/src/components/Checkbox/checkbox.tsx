import * as React from 'react'

import { CheckboxChangeEvent } from '../Form'
import { ColoredElement } from '../../interfaces/theme'
import { Icon } from '../Icon'
import classnames from '../../lib/classnames'
import useColor from '../../lib/use-color'
import classes from './checkbox.module.scss'
import { RequiredChildren } from '../../interfaces/children'

type Size = number | 'small' | 'medium' | 'large'

type Props = {
  /**
   * Indicates if it's initially checked or not; **Controlled component**:
   * state is only set by the `checked` prop, not by the DOM
   */
  checked?: boolean

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
  name: string

  /**
   * Callback executed when the input value changes
   */
  onChange?: CheckboxChangeEvent

  /**
   * Size of checkbox and label; Number in pixels
   */
  size?: Size
} & RequiredChildren &
  ColoredElement

type NativeProps = Omit<React.ComponentPropsWithRef<'label'>, keyof Props>
type CheckboxProps = NativeProps & Props

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      checked: controlledChecked,
      children,
      className,
      color: naturalColor = 'default',
      defaultChecked,
      disabled = false,
      indeterminate,
      name,
      onChange = () => null,
      size = 'medium',
      style: naturalStyle,
      ...rest
    } = props
    const color = useColor(naturalColor)
    const sizePx = typeof size === 'number' ? `${size}px` : null
    const sizeClass = !sizePx ? `size--${size}` : null
    const style = {
      ...naturalStyle,
      ...color.style,
      ...(sizePx && { '--size': sizePx }),
    }
    const classNames = classnames(
      classes.checkbox,
      className,
      sizeClass,
      `variant--default`,
      color.className,
      disabled ? classes.disabled : undefined
    )

    const [checked, setChecked] = React.useState<boolean>(
      controlledChecked !== undefined ? controlledChecked : !!defaultChecked
    )

    const toggleChecked = () => {
      const newChecked = !checked
      setChecked(newChecked)
      onChange(name, newChecked)
    }

    return (
      <label className={classNames} style={style} {...rest}>
        <input
          ref={ref}
          type="checkbox"
          name={name}
          checked={checked}
          disabled={disabled}
          className="visually-hidden"
          onChange={toggleChecked}
        />
        <CheckboxIcon
          checked={checked}
          indeterminate={indeterminate}
          aria-hidden
        />
        <span className={classes.label}>{children}</span>
      </label>
    )
  }
)

function CheckboxIcon({
  checked,
  indeterminate,
}: Pick<CheckboxProps, 'checked' | 'indeterminate'>): React.ReactElement {
  let iconType = 'checkbox'
  let icon: string = ''
  if (checked) {
    icon = 'Checked'
  } else if (indeterminate) {
    icon = 'Minus'
  }

  return <Icon icon={`${iconType}${icon}`} aria-hidden />
}

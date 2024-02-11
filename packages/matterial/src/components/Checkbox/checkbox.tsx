import * as React from 'react'

import { ChangeEvent, CheckboxChangeEvent } from '../Form'
import { ColoredElement } from '../../interfaces/theme'
import { Icon } from '../Icon'
import classnames from '../../lib/classnames'
import useColor from '../../lib/use-color'
import classes from './checkbox.module.scss'
import { RequiredChildren } from '../../interfaces/children'

type Size = number | 'small' | 'medium' | 'large'

type Props = RequiredChildren &
  ColoredElement & {
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
  }

type NativeProps = Omit<React.ComponentPropsWithRef<'input'>, keyof Props>
type CheckboxProps = NativeProps & Props

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: any) => {
    const {
      checked: controlledChecked,
      children,
      className,
      color: naturalColor = 'default',
      disabled = false,
      name,
      onChange = () => null,
      size = 'medium',
      style: naturalStyle,
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

    // Provide local state if the parent is not controlling this component
    const isControlled = controlledChecked !== undefined
    const [localChecked, setLocalChecked] = React.useState<boolean>(
      controlledChecked || false
    )

    const checked = isControlled ? controlledChecked : localChecked

    const handleChange = () => {
      if (isControlled) {
        onChange(name, !controlledChecked)
      } else {
        setLocalChecked(!localChecked)
        onChange(name, localChecked)
      }
    }

    return (
      <label className={classNames} style={style}>
        <input
          type="checkbox"
          name={name}
          className="visually-hidden"
          ref={ref}
          onChange={handleChange}
          checked={checked}
          disabled={disabled}
        />
        <CheckboxIcon checked={checked} indeterminate={props.indeterminate} />
        <span className={classes.label}>{children}</span>
      </label>
    )
  }
)

function CheckboxIcon({
  checked,
  indeterminate,
}: Pick<CheckboxProps, 'checked' | 'indeterminate'>): React.ReactElement {
  let icon: string
  if (checked) {
    icon = 'CheckboxChecked'
  } else if (indeterminate) {
    icon = 'CheckboxMinus'
  } else {
    icon = 'Checkbox'
  }

  return <Icon icon={icon} aria-hidden />
}

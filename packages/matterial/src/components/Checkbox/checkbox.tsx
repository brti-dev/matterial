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
      checked = false,
      children,
      className,
      color: naturalColor = 'default',
      disabled = false,
      // indeterminate = false,
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

    const toggleChecked = (event: ChangeEvent) => onChange(event, !checked)

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
        <CheckboxIcon {...props} />
        <span className={classes.label}>{children}</span>
      </label>
    )
  }
)

function CheckboxIcon(props: CheckboxProps): React.ReactElement {
  let Component: any
  if (props.checked) {
    Component = Icon.CheckboxChecked
  } else if (props.indeterminate) {
    Component = Icon.CheckboxMinus
  } else {
    Component = Icon.Checkbox
  }

  return <Component aria-hidden />
}

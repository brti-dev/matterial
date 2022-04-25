import { forwardRef } from 'react'

import {
  CheckboxIcon,
  CheckboxCheckedIcon,
  CheckboxMinusIcon,
  CheckboxSquareIcon,
} from '../Icons'
import classnames from '../../lib/classnames'
import classes from './checkbox.module.scss'

type Props = {
  /**
   * Indicates if it's initially checked or not; Uncontrolled component: state
   * is only initially set by the `checked` prop, and then managed by the DOM
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
}

type NativeProps = Omit<React.ComponentPropsWithRef<'input'>, keyof Props>
type CheckboxProps = NativeProps & Props

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: any) => {
    const { checked, children, className, name, onChange = () => {} } = props
    const classNames = classnames(classes.checkbox, className)

    const toggleChecked = () => onChange(!checked)

    return (
      <label className={classNames}>
        <input
          type="checkbox"
          name={name}
          className="visually-hidden"
          ref={ref}
          defaultChecked={checked} //
          onChange={toggleChecked}
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

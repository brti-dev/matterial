'use client'

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
   * Indicates the checkbox is not changeable
   */
  disabled?: boolean

  /**
   * Callback executed when the input value changes
   */
  onChange?: CheckboxChangeEvent

  /**
   * Size of checkbox and label; Number in pixels
   */
  size?: Size

  value: string
} & RequiredChildren &
  ColoredElement

type NativeProps = Omit<React.ComponentPropsWithRef<'label'>, keyof Props>
type RadioProps = NativeProps & Props

type RadioGroup = {
  name: string
  checked?: string
  setChecked: (value: string) => void
}
type RadioGroupProps = {
  name: RadioGroup['name']
  defaultChecked?: string
  onChange?: (name: string) => void
} & RequiredChildren

const RadioContext = React.createContext<RadioGroup>({
  name: '',
  setChecked: () => alert('no provider'),
})

function RadioGroup({
  children,
  defaultChecked,
  name,
  onChange,
}: RadioGroupProps): JSX.Element {
  const [checked, setChecked] = React.useState(defaultChecked)

  React.useEffect(() => {
    onChange?.(checked || '')
  }, [checked, onChange])

  return (
    <RadioContext.Provider value={{ name, checked, setChecked }}>
      {children}
    </RadioContext.Provider>
  )
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
    const {
      children,
      className,
      color: naturalColor = 'default',
      defaultChecked,
      disabled = false,
      onChange = () => null,
      size = 'medium',
      style: naturalStyle,
      value,
      ...rest
    } = props
    const { name, checked, setChecked } = React.useContext(
      RadioContext
    ) as RadioGroup
    console.log('group', name, checked)
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

    const handleSetChecked = () => {
      setChecked(value)
      onChange(name, true)
    }

    return (
      <label className={classNames} style={style} {...rest}>
        <input
          ref={ref}
          type="radio"
          name={name}
          value={value}
          checked={checked === value}
          disabled={disabled}
          className="visually-hidden"
          onChange={handleSetChecked}
        />
        <RadioIcon checked={checked === value} aria-hidden />
        <span className={classes.label}>{children}</span>
      </label>
    )
  }
)

function RadioIcon({ checked }: { checked: boolean }): React.ReactElement {
  let iconType = 'radio'
  let icon: string = ''
  if (checked) {
    icon = 'Checked'
  }

  return <Icon icon={`${iconType}${icon}`} aria-hidden />
}

export { Radio, RadioGroup }

import {
  BiArrowToTop,
  BiBell,
  BiCheckbox,
  BiCheckboxChecked,
  BiCheckboxMinus,
  BiCheckboxSquare,
  BiCheckCircle,
  BiInfoCircle,
  BiError,
  BiErrorCircle,
  BiMenu,
  BiRightArrowAlt,
} from 'react-icons/bi'
import { IconType, IconBaseProps } from 'react-icons'

import { ColoredElement } from '../../interfaces/theme'
import useColor from '../../lib/use-color'

export type IconProps = IconBaseProps & ColoredElement

const iconify = (Component: IconType) => (props: IconProps) =>
  <Icon as={Component} {...props} />

function Icon({
  color,
  as: Component,
  ...rest
}: ColoredElement & { as: IconType }): JSX.Element {
  const { cssColor, style } = useColor(color)

  return <Component style={style} color={cssColor || undefined} {...rest} />
}

export const ArrowRight = iconify(BiRightArrowAlt)
export const ArrowToTop = iconify(BiArrowToTop)
export const Checkbox = iconify(BiCheckbox)
export const CheckboxChecked = iconify(BiCheckboxChecked)
export const CheckboxMinus = iconify(BiCheckboxMinus)
export const CheckboxSquare = iconify(BiCheckboxSquare)
export const Error = iconify(BiErrorCircle)
export const Info = iconify(BiInfoCircle)
export const Menu = iconify(BiMenu)
export const Notification = iconify(BiBell)
export const Success = iconify(BiCheckCircle)
export const Warning = iconify(BiError)

import {
  BiArrowToTop,
  BiBell,
  BiCheckbox,
  BiCheckboxChecked,
  BiCheckboxMinus,
  BiCheckboxSquare,
  BiCheckCircle,
  BiError,
  BiErrorCircle,
  BiInfoCircle,
  BiMenu,
  BiPlus,
  BiPlusCircle,
  BiRadioCircle,
  BiRadioCircleMarked,
  BiRightArrowAlt,
  BiSearch,
  BiSolidPlusCircle,
  BiSolidPlusSquare,
} from 'react-icons/bi'
import { IoSettingsOutline } from 'react-icons/io5'
import { IconType, IconBaseProps } from 'react-icons'

import { ColoredElement } from '../../interfaces/theme'
import useColor from '../../lib/use-color'

interface IconMap {
  [key: string]: IconType
}

interface IconProps extends IconBaseProps, ColoredElement {
  icon: keyof IconMap
}

const icons: IconMap = {
  arrowRight: BiRightArrowAlt,
  arrowToTop: BiArrowToTop,
  checkbox: BiCheckbox,
  checkboxChecked: BiCheckboxChecked,
  checkboxMinus: BiCheckboxMinus,
  checkboxSquare: BiCheckboxSquare,
  error: BiErrorCircle,
  info: BiInfoCircle,
  menu: BiMenu,
  notification: BiBell,
  plus: BiPlus,
  plusCircle: BiPlusCircle,
  plusCircleSolid: BiSolidPlusCircle,
  plusSquareSolid: BiSolidPlusSquare,
  radio: BiRadioCircle,
  radioChecked: BiRadioCircleMarked,
  search: BiSearch,
  settings: IoSettingsOutline,
  success: BiCheckCircle,
  warning: BiError,
}

function Icon({ color, icon, ...rest }: IconProps): JSX.Element {
  const upperCase = String(icon).charAt(0).toLowerCase() + String(icon).slice(1)
  const Component = icons[icon] || icons[upperCase]
  if (!Component) {
    console.error(`Unknown icon "${icon}"`)

    return <></>
  }

  const { cssColor, style } = useColor(color)

  return <Component style={style} color={cssColor || undefined} {...rest} />
}

export type { IconProps }
export { icons, Icon }

import {
  BiArea,
  BiArrowFromTop,
  BiArrowToTop,
  BiBell,
  BiBellOff,
  BiBulb,
  BiCheckbox,
  BiCheckboxChecked,
  BiCheckboxMinus,
  BiCheckboxSquare,
  BiCheckCircle,
  BiCog,
  BiError,
  BiErrorCircle,
  BiFullscreen,
  BiHome,
  BiInfoCircle,
  BiLoaderAlt,
  BiMenu,
  BiPlus,
  BiPlusCircle,
  BiRadioCircle,
  BiRadioCircleMarked,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSearch,
  BiSolidPlusCircle,
  BiSolidPlusSquare,
} from 'react-icons/bi'
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
  arrowLeft: BiLeftArrowAlt,
  arrowRight: BiRightArrowAlt,
  arrowToBottom: BiArrowFromTop,
  arrowToTop: BiArrowToTop,
  checkbox: BiCheckbox,
  checkboxChecked: BiCheckboxChecked,
  checkboxMinus: BiCheckboxMinus,
  checkboxSquare: BiCheckboxSquare,
  error: BiErrorCircle,
  expand: BiArea,
  fullscreen: BiFullscreen,
  home: BiHome,
  info: BiInfoCircle,
  lightBulb: BiBulb,
  loader: BiLoaderAlt,
  menu: BiMenu,
  notification: BiBell,
  notificationOff: BiBellOff,
  plus: BiPlus,
  plusCircle: BiPlusCircle,
  plusCircleSolid: BiSolidPlusCircle,
  plusSquareSolid: BiSolidPlusSquare,
  radio: BiRadioCircle,
  radioChecked: BiRadioCircleMarked,
  search: BiSearch,
  settings: BiCog,
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

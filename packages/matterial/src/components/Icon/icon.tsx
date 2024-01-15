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
  BiSearch,
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
  ArrowRight: BiRightArrowAlt,
  ArrowToTop: BiArrowToTop,
  Checkbox: BiCheckbox,
  CheckboxChecked: BiCheckboxChecked,
  CheckboxMinus: BiCheckboxMinus,
  CheckboxSquare: BiCheckboxSquare,
  Error: BiErrorCircle,
  Info: BiInfoCircle,
  Menu: BiMenu,
  Notification: BiBell,
  Search: BiSearch,
  Success: BiCheckCircle,
  Warning: BiError,
}

function Icon({ color, icon, ...rest }: IconProps): JSX.Element {
  const Component = icons[icon]
  if (!Component) {
    console.error(`Unknown icon "${icon}"`)

    return <></>
  }

  const { cssColor, style } = useColor(color)

  return <Component style={style} color={cssColor || undefined} {...rest} />
}

export type { IconProps }
export { icons, Icon }

import {
  Menu,
  MenuList,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import { Button, CommonButtonProps } from '../Button'

type NewMenuButtonProps = {
  as?: any // MenuButton props `as` conflict with ButtonProps `as`
} & MenuButtonProps &
  CommonButtonProps

const NewMenuButton = ({ as, ...props }: NewMenuButtonProps) => (
  <MenuButton
    as={as || Button}
    style={{
      appearance: 'none',
      WebkitAppearance: 'none',
      MozAppearance: 'none',
    }}
    {...props}
  />
)

export {
  Menu,
  MenuList,
  NewMenuButton as MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
}

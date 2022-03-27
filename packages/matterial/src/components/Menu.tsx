import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import { Button, ButtonProps } from './Button'

const NewMenuButton = (props: ButtonProps) => (
  <MenuButton
    as={Button}
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

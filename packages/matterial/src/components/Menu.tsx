import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuItems,
  MenuPopover,
  MenuLink,
} from '@reach/menu-button'
import { Button, CommonButtonProps } from './Button'

const NewMenuButton = (props: CommonButtonProps) => (
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

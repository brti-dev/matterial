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
import * as React from 'react'

import { OverloadedElementProps } from '../../interfaces/OverloadedElement'
import { Button, CommonButtonProps } from '../Button'

type NewMenuButtonProps =
  | (Required<OverloadedElementProps> & any) // MenuButton props `as` conflict with ButtonProps `as`
  | (MenuButtonProps & CommonButtonProps)

const style = {
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
}
const NewMenuButton = React.forwardRef(
  ({ as = Button, ...props }: NewMenuButtonProps, ref: any) =>
    React.createElement(MenuButton, { as, style, ref, ...props })
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

import {
  Menu,
  MenuArrow,
  MenuButton,
  MenuButtonArrow,
  MenuDescription,
  MenuDismiss,
  MenuGroup,
  MenuGroupLabel,
  MenuHeading,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
  MenuList,
  MenuProvider,
  MenuSeparator,
} from '@ariakit/react'
import type {
  MenuButtonProps,
  MenuItemCheckboxProps,
  MenuItemProps,
  MenuItemRadioProps,
  MenuProps,
  MenuSeparatorProps,
} from '@ariakit/react'
import * as React from 'react'

import { OverloadedElementProps } from '../../interfaces/OverloadedElement'
import { Button, CommonButtonProps } from '../Button'
import classnames from '../../lib/classnames'
import classes from './menu.module.scss'
import { Icon } from '../Icon'
import { RequiredChildren } from '../../interfaces/children'

type NewMenuButtonProps =
  | (Required<OverloadedElementProps> & any) // MenuButton props `as` conflict with ButtonProps `as`
  | (MenuButtonProps & CommonButtonProps)

const style = {
  appearance: 'none',
  WebkitAppearance: 'none',
  MozAppearance: 'none',
}
const NewMenuButton = React.forwardRef(
  ({ as: Component = Button, ...props }: NewMenuButtonProps, ref: any) =>
    React.createElement(MenuButton, {
      render: <Component />,
      style,
      ref,
      ...props,
    })
)

function StyledMenu({ className, ...props }: MenuProps) {
  return <Menu {...props} className={classnames(classes.menu, className)} />
}

function StyledMenuItem({ className, ...props }: MenuItemProps) {
  return <MenuItem {...props} className={classnames(classes.item, className)} />
}

function StyledMenuSeparator({ className, ...props }: MenuSeparatorProps) {
  return (
    <MenuSeparator
      {...props}
      className={classnames(classes.separator, className)}
    />
  )
}

function MenuItemCheckboxNew({
  checked,
  children,
  className,
  size = 25,
  ...props
}: MenuItemCheckboxProps & RequiredChildren & { size?: number }) {
  return (
    <MenuItemCheckbox
      {...props}
      className={classnames(classes.item, classes.itemCheckbox, className)}
    >
      <Icon icon={checked ? 'checkboxChecked' : 'checkbox'} size={size} />
      {children}
    </MenuItemCheckbox>
  )
}

function MenuItemRadioNew({
  checked,
  children,
  className,
  size = 25,
  ...props
}: MenuItemRadioProps & RequiredChildren & { size?: number }) {
  return (
    <MenuItemRadio
      {...props}
      className={classnames(classes.item, classes.itemCheckbox, className)}
    >
      <Icon icon={checked ? 'radioChecked' : 'radio'} size={size} />
      {children}
    </MenuItemRadio>
  )
}

export {
  StyledMenu as Menu,
  MenuArrow,
  NewMenuButton as MenuButton,
  MenuButtonArrow,
  MenuDescription,
  MenuDismiss,
  MenuGroup,
  MenuGroupLabel,
  MenuHeading,
  StyledMenuItem as MenuItem,
  MenuItemCheckboxNew as MenuItemCheckbox,
  MenuItemRadioNew as MenuItemRadio,
  MenuList,
  MenuProvider,
  StyledMenuSeparator as MenuSeparator,
}

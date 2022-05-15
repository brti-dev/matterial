import * as React from 'react'
import { Menu, MenuList, MenuButton, MenuItem } from './menu'

export function MenuExample() {
  const [selected, setSelected] = React.useState<null | string>(null)

  return (
    <Menu>
      <MenuButton variant="contained">Open Menu</MenuButton>{' '}
      <span>
        Selected option: <b>{selected ?? 'none'}</b>
      </span>
      <MenuList>
        <MenuItem onSelect={() => setSelected('Foo')}>Foo</MenuItem>
        <MenuItem onSelect={() => setSelected('Bar')}>Bar</MenuItem>
      </MenuList>
    </Menu>
  )
}

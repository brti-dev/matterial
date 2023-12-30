import * as React from 'react'
import { MenuProvider, Menu, MenuButton, MenuItem } from './menu'

export function MenuExample() {
  const [selected, setSelected] = React.useState<null | string>(null)

  return (
    <MenuProvider>
      <MenuButton variant="contained">Open Menu</MenuButton>{' '}
      <span>
        Selected option: <b>{selected ?? 'none'}</b>
      </span>
      <Menu>
        <MenuItem onClick={() => setSelected('Foo')}>
          Foo
        </MenuItem>
        <MenuItem onClick={() => setSelected('Bar')}>Bar</MenuItem>
      </Menu>
    </MenuProvider>
  )
}

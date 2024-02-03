import * as React from 'react'
import {
  MenuProvider,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemCheckbox,
  MenuItemRadio,
} from './menu'

export function MenuExample() {
  const [selected, setSelected] = React.useState<null | string>(null)
  const [checked, setChecked] = React.useState<boolean>(false)
  const [checkedRadio, setCheckedRadio] = React.useState<string>('')

  return (
    <MenuProvider>
      <MenuButton variant="contained">Open Menu</MenuButton>{' '}
      <span>
        Selected option: <b>{selected ?? 'none'}</b>
      </span>
      <Menu>
        <MenuItem onClick={() => setSelected('Foo')}>Foo</MenuItem>
        <MenuItem onClick={() => setSelected('Bar')}>Bar</MenuItem>
      </Menu>
    </MenuProvider>
  )
}

export function MenuCheckedExample() {
  const [checked, setChecked] = React.useState<boolean>(false)
  const [checkedRadio, setCheckedRadio] = React.useState<'foo' | 'bar'>('foo')

  return (
    <MenuProvider>
      <MenuButton variant="contained">Open Menu</MenuButton>
      <Menu>
        <MenuItemCheckbox
          name="checked"
          checked={checked}
          onClick={() => setChecked(!checked)}
        >
          Checkbox
        </MenuItemCheckbox>
        <MenuItemRadio
          name="checkedRadio"
          value="foo"
          checked={checkedRadio === 'foo'}
          onClick={() =>
            setCheckedRadio(checkedRadio === 'foo' ? 'bar' : 'foo')
          }
        >
          Foo
        </MenuItemRadio>
        <MenuItemRadio
          name="checkedRadio"
          value="bar"
          checked={checkedRadio === 'bar'}
          onClick={() =>
            setCheckedRadio(checkedRadio === 'foo' ? 'bar' : 'foo')
          }
        >
          Bar
        </MenuItemRadio>
      </Menu>
    </MenuProvider>
  )
}

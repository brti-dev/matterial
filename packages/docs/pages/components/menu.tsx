import { useState } from 'react'
import Link from 'next/link'
import { Menu, MenuList, MenuButton, MenuItem } from 'matterial'

import Layout from 'components/Layout'

export default function MenuComponent() {
  const [selected, setSelected] = useState<null | string>(null)
  return (
    <Layout>
      <h1>Menu</h1>
      <p>A dropdown menu with a list of choices.</p>
      <p>
        Besides the <code>MenuButton</code> component which extends the{' '}
        <Link href="/components/button">Button component</Link>, all other
        component operations are identical to{' '}
        <a href="https://reach.tech/menu-button/#menuitems">Reach UI</a>{' '}
        specification.
      </p>
      <h2>Simple Menu</h2>
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
    </Layout>
  )
}

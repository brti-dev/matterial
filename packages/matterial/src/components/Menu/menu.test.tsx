import '@testing-library/jest-dom'
import * as React from 'react'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../test-utils'
import { Menu, MenuButton } from './menu'
import { MenuExample } from './menu.examples'

describe('Menu', () => {
  test('MenuButton overloads', () => {
    const Foo = React.forwardRef(({ foo }: { foo: string }, ref: any) => (
      <button ref={ref}>{foo}</button>
    ))

    render(
      <Menu>
        <MenuButton as={Foo} foo="foo">
          bar
        </MenuButton>
      </Menu>
    )

    expect(screen.getByText('foo')).toBeInTheDocument()
  })

  test('Menu opens and closes when button clicked', () => {
    render(<MenuExample />)
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByRole('menu')).toBeInTheDocument()
    userEvent.click(screen.getByRole('button'))
    expect(screen.queryByRole('menu')).not.toBeInTheDocument()
  })
})

import { useState } from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../../test-utils'
import { Color } from '../../interfaces/theme'
import { COLORS } from '../../const'
import { Checkbox } from '.'

describe('Checkbox component', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Checkbox color="primary" className="foo" checked>
          Checkbox
        </Checkbox>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should work with different colors', () => {
    const tree = renderer
      .create(
        <>
          {[...COLORS, 'hotpink'].map((color: Color) => (
            <Checkbox color={color} key={color}>
              {color}
            </Checkbox>
          ))}
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should work with different sizes', () => {
    const tree = renderer
      .create(
        <>
          {['small', 'large', 50].map((size: any) => (
            <Checkbox size={size} key={size}>
              {size}
            </Checkbox>
          ))}
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render checked initially', () => {
    render(<Checkbox checked>checked</Checkbox>)

    expect(screen.queryByRole('checkbox')).toBeChecked()
  })

  test('should toggle', () => {
    render(<Checkbox>checked</Checkbox>)

    const cbox = screen.queryByRole('checkbox')
    expect(cbox).not.toBeChecked()

    // @ts-ignore
    userEvent.click(cbox)
    expect(cbox).toBeChecked()
  })

  test('should trigger a callback onChange', () => {
    const CheckboxComponent = () => {
      const [change, setChange] = useState(false)

      return (
        <Checkbox onChange={() => setChange(true)}>
          {change ? 'is checked' : 'not checked'}
        </Checkbox>
      )
    }

    render(<CheckboxComponent />)
    const cbox = screen.getByRole('checkbox')
    userEvent.click(cbox)
    expect(screen.getByText('is checked')).toBeInTheDocument()
  })

  test('should be disabled', () => {
    render(<Checkbox disabled>disabled</Checkbox>)

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })
})

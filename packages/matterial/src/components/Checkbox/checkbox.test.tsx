import * as React from 'react'
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event'

import { render, screen } from '../../test-utils'
import { Color } from '../../interfaces/theme'
import { COLORS } from '../../const'
import { Checkbox } from '.'
import { CheckboxExample } from './checkbox.examples'

describe('Checkbox component', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Checkbox name="checkbox" color="primary" className="foo" checked>
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
          {[...COLORS, 'hotpink'].map(color => (
            <Checkbox name="checkbox" color={color} key={color}>
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
            <Checkbox name="checkbox" size={size} key={size}>
              {size}
            </Checkbox>
          ))}
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render checked initially and toggle', () => {
    render(<CheckboxExample />)

    const cbox = screen.getByLabelText("I'm a daddy")
    expect(cbox).toBeChecked()

    // @ts-ignore
    userEvent.click(cbox)
    expect(cbox).not.toBeChecked()
  })

  test('should trigger a callback onChange', () => {
    const CheckboxComponent = () => {
      const [change, setChange] = React.useState(false)

      return (
        <Checkbox name="checkbox" onChange={() => setChange(true)}>
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
    render(
      <Checkbox name="checkbox" disabled>
        disabled
      </Checkbox>
    )

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })
})

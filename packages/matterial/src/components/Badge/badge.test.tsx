import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'

import { render } from '../../../test-utils'
import { Color } from 'interfaces/theme'
import { COLORS } from 'lib/constants'
import Badge from '.'

test('should render correctly', () => {
  const tree = renderer.create(<Badge variant="dot">B</Badge>).toJSON()
  expect(tree).toMatchSnapshot()
})

test('should render content', () => {
  const { getByText } = render(<Badge content={1}>B</Badge>)

  expect(getByText('1')).toBeInTheDocument()
})

test('should work with different colors', () => {
  const tree = renderer
    .create(
      <>
        {COLORS.map((color: Color) => (
          <Badge color={color} variant="dot" key={color}>
            {color.substring(0, 2)}
          </Badge>
        ))}
      </>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

test('should not display a number higher than `max`', () => {
  const { getByText } = render(
    <Badge content={100} max={99}>
      B
    </Badge>
  )

  expect(getByText('99+')).toBeInTheDocument()
})

test('should not display content when number 0', () => {
  const { getByText } = render(<Badge content={0}>B</Badge>)

  expect(getByText('0')).not.toBeVisible()
})

test('should display content when `showZero` is truthy', () => {
  const { getByText } = render(
    <Badge content={0} showZero>
      B
    </Badge>
  )

  expect(getByText('0')).toBeInTheDocument()
})

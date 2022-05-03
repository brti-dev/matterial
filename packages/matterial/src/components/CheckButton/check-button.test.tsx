import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'

import { render, screen } from '../../test-utils'
import { CheckButton, CheckButtonGroup } from '.'

const CheckButtons = ({ checked, setChecked = () => {}, ...rest }: any) => (
  <>
    <CheckButton
      name="daddy"
      value="true"
      checked={checked == 'daddy'}
      onChange={() => setChecked('daddy')}
      {...rest}
    >
      I'm a daddy
    </CheckButton>
    <CheckButton
      name="has_boat"
      value="true"
      checked={checked == 'has_boat'}
      onChange={() => setChecked('has_boat')}
      {...rest}
    >
      I have a boat
    </CheckButton>
  </>
)

test('should render correctly', () => {
  const tree = renderer
    .create(
      <CheckButtonGroup orientation="vertical" className="cb__group">
        <CheckButtons checked="daddy" className="cb__item" />
      </CheckButtonGroup>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

describe('check button', () => {
  test('should be checked when set as `checked`', () => {
    const { getAllByRole } = render(
      <CheckButtonGroup>
        <CheckButtons checked="daddy" />
      </CheckButtonGroup>
    )

    const checkBox = getAllByRole('checkbox')[0]
    expect(checkBox).toBeChecked()
  })

  test('should execute callback when clicked', () => {
    let checked = false
    render(
      <CheckButtonGroup>
        <CheckButtons setChecked={() => (checked = true)} />
      </CheckButtonGroup>
    )

    userEvent.click(screen.getByText("I'm a daddy"))
    expect(checked).toBeTruthy()
  })
})

describe('check button group', () => {
  test('should render vertically', () => {
    const id = 'check-button-group'

    const { getByTestId } = render(
      <CheckButtonGroup orientation="vertical" data-testid={id}>
        <CheckButtons />
      </CheckButtonGroup>
    )

    expect(getByTestId(id)).toHaveClass('containerVertical')
  })

  test('should render as an overloaded element', () => {
    const id = 'check-button-group'
    const Row = ({ id }: { id: string }) => (
      <span data-testid={id} className="foo" />
    )

    const { getByTestId } = render(
      <CheckButtonGroup className="bar" as={Row} id={id}>
        <CheckButtons />
      </CheckButtonGroup>
    )

    expect(getByTestId(id)).toHaveClass('foo')
  })
})

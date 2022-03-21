import '@testing-library/jest-dom'

import { render, screen } from '../../../test-utils'
import { Form, FormGroup, TextInput } from '.'

test('should render a form and label with text input', () => {
  const label = 'foo'
  const { getByTestId, getByLabelText } = render(
    <Form data-testid="form">
      <FormGroup label={label} input={<input type="text" />} />
    </Form>
  )

  expect(getByTestId('form')).toBeInTheDocument()
  expect(getByLabelText(label)).toBeInTheDocument()
})

test('form group should have helper text', () => {
  const note = 'foo'
  const label = 'bar'
  const { getByText } = render(
    <FormGroup
      label={label}
      input={<TextInput name={label} />}
      helperText={note}
    />
  )

  expect(getByText(note)).toBeInTheDocument()
})

test('text input should have the proper `type` attribute', () => {
  const { getByRole, getByPlaceholderText, rerender } = render(
    <TextInput name="text-input" />
  )

  expect(getByRole('textbox')).toHaveAttribute('type', 'text')

  const placeholder = 'My Number'
  rerender(
    <TextInput type="number" name="number-input" placeholder={placeholder} />
  )

  expect(getByPlaceholderText(placeholder)).toHaveAttribute('type', 'number')
})

test('text input should render a textarea when appropriate', () => {
  const placeholder = 'placeholder'
  const { container } = render(
    <TextInput
      name="multirow"
      multiline={true}
      rows={2}
      placeholder={placeholder}
    />
  )

  expect(container.querySelector('input')).not.toBeInTheDocument()
  expect(container.querySelector('textarea')).toHaveAttribute('rows', '2')
})

test('text input value changes with input', () => {
  render(<FormGroup label="input" input={<TextInput name="input" />} />)
  // This should fail for now
  expect(screen.getByRole('textbox', { name: 'input' })).toHaveValue('foo')
})

describe('form group', () => {
  test('should indicate error', () => {
    render(
      <FormGroup
        error
        helperText="error"
        label="error"
        input={<TextInput name="input" />}
      />
    )
    expect(screen.getByRole('textbox', { name: 'input' })).toBeInvalid()
    expect(screen.getByRole('note')).toHaveText('error')
  })
})

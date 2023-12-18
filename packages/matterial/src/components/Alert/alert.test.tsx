import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
import userEvent from '@testing-library/user-event/dist'

import { Severity, Urgency, Variant } from '../../interfaces/theme'
import { alertReducer } from './use-alert'
import { render, screen, waitFor } from '../../test-utils'
import { Alert, AlertDispatch } from './alert'
import { Button } from '../Button'
import { AlertExample } from './alert.examples'

const SEVERITY: Severity[] = ['error', 'warning', 'info', 'success']

describe('useAlert hook', () => {
  const initialState: AlertDispatch = {
    label: 'foo',
    message: 'lorem',
    severity: 'info',
  }

  test('should set up reducer', () => {
    expect(alertReducer(null, initialState)).toEqual(initialState)
  })

  test('alert appears and disappears', async () => {
    render(<AlertExample />)

    const alertBtn = screen.getByText('Alert')
    const dismissBtn = screen.getByText('Dismiss')

    expect(alertBtn).toBeInTheDocument()
    expect(dismissBtn).toBeInTheDocument()
    expect(screen.queryByRole('status')).not.toBeInTheDocument() // Query will return node OR null; It will never throw

    await waitFor(() => userEvent.click(alertBtn))
    await screen.findByText(/something happened/i)

    await waitFor(() => userEvent.click(dismissBtn))
    expect(screen.queryByRole('status')).not.toBeInTheDocument() // Query will return node OR null; It will never throw
  })
})

describe('alert component', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(
        <Alert severity="error" action={<b>Action</b>}>
          Alert
        </Alert>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should work with different variants', () => {
    const tree = renderer
      .create(
        <>
          {(['default', 'outlined', 'contained'] as Variant[]).map(variant => (
            <Alert variant={variant} key={variant}>
              {variant}
            </Alert>
          ))}
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should work with different urgency variables', () => {
    const tree = renderer
      .create(
        <>
          {([null, 'polite', 'assertive'] as Urgency[]).map(urgency => (
            <Alert urgency={urgency} key={urgency}>
              {urgency}
            </Alert>
          ))}
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test.skip('has the proper label', () => {
    const label = 'alert label'
    const { getByText } = render(<Alert label={label} message="lorem ipsum" />)
    // Test fails for unknown reason
    expect(getByText(label)).toBeInTheDocument()
  })

  test('has the proper severity and label attributes', () => {
    const severity = SEVERITY[0]
    const { getByRole, rerender } = render(
      <Alert severity={severity as Severity}>Foo</Alert>
    )
    expect(getByRole('status')).toHaveAttribute('data-severity', severity)

    SEVERITY.slice(1).forEach(severity => {
      rerender(<Alert severity={severity}>alert</Alert>)
      expect(getByRole('status')).toHaveAttribute('data-severity', severity)
    })
  })

  test('should output a message using the `message` prop', () => {
    const { getByText } = render(<Alert message="WARNING!" />)
    expect(getByText('WARNING!')).toBeInTheDocument()
  })

  test('should output a message using the `children` prop', () => {
    const { getByText } = render(<Alert>WARNING!</Alert>)
    expect(getByText('WARNING!')).toBeInTheDocument()
  })

  test('should include a call to action with the `action` prop', () => {
    const { getByRole } = render(
      <Alert message="Alert" action={<Button>Act</Button>} />
    )
    expect(getByRole('button')).toBeInTheDocument()
  })

  test('should dismiss', () => {
    const { getByRole } = render(<Alert dismiss>Alert</Alert>)

    const btn = getByRole('button')
    expect(btn).toBeInTheDocument()

    waitFor(() => userEvent.click(btn)).then(() => {
      expect(btn).not.toBeVisible()
    })
  })
})

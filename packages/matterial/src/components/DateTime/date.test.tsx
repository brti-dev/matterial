import '@testing-library/jest-dom'

import { render, screen } from '../../../../../test-utils'
import { DateTime } from '.'

describe('DateTime component', () => {
  test('takes string as input', () => {
    render(<DateTime date="1995-12-17" />)
    expect(screen.getByText(/1995/)).toBeInTheDocument()
  })

  test('takes number as input', () => {
    render(<DateTime date={628021800000} />)
    expect(screen.getByText(/1989/)).toBeInTheDocument()
  })

  test('takes Date object as input', () => {
    let birthday = new Date(1999, 11, 31) // Month is 0-indexed
    render(<DateTime date={birthday} />)
    expect(screen.getByText(/dec/i)).toBeInTheDocument()
  })
})

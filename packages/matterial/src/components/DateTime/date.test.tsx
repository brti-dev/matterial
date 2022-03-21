import '@testing-library/jest-dom'

import { render, screen } from '../../../test-utils'
import DateTime from '.'

describe('DateTime component', () => {
  test('takes string as input', () => {
    render(<DateTime date="1995-12-17" />)
    expect(screen.getByRole('time')).toHaveTextContent(/2000/)
  })

  test('takes number as input', () => {
    render(<DateTime date={628021800000} />)
    expect(screen.getByRole('time')).toHaveTextContent(/1989/)
  })

  test('takes Date object as input', () => {
    let birthday = new Date(1999, 11, 31)
    render(<DateTime date={birthday} />)
    expect(screen.getByRole('time')).toHaveTextContent(/1995/)
  })
})

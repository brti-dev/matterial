import '@testing-library/jest-dom'
import renderer from 'react-test-renderer'
// import userEvent from '@testing-library/user-event'

// import { render, screen } from '../../../test-utils'
import Loader from './loader'

describe('loader', () => {
  test('should render sizes correctly', () => {
    const tree = renderer
      .create(
        <>
          <Loader />
          <Loader size={50} />
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render colors correctly', () => {
    const tree = renderer
      .create(
        <>
          <Loader color="primary" />
          <Loader color="accent-1" />
          <Loader color="salmon" />
        </>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

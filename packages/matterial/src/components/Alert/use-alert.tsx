import { useCallback, useReducer } from 'react'

import Alert, { AlertDispatch } from 'components/Alert'

export function reducer(
  _: /* state */ null | AlertDispatch,
  action?: null | string | AlertDispatch
): null | AlertDispatch {
  if (!action) {
    return { message: null }
  }

  if (typeof action === 'string') {
    return { message: action }
  }

  return action
}

/**
 * Hook to manage alert state.
 *
 * @param initialState Initial state; If true-ish, the alert will display immediately
 *
 * @returns {JSX.Element} Alert component to render
 * @returns {function} Function to set alert message
 */
export function useAlert(
  initialState?: string | AlertDispatch
): [React.ComponentType, any] {
  const [alert, setAlert] = useReducer(reducer, reducer(null, initialState))

  const component = useCallback(() => {
    if (!alert?.message) return null

    return <Alert {...{ ...alert }} />
  }, [alert])

  return [component, setAlert]
}

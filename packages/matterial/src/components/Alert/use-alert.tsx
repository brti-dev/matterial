import * as React from 'react'

import { Alert, AlertDispatch } from './alert'

export function alertReducer(
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
): [() => JSX.Element, any] {
  const [alert, setAlert] = React.useReducer(
    alertReducer,
    alertReducer(null, initialState)
  )

  const component = React.useCallback(() => {
    if (!alert?.message) return <></>

    return <Alert {...{ ...alert }} />
  }, [alert])

  return [component, setAlert]
}

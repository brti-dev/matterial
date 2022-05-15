import * as React from 'react'

export function useDialog(initialState: boolean = false): {
  active: boolean
  open: () => void
  close: () => void
} {
  const [active, setActive] = React.useState(initialState)
  const open = () => setActive(true)
  const close = () => setActive(false)

  return { active, open, close }
}

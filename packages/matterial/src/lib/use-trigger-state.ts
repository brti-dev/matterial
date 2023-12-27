import * as React from 'react'

type TriggerState = {
  active: boolean
  open: () => void
  close: () => void
}

function useTriggerState(initialState: boolean = false): TriggerState {
  const [active, setActive] = React.useState(initialState)
  const open = () => setActive(true)
  const close = () => setActive(false)

  return { active, open, close }
}

export type { TriggerState }
export default useTriggerState

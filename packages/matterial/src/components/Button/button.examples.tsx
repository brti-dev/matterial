import { useState } from 'react'
import { Button } from './button'

export function LoadingButtonExample() {
  const [loading, setLoading] = useState(false)

  const toggleLoading = () => {
    if (!loading) {
      setTimeout(() => setLoading(false), 2000)
    }

    setLoading(!loading)
  }

  return (
    <Button loading={loading} onClick={() => toggleLoading()}>
      Click Me
    </Button>
  )
}

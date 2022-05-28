import * as React from 'react'
import { Button } from './button'

export function LoadingButtonExample() {
  const [loading, setLoading] = React.useState(false)

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

export function OverloadedButtonExample() {
  const Foo = ({ foo }: { foo: string }) => <button data-foo={foo}>foo</button>

  return (
    <Button as={Foo} foo="foo">
      button
    </Button>
  )
}

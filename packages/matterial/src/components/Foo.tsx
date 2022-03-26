import React from 'react'

const Foo: React.FC<{ foo?: string }> = ({ foo = 'foo' }) => {
  return <b>{foo}</b>
}

export default Foo

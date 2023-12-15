import React from 'react'
import { Button } from '../Button'
import { Container } from '../Container'
import { Tooltip } from '../Tooltip'
import { useAlert } from '../Alert'
import * as Icons from './icon'
import useClipboardCopy from '../../lib/use-clipboard-copy'

export function AllIcons() {
  const [copied, copy] = useClipboardCopy()
  const [Alert, setAlert] = useAlert()

  React.useEffect(() => {
    if (copied) {
      setAlert({ severity: 'info', message: 'Copied to clipboard' })
      setTimeout(() => setAlert(), 1000)
    }
  }, [copied])

  return (
    <Container row style={{ position: 'relative' }}>
      {copied && (
        <div
          style={{
            flex: '0 0 100%',
            position: 'absolute',
          }}
        >
          <Alert />
        </div>
      )}
      {Object.keys(Icons).map(icon => (
        <Tooltip key={icon} label={icon}>
          <Button size="large" shape="circle" onClick={() => copy(icon)}>
            {/* @ts-ignore */}
            {React.createElement(Icons[icon], { size: 40 })}
          </Button>
        </Tooltip>
      ))}
    </Container>
  )
}

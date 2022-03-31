import { useAlert } from './use-alert'
import { Button } from '../Button'

export function AlertExample() {
  const [AlertComponent, setAlert] = useAlert()

  return (
    <>
      <AlertComponent />
      <div style={{ display: 'flex', gap: '1em', margin: '1em 0' }}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => setAlert('Something happened')}
        >
          Alert
        </Button>
        <Button
          variant="outlined"
          color="warning"
          onClick={() => setAlert({ message: 'Danger!', severity: 'warning' })}
        >
          Danger
        </Button>
        <Button variant="outlined" onClick={() => setAlert(null)}>
          Dismiss
        </Button>
      </div>
    </>
  )
}

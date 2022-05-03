import { Alert, Button } from '../../../l/dist'

export default function TestDist() {
  return (
    <>
      <Alert severity="success">The package has loaded</Alert>
      <Button variant="outlined" color="salmon">
        press me
      </Button>
    </>
  )
}

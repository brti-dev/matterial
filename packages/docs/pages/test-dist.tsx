import { Alert, Button } from '../../../bundle/dist'

export default function TestDist() {
  return (
    <>
      <Alert severity="success" dismiss>
        The package has loaded
      </Alert>
      <Button variant="outlined" color="salmon">
        press me
      </Button>
    </>
  )
}

import { Page, Alert, Button } from '../../../matterial/dist'

export default function TestDistPage() {
  return (
    <Page>
      <Alert severity="success" dismiss>
        The package has loaded
      </Alert>
      <Button variant="outlined" color="salmon">
        press me
      </Button>
    </Page>
  )
}

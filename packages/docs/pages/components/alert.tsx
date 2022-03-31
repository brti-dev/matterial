import Link from 'next/link'
import { Alert, AlertExample, Button } from '../../../matterial'

import Code, { CodeBlock } from 'components/Code'
import Layout from 'components/Layout'

export default function AvatarComponent() {
  return (
    <Layout>
      <h1>Alert</h1>
      <p>Error, warning, and other important notes</p>

      <Alert severity="error" label="Critical Error" type="assertive">
        Something happened
      </Alert>
      <Alert
        severity="warning"
        message="Danger!"
        action={
          <Button variant="contained" color="warning">
            Take me to safety
          </Button>
        }
      />
      <Alert severity="success" label="OK" message="Well done" />
      <Alert severity="info" action={<Link href="/">Lorem</Link>}>
        Velit laborum quis excepteur laboris commodo fugiat incididunt eiusmod
        cillum culpa sit id ipsum ex.
      </Alert>
      <Alert dismiss>
        Velit do velit est cillum reprehenderit cillum aliqua quis officia velit
        deserunt.
      </Alert>

      <h2>Use Alert</h2>
      <p>A React Hook to access an alert state and component.</p>

      <h2>Usage</h2>
      <CodeBlock>
        <Code>{`function App() {
  const [AlertComponent, setAlert] = useAlert()

  return (
    <AlertComponent />
    <button onClick={() => setAlert('Something happened')}>Alert</button>
    <button onClick={() => setAlert({ message:'Danger!', severity: 'warning' })}>Danger</button>
    <button onClick={() => setAlert(null)}>Reset</button>
  )
}`}</Code>
      </CodeBlock>
      <AlertExample />
    </Layout>
  )
}

import * as React from 'react'
import { Button, Checkbox, Container } from 'matterial'

import 'matterial/styles/global.scss'

function App() {
  const [checked, setChecked] = React.useState(false)

  return (
    <div>
      <Container row>
        <Button color="primary" variant="contained">
          press me
        </Button>
        <Button color="secondary" variant="contained">
          press me
        </Button>
      </Container>
      <Container row>
        <Checkbox
          name="foo"
          checked={checked}
          onClick={() => setChecked(!!checked)}
        >
          Foo
        </Checkbox>
      </Container>
    </div>
  )
}

export default App

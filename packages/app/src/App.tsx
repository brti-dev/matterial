import * as React from 'react'
import { Button, Container } from 'matterial'

import 'matterial/styles/global.scss'

function App() {
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
    </div>
  )
}

export default App

import { Page, Link, Button, Container, Icon } from '../../matterial/src'
import Heading from 'components/Heading'

export default function Home() {
  return (
    <Page fullWidth>
      <Heading />
      <p>
        A minimalist design system by{' '}
        <Link href="https://brti.dev">Matt Berti</Link>. Not to be confused with{' '}
        <Link href="https://mui.com/">Material UI</Link>.
      </p>
      <pre style={{ margin: '2em 0' }}>
        <code>
          <span style={{ color: 'var(--color-accent-7)' }}>
            <span style={{ color: 'var(--color-accent-4)' }}>$</span> npm i{' '}
            matterial
          </span>
        </code>
      </pre>
      <Container row>
        <Button
          to="/setup"
          variant="contained"
          color="primary"
          append={<Icon icon="ArrowRight" />}
        >
          Get Started
        </Button>
        <Button
          to="https://github.com/dr-spaceman/matterial"
          variant="contained"
        >
          Source Code
        </Button>
      </Container>
    </Page>
  )
}

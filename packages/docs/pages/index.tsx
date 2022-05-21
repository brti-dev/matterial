import Head from 'next/head'

import { Layout, Header, Heading, Main } from 'components/Layout'
import { Link, Button, Container, ArrowRightIcon } from '../../matterial/src'

export default function Home() {
  return (
    <Layout>
      <Header title="Matterial UI -- A design system by Matt Berti">
        <Head>
          <meta
            name="description"
            content="A design system by Matt Berti, built using React and Typescript"
          />
        </Head>
        <Heading />
      </Header>
      <Main>
        <p>
          A minimalist design system by{' '}
          <Link href="https://brti.dev">Matt Berti</Link>. Not to be confused
          with <Link href="https://mui.com/">Material UI</Link>.
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
            append={<ArrowRightIcon />}
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
      </Main>
    </Layout>
  )
}

import { Button, Link } from '../../../matterial/src/components'
import NextLink from 'next/link'

import Layout from 'components/Layout'
import { COLORS } from '../../const'
import Code, { CodeBlock } from 'components/Code'

const flex = { display: 'flex', gap: '1em' }

export default function LinkComponent() {
  return (
    <Layout>
      <h1>Link</h1>
      <p>Hyperlinks between pages.</p>
      <h2>Link Props</h2>
      <h3>Color</h3>
      <p>
        <code>{`color = string | ${[...COLORS]
          .map(c => `"${c}"`)
          .join(' | ')}`}</code>
      </p>
      <div style={{ ...flex, flexDirection: 'column' }}>
        <Link href="#" color="primary">
          Primary (thematic)
        </Link>
        <Link href="#" color="secondary">
          Secondary (thematic)
        </Link>
        <Link href="#" color="hotpink">
          Hotpink
        </Link>
      </div>

      <h3>Unstyled</h3>
      <p>
        <code>{`unstyled = boolean`}</code>
      </p>
      <Link href="#" unstyled>
        Unstyled link
      </Link>

      <h2>Button Link</h2>
      <p>
        <Code>{'to = string'}</Code>
      </p>
      <p>Create a button-like link.</p>
      <div style={flex}>
        <Button to="#" color="primary">
          Home
        </Button>
        <Button to="#" variant="contained" color="primary">
          Home
        </Button>
      </div>
      <CodeBlock>
        <Code>{`<Button" to="/">Home</Code>`}</Code>
      </CodeBlock>

      <h2>NextLink</h2>
      <p>
        Wrap <code>Link</code> components in Next.js <code>Link</code>{' '}
        component.
      </p>
      <CodeBlock>
        <Code>{`import NextLink from 'next/link'

const App = () => <NextLink href="/"><Link>Foo</Link></NextLink>`}</Code>
      </CodeBlock>
    </Layout>
  )
}

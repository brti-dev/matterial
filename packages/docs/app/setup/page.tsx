import Link from 'next/link'
import { Layout, Article, NavMap } from '../../../matterial/src'
import Heading from 'components/Heading'
import metadata_ from 'lib/metadata'
import { Mdx } from 'components/Mdx'
import { compileMdx, getDocsFiles } from 'lib/mdx'

const source = `To begin, install the package.

\`npm i matterial\`

Use Matterial's \`<Html>\` and \`<Body>\` components in your layout:

\`\`\`jsx
// app/layout.tsx

import { Html, Body } from 'matterial'
import 'src/styles/main.scss' // Your additional styles

export const metadata = {} // Your metadata

export default function Layout({ children }) {
  return (
    <Html>
      <Body>{children}</Body>
    </Html>
  )
}
\`\`\`

Use Matterial's \`<Layout>\` component in your page:

\`\`\`jsx
// app/page.tsx

import { Layout, NavMap } from 'matterial'

export default function Page() {
  const navMap: NavMap = {
    Foo: [<Link href="/bar">Bar</Link>, <Link href="/baz">Baz</Link>],
    _hr: '',
    Lorem: [<Link href="/ipsum">Ipsum</Link>],
  }
  return (
    <Layout nav={navMap}>
      Hello, world
    </Layout>
  )
}
\`\`\`

Import components to use them in your app:

\`\`\`jsx
// src/components/my-component.tsx

import { Button, Container } from 'matterial'

export default function Page() {
  return (
    <Container row>
      <Button variant="contained" color="primary">Foo</Button>
      <Button variant="contained" color="secondary">Bar</Button>
    </Container>
  )
}
\`\`\``

export const metadata = metadata_({ title: 'Matterial UI -- Getting Started' })

export default async function SetupPage() {
  const navMap: NavMap = {
    _heading: <Heading />,
    _: [<Link href="/ipsum">Ipsum</Link>],
    Foo: [<Link href="/bar">Bar</Link>, <Link href="/baz">Baz</Link>],
    _hr: '',
    Lorem: [<Link href="/ipsum">Ipsum</Link>],
  }

  const { compiledSource } = await compileMdx(source)
  // const components = getDocsFiles().map(fileName =>
  //   fileName.replace('.docs.mdx', '')
  // )

  return (
    <Layout nav={navMap}>
      <Article title="Setup">
        <Mdx source={compiledSource} />
      </Article>
    </Layout>
  )
}

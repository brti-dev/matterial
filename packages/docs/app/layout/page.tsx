import { Page, Article } from '../../../matterial/src'
import metadata_ from 'utils/metadata'
import { Mdx } from 'components/Mdx'
import { compileMdx } from 'utils/mdx'
import navMap from 'lib/nav-map'

const source = `__Configure page layout, including navigation, in a [Next.js page](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)__

Before configuring page, ensure you have [set up your layout](/setup) (that which wraps page).

A basic layout structure is as follows:

\`\`\`jsx
// app/page.tsx

import { Page } from 'matterial'

export default function RootPage() {
  return (
    <Page>
      Hello, world
    </Page>
  )
}
\`\`\`

Navigation can be rendered by supplying a \`nav\` prop that is either

1. a NavMap object
1. a JSX component

# Navigation as a NavMap object

A NavMap follows a schema like so:

\`\`\`typescript
{
  /** Identify title for heading level-1 */
  _title?: string

  /** Heading component */
  _heading?: React.ReactElement

  /** No heading for this group */
  _?: React.ReactElement[]

  /** Insert a horizontal rule */
  _hr?: string
} & {
  /** Sub-nav with a sub-heading as the key */
  [key: string]: React.ReactElement[] | 
  
  /** 
  React.ReactElement | string
}
\`\`\`

For example:

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

## Navigation as JSX Component

For more customization, provide a JSX component wrapped in Matterial's \`<Nav>\` component:

\`\`\`jsx
// app/page.tsx

import Link from 'next/link'
import { Layout, Nav } from 'matterial'

function PageNav() {
  <Nav>
    <h1>My App</h1>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </ul>
  </Nav>
}

export default function Page() {
  return (
    <Layout nav={<PageNav>}>
      Hello, world
    </Layout>
  )
}
\`\`\``

export const metadata = metadata_({ title: 'Matterial UI -- Getting Started' })

export default async function SetupPage() {
  const { compiledSource } = await compileMdx(source)

  return (
    <Page nav={navMap}>
      <Article title="Page Layout">
        <Mdx source={compiledSource} />
      </Article>
    </Page>
  )
}

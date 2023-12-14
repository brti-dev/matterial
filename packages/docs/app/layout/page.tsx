import { Page, Article, Footer } from '../../../matterial/src'
import generatePageData from 'utils/generate-page-data'
import { compileMdx } from 'utils/mdx'
import navMap from 'lib/nav-map'
import { Mdx } from 'components/Mdx'

export const { metadata } = generatePageData({
  metadata: { title: 'Matterial UI -- Getting Started' },
})

const source = `__Configure page layout, including navigation, in a [Next.js page](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#pages)__

Before configuring page, ensure you have set up your layout (that which wraps page). The following example

1. identifies the app title
1. introduces a custom hyperlink wrapper into the app's context scheme
1. sets the app language to French

\`\`\`jsx
// app/layout.tsx

import { Html, Body } from 'matterial'

// Optional custom link
function Link = ({ href, title }) => <a href={href} class="my-link">{title}</a>

const config = {
  appTitle = 'My App',
  // You may wish to use pass framework's \`Link\` component instead (eg, Next.js Link)
  linkComponent: Link,
}

export default function Layout({ children }) {
  return (
    <Html config={config} lang="fr">
      <Body>{children}</Body>
    </Html>
  )
}
\`\`\`

Now that the app wrapper set up, it's time to structure page layouts. A basic structure is as follows:

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
type NavMap = {
  /** Heading component */
  _heading?: ReactElement

  /** Sub-nav with a sub-heading as the key */
  [key: string]: LinkList

  /** Render a link list with no sub-heading */
  _?: LinkList

  /** Insert a horizontal rule */
  _hr?: ''
}

type Link = {
  href: string
  title: string
  isActive?: boolean
}

type LinkList = Array<Link | ReactElement>
\`\`\`

For example:

\`\`\`jsx
// app/page.tsx

import { Layout } from 'matterial'

export default function Page() {
  const navMap = {
    Foo: [{ href: '/bar' title: 'Bar', isActive: true }, { href: '/baz', title: 'Baz' }],
    _hr: '',
    Lorem: [<Link href="/ipsum">Ipsum</Link>, <Link href="/ipsum">Ipsum</Link>],
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
  return (
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
  )
}

export default function Page() {
  return (
    <Layout nav={<PageNav>}>
      Hello, world
    </Layout>
  )
}
\`\`\``

export default async function SetupPage() {
  const { compiledSource } = await compileMdx(source)

  return (
    <Page nav={navMap}>
      <Article title="Page Layout">
        <Mdx source={compiledSource} />
      </Article>
      <Footer />
    </Page>
  )
}

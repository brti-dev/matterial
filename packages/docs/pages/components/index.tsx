import NextLink from 'next/link'
import { Link } from 'matterial'

import Layout from 'components/Layout'

const COMPONENTS = [
  'alert',
  'avatar',
  'badge',
  'button',
  'checkbutton',
  'dialog',
  'form',
  'link',
  'loader',
  'menu',
  'tooltip',
]

export default function Foo() {
  return (
    <Layout>
      <h1>UI Components</h1>
      <ul>
        {COMPONENTS.map(component => (
          <li key={component}>
            <NextLink href={`/components/${component}`} passHref>
              <Link>{component[0].toUpperCase() + component.substring(1)}</Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

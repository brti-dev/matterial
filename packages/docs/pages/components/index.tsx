import Link from 'next/link'

import Layout from 'components/Layout'

const COMPONENTS = [
  'alert',
  'avatar',
  'badge',
  'button',
  'checkbutton',
  'dialog',
  'form',
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
            <Link href={`/components/${component}`}>
              {component[0].toUpperCase() + component.substring(1)}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

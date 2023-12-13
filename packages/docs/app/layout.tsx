import { Html, Body } from '../../matterial/src'
import Link from 'next/link'
import { RequiredChildren } from 'interfaces/children'
import metadata_ from 'utils/metadata'

import '../src/styles/main.scss'

type RootLayoutProps = RequiredChildren

export const metadata = metadata_()

const config = {
  linkComponent: Link,
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Html config={config}>
      <Body>{children}</Body>
    </Html>
  )
}

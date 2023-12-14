import { Html, Body } from '../../matterial/src'
import Link from 'next/link'
import { RequiredChildren } from 'interfaces/children'
import generatePageData from 'utils/generate-page-data'

import '../src/styles/main.scss'

type RootLayoutProps = RequiredChildren

export const { metadata, viewport } = generatePageData()

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

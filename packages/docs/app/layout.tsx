import { Html, Body } from 'matterial'
import { RequiredChildren } from 'interfaces/children'
import metadata_ from 'lib/metadata'

import '../src/styles/main.scss'

type RootLayoutProps = RequiredChildren

export const metadata = metadata_()

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Html>
      <Body>{children}</Body>
    </Html>
  )
}

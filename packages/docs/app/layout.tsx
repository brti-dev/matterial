import type { Metadata } from 'next'
import { RequiredChildren } from 'interfaces/children'
import { Html, Body } from 'matterial'

import 'normalize.css'
import '../src/styles/custom.scss'

type RootLayoutProps = RequiredChildren

export const metadata: Metadata = {
  title: 'Matterial UI -- A design system by Matt Berti',
  description:
    'A design system by Matt Berti, built using React and Typescript',
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Html>
      <Body>{children}</Body>
    </Html>
  )
}

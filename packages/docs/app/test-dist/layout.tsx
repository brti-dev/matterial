import { Html, Body } from '../../../matterial/dist'
import { RequiredChildren } from '../../src/interfaces/children'
import generatePageData from '../../src/utils/generate-page-data'

import '../../src/styles/main.scss'

type RootLayoutProps = RequiredChildren

export const { metadata, viewport } = generatePageData()

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <Html>
      <Body>{children}</Body>
    </Html>
  )
}

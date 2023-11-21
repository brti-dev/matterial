import type { OptionalChildren } from '../interfaces/children'

const TITLE = 'Matterial UI'

export default function Heading({ children = TITLE }: OptionalChildren) {
  return <h1 id="heading_h1">{children}</h1>
}

import Link from 'next/link'
import Heading from 'components/Heading'
import { NavMap } from 'matterial/src'
import { capitalize, unKebabCase } from 'utils/string'
import { getDocsFiles } from 'utils/mdx'

const components = getDocsFiles().map(fileName =>
  fileName.replace('.docs.mdx', '')
)

const navMap: NavMap = {
  _heading: <Heading />,
  _: [
    <Link href="/">Homepage</Link>,
    <Link href="/setup">Setup</Link>,
    <Link href="/layout">Layout</Link>,
  ],
  Components: components.map(slug => (
    <Link href={`/components/${slug}`} legacyBehavior>
      {capitalize(unKebabCase(slug))}
    </Link>
  )),
}

export default navMap

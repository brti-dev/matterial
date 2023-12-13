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
    { href: '/', title: 'Homepage' },
    { href: '/setup', title: 'Setup' },
    { href: '/layout', title: 'Page' },
  ],
  Components: components.map(slug => ({
    href: `/components/${slug}`,
    title: capitalize(unKebabCase(slug)),
  })),
}

export default navMap

import NextLink from 'next/link'
import { Link } from 'matterial'

import { getDocsFiles } from 'lib/mdx'
import { capitalize } from 'lib/string'
import Layout from 'components/Layout'

type Props = {
  slugs: string[]
}

export default function Foo({ slugs }: Props) {
  return (
    <Layout>
      <h1>UI Components</h1>
      <ul>
        {slugs.map(slug => (
          <li key={slug}>
            <NextLink href={`/components/${slug}`} passHref>
              <Link>{capitalize(slug)}</Link>
            </NextLink>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(): Promise<{ props: Props }> {
  const slugs = getDocsFiles().map(file => file.replace('.docs.mdx', ''))

  return { props: { slugs } }
}

import { Page, Link, Article, Footer } from '../../../matterial/src'

import { getDocsFiles } from 'utils/mdx'
import { capitalize } from 'utils/string'
import generateMetadata from 'utils/generate-page-data'

export const { metadata } = generateMetadata({
  metadata: { title: 'Matterial UI -- Components API' },
})

export default function ComponentsPage({
  params: { slug },
}: {
  params: { slug: string }
}) {
  if (!slug) {
    const slugs = getDocsFiles().map(file => file.replace('.docs.mdx', ''))

    return (
      <Page>
        <Article title="UI Components">
          <ul>
            {slugs.map(slug => (
              <li key={slug}>
                <Link href={`/components/${slug}`}>{capitalize(slug)}</Link>
              </li>
            ))}
          </ul>
        </Article>
        <Footer />
      </Page>
    )
  }

  const thisSlug = slug[0]

  return <>{thisSlug}</>
}

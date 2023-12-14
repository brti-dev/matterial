import { Alert, Article, Link, Page, Footer } from '../../../../matterial/src'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'

import { capitalize, toPascalCase } from 'utils/string'
import { getDocSource, getDocsFiles, compileMdx } from 'utils/mdx'
import { Mdx } from 'components/Mdx'
import navMap from 'lib/nav-map'
import metadata_ from 'utils/metadata'

type Props = {
  params: { slug: string }
}

export const dynamicParams = false // 404 on slug not generated
export const dynamic = 'force-static' // All pages are static
export async function generateStaticParams() {
  const paths = getDocsFiles().map(file => ({
    slug: file.replace('.docs.mdx', ''),
  }))

  return paths
}

export async function generateMetadata({ params: { slug } }: Props) {
  return metadata_({
    title: `Matterial UI Components -- ${capitalize(slug)}`,
    description: `${capitalize(
      slug
    )} React component API; How to use ${slug} to build an accessible, responsive UI.`,
  })
}

export default async function ComponentPage({ params: { slug } }: Props) {
  const sourceHref = `https://github.com/dr-spaceman/matterial/tree/main/packages/matterial/src/components/${toPascalCase(
    slug
  )}`
  const source = getDocSource(slug)
  const { compiledSource: mdxSource, frontmatter } = await compileMdx(source)

  return (
    <Page nav={navMap}>
      <Article
        title={frontmatter.name || capitalize(slug)}
        description={frontmatter.description}
      >
        {!mdxSource ? (
          <Alert severity="error">
            There was an problem fetching the document file for this component.
          </Alert>
        ) : (
          <Mdx source={mdxSource} />
        )}
      </Article>
      <Footer>
        <Link href={sourceHref} className="sourcelink">
          <GithubIcon />
          <span>Source Code</span>
        </Link>
      </Footer>
    </Page>
  )
}

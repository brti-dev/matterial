import { GetStaticPaths, GetStaticProps } from 'next'

import { capitalize } from 'lib/string'
import { Metadata, getDocSource, getDocsFiles, compileMdx } from 'lib/mdx'
import Layout from 'components/Layout'
import { Mdx } from 'components/Mdx'
import { Alert, Article } from '../../../matterial/src'

type Props = {
  mdxSource: string
  metadata: any & Metadata
  slug: string
}

export default function Doc({
  mdxSource,
  metadata = {},
  slug,
}: Props): JSX.Element {
  if (!mdxSource) {
    return (
      <Layout>
        <h1>{capitalize(slug)}</h1>
        <Alert severity="error">
          There was an problem fetching the document file for this component.
        </Alert>
      </Layout>
    )
  }

  return (
    <Layout>
      <Article
        title={metadata.name || capitalize(slug)}
        description={metadata.description || 'A nice UI component'}
      >
        <Mdx source={mdxSource} />
      </Article>
    </Layout>
  )
}

export const getStaticProps = async ({
  params: { slug },
}): Promise<{ props: Props }> => {
  try {
    const source = getDocSource(slug)
    // const metadata = getMetadata(slug)
    const { compiledSource, frontmatter } = await compileMdx(source)

    // console.log('gsp', slug, source)
    // console.log('mdx result', result)

    return {
      props: {
        mdxSource: compiledSource,
        metadata: frontmatter,
        slug,
      },
    }
  } catch (err) {
    console.error(err)

    return { props: { mdxSource: '', metadata: {}, slug } }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getDocsFiles().map(file => ({
    params: { slug: file.replace('.docs.mdx', '') },
  }))

  return {
    paths,
    fallback: false,
  }
}

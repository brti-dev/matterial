import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'

import { capitalize } from 'lib/string'
import { Metadata, getDocSource, getDocsFiles } from 'lib/mdx'
import Layout from 'components/Layout'
import { Mdx } from 'components/Mdx'
import { Alert } from '../../../matterial/src'

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
      <h1>{metadata.name || capitalize(slug)}</h1>
      <p>{metadata.description || 'A nice UI component'}</p>
      <Mdx source={mdxSource} />
    </Layout>
  )
}

export const getStaticProps = async ({
  params: { slug },
}): Promise<{ props: Props }> => {
  try {
    const source = getDocSource(slug)

    // console.log('gsp', slug, file, source)

    const result = await serialize(source, {
      parseFrontmatter: true,
    })

    // console.log('mdx result', result)

    return {
      props: {
        mdxSource: result.compiledSource,
        metadata: result.frontmatter,
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

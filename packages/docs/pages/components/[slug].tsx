import { Alert, Article, Link } from '../../../matterial/src'
import { GetStaticPaths } from 'next'
import { AiFillGithub as GithubIcon } from 'react-icons/ai'

import { capitalize, toPascalCase } from 'lib/string'
import { Metadata, getDocSource, getDocsFiles, compileMdx } from 'lib/mdx'
import { Layout, Header, Navigation, Main, Footer } from 'components/Layout'
import { Mdx } from 'components/Mdx'

type Props = {
  components: string[]
  mdxSource: string
  metadata: any & Metadata
  slug: string
}

export default function Doc({
  components,
  mdxSource,
  metadata = {},
  slug,
}: Props): JSX.Element {
  const sourceHref = `https://github.com/dr-spaceman/matterial/tree/main/packages/matterial/src/components/${toPascalCase(
    slug
  )}`
  return (
    <Layout>
      <Header title={`Matterial UI Components -- ${capitalize(slug)}`} />
      <Navigation components={components} />
      <Main>
        <Article
          title={metadata.name || capitalize(slug)}
          description={metadata.description}
        >
          {!mdxSource ? (
            <Alert severity="error">
              There was an problem fetching the document file for this
              component.
            </Alert>
          ) : (
            <Mdx source={mdxSource} />
          )}
        </Article>
      </Main>
      <Footer>
        <Link href={sourceHref} className="sourcelink">
          <GithubIcon />
          <span>Source Code</span>
        </Link>
      </Footer>
    </Layout>
  )
}

export const getStaticProps = async ({
  params: { slug },
}): Promise<{ props: Props }> => {
  const components = getDocsFiles().map(fileName =>
    fileName.replace('.docs.mdx', '')
  )

  try {
    const source = getDocSource(slug)
    // const metadata = getMetadata(slug)
    const { compiledSource, frontmatter } = await compileMdx(source)

    // console.log('gsp', slug, source)
    // console.log('mdx result', result)

    return {
      props: {
        components,
        mdxSource: compiledSource,
        metadata: frontmatter,
        slug,
      },
    }
  } catch (err) {
    console.error(err)

    return { props: { components, mdxSource: '', metadata: {}, slug } }
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

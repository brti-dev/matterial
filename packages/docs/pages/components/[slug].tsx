import fs from 'fs'
import { Alert, Button, Container, Link } from 'matterial'
import { GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import path from 'path'

import Layout from 'components/Layout'
import { capitalize } from 'lib/string'
import { getMetadata, Metadata } from 'lib/mdx'
import * as constants from '../../../matterial/src/const'

const matterial = { Alert, Button, Container, Link }

const DOCS_PATH = path.join(process.cwd())
const SOURCE_PATH = path.join(process.cwd(), '../matterial/src/components')

type Props = {
  mdxSource: MDXRemoteSerializeResult
  metadata: any & Metadata
  slug: string
}

export default function Doc({
  mdxSource,
  metadata = {},
  slug,
}: Props): JSX.Element {
  return (
    <Layout>
      <h1>{metadata.name || capitalize(slug)}</h1>
      <p>{metadata.description}</p>
      <MDXRemote {...mdxSource} scope={constants} components={matterial} />
    </Layout>
  )
}

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<{ props: Props }> => {
  const file = path.join(SOURCE_PATH, capitalize(slug), `${slug}.docs.mdx`)
  const source = fs.readFileSync(file, 'utf-8')
  console.log(slug, file, source)

  const { frontmatter: metadata, ...mdxSource } = await serialize(source, {
    parseFrontmatter: true,
  })
  console.log(metadata, mdxSource)
  return { props: { mdxSource, slug, metadata } }
}

export const getStaticPaths = async (): Promise<{
  paths: Array<{
    params: {
      slug: string
    }
  }>
  fallback: false
}> => {
  return {
    paths: ['alert', 'link'].map(slug => ({ params: { slug: slug } })),
    fallback: false,
  }
  // const paths = componentsFilePaths
  //   .map(path => toKebabCase(path.replace(/\.tsx?$/, '')))
  //   .map(slug => ({ params: { slug } }))

  // console.log({ paths })

  // return {
  //   paths,
  //   fallback: false,
  // }
}

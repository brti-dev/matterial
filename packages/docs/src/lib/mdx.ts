import highlight from 'rehype-highlight'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
// import reactDocgen from 'react-docgen-typescript'
import remarkGfm from 'remark-gfm'

import { toPascalCase } from './string'

export const DOCS_PATH = path.join(process.cwd(), 'docs')
export const SOURCE_PATH = path.join(
  process.cwd(),
  '../matterial/src/components'
)

export type Metadata = {
  displayName: string
  codeFileName: string
  description: string
  slug: string
  props: Array<{
    name: string
    description: string
    type: string
  }>
}

/**
 * Get a doc source as an MDX string
 *
 * @returns {string} MDX source
 */
export function getDocSource(slug: string): string {
  const file = path.join(SOURCE_PATH, toPascalCase(slug), `${slug}.docs.mdx`)

  return fs.readFileSync(file, 'utf-8')
}

/**
 * Returns a list of filenames within the src dir that are *.docs.mdx
 */
export function getDocsFiles(): string[] {
  const docsFileNames: Array<string> = []
  fs.readdirSync(SOURCE_PATH).forEach(file => {
    const filePath = path.join(SOURCE_PATH, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fs.readdirSync(filePath).forEach(file => {
        if (/\.docs\.mdx$/.test(file)) {
          docsFileNames.push(file)
        }
      })
    }
  })

  return docsFileNames
}

// export function getMetadata(slug: string): Metadata {
//   const sourcePath = path.join(SOURCE_PATH, toPascalCase(slug), `${slug}.tsx`)
//   const sourceFile = fs.readFileSync(sourcePath, 'utf-8')
//   const codeFileName = sourcePath.split('/').pop() || ''

//   try {
//     const components = reactDocgen.parse(
//       sourceFile
//       // reactDocgen.resolver.findAllComponentDefinitions,
//       // null,
//       // {
//       //   filename: sourcePath,
//       // }
//     )
//     console.log(components)

//     const { description, displayName, props } =
//       components[components.length - 1]

//     return {
//       description,
//       displayName,
//       codeFileName,
//       slug,
//       props: Object.keys(props || {}).map(key => {
//         return {
//           name: `${key}${props[key].required ? '' : '?'}`,
//           type: '', //props[key].tsType.raw || props[key].tsType.name,
//           description: props[key].description,
//         }
//       }),
//     }
//   } catch (error) {
//     console.error(error)

//     return {
//       codeFileName,
//       slug,
//       description: '',
//       displayName: '',
//       props: [],
//     }
//   }
// }

export async function compileMdx(
  source: string
): Promise<{ compiledSource: string; frontmatter: Record<string, unknown> }> {
  const result = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [highlight],
    },
  })
  const { compiledSource, frontmatter } = result

  return { compiledSource, frontmatter }
}

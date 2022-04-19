import fs from 'fs'
import path from 'path'
// import reactDocgen from 'react-docgen-typescript'

import { toKebabCase, toPascalCase, capitalize } from './string'

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

export function getDocSource(slug: string): string {
  const file = path.join(SOURCE_PATH, toPascalCase(slug), `${slug}.docs.mdx`)

  return fs.readFileSync(file, 'utf-8')
}

export function getDocsFiles(): string[] {
  const docsFileNames: Array<string> = []
  fs.readdirSync(SOURCE_PATH).forEach(file => {
    const filePath = path.join(SOURCE_PATH, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      fs.readdirSync(filePath).forEach(file => {
        if (/\.docs\.mdx/.test(file)) {
          docsFileNames.push(file)
        }
      })
    }
  })

  return docsFileNames
}

import Link from 'next/link'
import { Layout, Article, NavMap } from '../../../matterial/src'
import Heading from 'components/Heading'
import metadata_ from 'lib/metadata'
// import { Layout, Header, Navigation, Main } from 'components/Layout'
// import { Mdx } from 'components/Mdx'
// import { Article } from '../../../matterial/src'
// import { compileMdx, getDocsFiles } from 'lib/mdx'

// const source = `To begin, install the package.

// \`npm i matterial\`

// Import the base styles into your root app component before any custom styles, but after \`normalize.css\` (if using).

// \`\`\`jsx
// import 'normalize.css'
// import 'matterial/styles/main.css'
// import 'styles/custom.scss' // Your custom CSS

// export default function MyApp() {
//   // Mount app
// }
// \`\`\`

// Import the components and use them in your app.

// \`\`\`jsx
// import { Button, Container } from 'matterial'

// export default function Page() {
//   return (
//     <Container row>
//       <Button variant="contained" color="primary">Foo</Button>
//       <Button variant="contained" color="secondary">Bar</Button>
//     </Container>
//   )
// }`

// type Props = { mdxSource: string; components: string[] }

export const metadata = metadata_({ title: 'Matterial UI -- Getting Started' })

export default function SetupPage(/*{ mdxSource }: Props*/) {
  const navMap: NavMap = {
    _heading: <Heading />,
    _: [<Link href="/ipsum">Ipsum</Link>],
    Foo: [<Link href="/bar">Bar</Link>, <Link href="/baz">Baz</Link>],
    _hr: '',
    Lorem: [<Link href="/ipsum">Ipsum</Link>],
  }
  return (
    <Layout nav={navMap}>
      <Article title="Setup">
        hello world
        {/* <Mdx source={mdxSource} /> */}
      </Article>
    </Layout>
  )
}

// export const getStaticProps = async (): Promise<{ props: Props }> => {
//   try {
//     const { compiledSource } = await compileMdx(source)
//     const components = getDocsFiles().map(fileName =>
//       fileName.replace('.docs.mdx', '')
//     )

//     return {
//       props: {
//         mdxSource: compiledSource,
//         components,
//       },
//     }
//   } catch (err) {
//     console.error(err)

//     return { props: { mdxSource: '', components: [] } }
//   }
// }

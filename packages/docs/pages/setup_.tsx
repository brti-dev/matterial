import { Layout, Header, Navigation, Main } from 'components/Layout'
import { Mdx } from 'components/Mdx'
import { Article } from 'matterial/src'
import { compileMdx, getDocsFiles } from 'utils/mdx'

const source = `To begin, install the package.

\`npm i matterial\`

Import the base styles into your root app component before any custom styles, but after \`normalize.css\` (if using).

\`\`\`jsx
import 'normalize.css'
import 'matterial/styles/main.css'
import 'styles/custom.scss' // Your custom CSS

export default function MyApp() {
  // Mount app
}
\`\`\`

Import the components and use them in your app.

\`\`\`jsx
import { Button, Container } from 'matterial'

export default function Page() {
  return (
    <Container row>
      <Button variant="contained" color="primary">Foo</Button>
      <Button variant="contained" color="secondary">Bar</Button>
    </Container>
  )
}`

type Props = { mdxSource: string; components: string[] }

export default function SetupPage({ mdxSource, components }: Props) {
  return (
    <Layout>
      <Header title="Matterial UI -- Getting Started" />
      <Navigation components={components} />
      <Main>
        <Article title="Setup">
          <Mdx source={mdxSource} />
        </Article>
      </Main>
    </Layout>
  )
}

export const getStaticProps = async (): Promise<{ props: Props }> => {
  try {
    const { compiledSource } = await compileMdx(source)
    const components = getDocsFiles().map(fileName =>
      fileName.replace('.docs.mdx', '')
    )

    return {
      props: {
        mdxSource: compiledSource,
        components,
      },
    }
  } catch (err) {
    console.error(err)

    return { props: { mdxSource: '', components: [] } }
  }
}

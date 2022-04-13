import { Button } from 'matterial'

const Layout = (props: any) => (
  <main style={{ backgroundColor: 'salmon' }}>
    {props.children}
    <Button color="primary">Press Me</Button>
  </main>
)

export default function Bar() {
  return (
    <Layout>
      <h2>Bar</h2>
    </Layout>
  )
}

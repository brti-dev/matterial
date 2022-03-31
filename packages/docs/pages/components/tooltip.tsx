import { Tooltip } from 'matterial'

import Code, { CodeBlock } from 'components/Code'
import Layout from 'components/Layout'

export default function TooltipDoc() {
  return (
    <Layout title="Tooltip UI component">
      <h1>Tooltip</h1>
      <h2>Basic Tooltip</h2>
      <Tooltip label="Save">
        <button style={{ fontSize: 25 }}>💾</button>
      </Tooltip>
      <CodeBlock>
        <Code>{`<Tooltip label="Save"><button>💾</button></Tooltip>`}</Code>
      </CodeBlock>
    </Layout>
  )
}

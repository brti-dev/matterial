import { useState } from 'react'
import { Button } from '../../../matterial/src/components'

import { Color } from 'interfaces/theme'
import Layout from 'components/Layout'
import { BiBell as BellIcon } from 'react-icons/bi'
import Code, { CodeBlock } from 'components/Code'
import { COLORS } from '../../const'

const flex: React.CSSProperties = {
  display: 'flex',
  gap: '1em',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
}

export default function ButtonComponent() {
  const [loading, setLoading] = useState(false)

  const toggleLoading = () => {
    if (!loading) {
      setTimeout(() => setLoading(false), 2000)
    }

    setLoading(!loading)
  }

  return (
    <Layout>
      <h1>Button</h1>
      <p>Buttons trigger actions when clicked.</p>
      <h2>Style Variants</h2>
      <div style={flex}>
        <Button>Default</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained">Contained</Button>
      </div>
      <CodeBlock>
        <Code>{`<Button>Default</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="contained">Contained</Button>`}</Code>
      </CodeBlock>

      <h2>Colors</h2>
      <div style={flex}>
        {[...COLORS, 'hotpink'].map(color => (
          <Button key={color} variant="contained" color={color}>
            {color[0].toUpperCase() + color.substring(1)}
          </Button>
        ))}
      </div>
      <CodeBlock>
        <Code>
          {COLORS.map(
            (color: Color) =>
              `<Button variant="contained" color="${color}">${
                color[0].toUpperCase() + color.substring(1)
              }</Button>`
          ).join('\n')}
        </Code>
      </CodeBlock>

      <h2>Loading Button</h2>
      <p>
        <Code>{'loading = boolean'}</Code>
      </p>
      <div style={flex}>
        <Button loading={loading} onClick={() => toggleLoading()}>
          Click Me
        </Button>
        <Button loading>Loading</Button>
        <Button variant="contained" color="primary" loading>
          Loading
        </Button>
      </div>

      <h2>Anchor Button</h2>
      <p>
        <Code>{'to = string'}</Code>
      </p>
      <p>Create a button-like link.</p>
      <div style={flex}>
        <Button to="/" color="primary">
          Home
        </Button>
        <Button to="/" variant="contained" color="primary">
          Home
        </Button>
      </div>
      <CodeBlock>
        <Code componentType="Button" to="/">
          Home
        </Code>
      </CodeBlock>

      <h2>Icon Button</h2>
      <div style={flex}>
        <Button shape="circle">
          <BellIcon />
        </Button>
        <Button shape="circle" variant="outlined">
          <BellIcon />
        </Button>
        <Button shape="circle" variant="contained">
          <BellIcon />
        </Button>
        <Button shape="square" variant="outlined">
          <BellIcon />
        </Button>
        <Button shape="square" variant="contained">
          <BellIcon />
        </Button>
      </div>
      <CodeBlock>
        <Code>{`<Button shape="circle">
  <BellIcon />
</Button>
<Button shape="circle" variant="outlined">
  <BellIcon />
</Button>
<Button shape="circle" variant="contained">
  <BellIcon />
</Button>
<Button shape="square" variant="outlined">
  <BellIcon />
</Button>
<Button shape="square" variant="contained">
  <BellIcon />
</Button>`}</Code>
      </CodeBlock>

      <h2>Icon Button Content</h2>
      <div style={flex}>
        <Button prepend={<BellIcon />} variant="contained">
          Alerts
        </Button>
        <Button append={<BellIcon />} variant="contained">
          Alerts
        </Button>
        <Button
          prepend={<BellIcon />}
          append={<BellIcon />}
          variant="contained"
        >
          So Many Alerts
        </Button>
      </div>
      <CodeBlock>
        <Code>{`<Button prepend={<BellIcon />}>
  Alerts
</Button>
<Button append={<BellIcon />}>
  Alerts
</Button>
<Button prepend={<BellIcon />} append={<BellIcon />}>
  So Many Alerts
</Button>`}</Code>
      </CodeBlock>

      <h2>Other Props</h2>

      <h3>
        <code>width</code>
      </h3>
      <p>
        <code>{`width={number | percent}`}</code>
      </p>
      <p>Text will overflow or center on fixed-width buttons.</p>
      <div style={{ ...flex, flexWrap: 'nowrap' }}>
        <Button width="50%" variant="contained" color="primary">
          Minim eu exercitation pariatur cillum eiusmod occaecat enim proident
          ipsum.
        </Button>
        <Button width="50%" variant="contained" color="warning">
          Foo
        </Button>
      </div>

      <h3>
        <code>size</code>
      </h3>
      <p>
        <code>{`size={"small" | "medium" | "large"}`}</code>
      </p>
      <div style={flex}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained">Medium</Button>
        <Button variant="contained" size="large">
          Large
        </Button>
        <Button variant="contained" size="small" shape="circle">
          <BellIcon />
        </Button>
        <Button variant="contained" size="medium" shape="circle">
          <BellIcon />
        </Button>
        <Button variant="contained" size="large" shape="circle">
          <BellIcon />
        </Button>
      </div>
    </Layout>
  )
}

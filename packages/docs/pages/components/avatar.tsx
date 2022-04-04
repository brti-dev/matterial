import { Avatar, AvatarGroup, Badge } from '../../../matterial/src/components'

import Code, { CodeBlock } from 'components/Code'
import Layout from 'components/Layout'

const examples = {
  image: (
    <Avatar
      src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
      alt="Mr Banana Grabber"
    >
      MBG
    </Avatar>
  ),
}

export default function AvatarComponent() {
  return (
    <Layout>
      <h1>Avatar</h1>
      <p>Graphic representative of users.</p>
      <h2>Image Avatar</h2>
      {examples.image}
      <CodeBlock>
        <Code
          componentType="Avatar"
          {...examples.image.props}
          src="/img/avatar.png"
        />
      </CodeBlock>

      <h2>Monogram Avatar</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Avatar alt="Regular unstyled avatar">A</Avatar>{' '}
        <Avatar color="primary" alt="Primary color avatar">
          BC
        </Avatar>{' '}
        <Avatar color="secondary" alt="Secondary color avatar">
          DEF
        </Avatar>{' '}
        <Avatar color="green" alt="Green avatar">
          G
        </Avatar>{' '}
        <Avatar color="red" alt="Red avatar">
          R
        </Avatar>
      </div>
      <CodeBlock>
        <Code>{`<Avatar>A</Avatar>
<Avatar color="primary">BC</Avatar>
<Avatar color="secondary">DEF</Avatar>
<Avatar color="green">G</Avatar>
<Avatar color="red">R</Avatar>`}</Code>
      </CodeBlock>

      <h2>Sizes</h2>
      <p>
        Input a number into the <code>size</code> prop to change the diameter of
        the avatar. The default value is <code>40</code>.
      </p>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
          size={20}
        />
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
        />
        <Avatar
          src="https://www.gravatar.com/avatar/4f7c491251c66a5841858a93c95aaa91"
          alt="Mr Banana Grabber"
          size={60}
        />
      </div>
      <CodeBlock>
        <Code>{`<Avatar size={20} />
<Avatar />
<Avatar size={60} />`}</Code>
      </CodeBlock>

      <h2>Avatar Group</h2>
      <p>Group together multiple avatars.</p>
      <AvatarGroup max={3}>
        <Avatar alt="head">🧑</Avatar>
        <Avatar alt="mustache head">👨‍🦰</Avatar>
        <Avatar alt="lady head">👩‍🦰</Avatar>
        <Avatar alt="girl head">👱‍♀️</Avatar>
        <Avatar alt="? head">👴</Avatar>
      </AvatarGroup>
      <CodeBlock>
        <Code>
          {`<AvatarGroup max={3}>
  <Avatar>🧑</Avatar>
  <Avatar>👨‍🦰</Avatar>
  <Avatar>👩‍🦰</Avatar>
  <Avatar>👱‍♀️</Avatar>
  <Avatar>👴</Avatar>
</AvatarGroup>`}
        </Code>
      </CodeBlock>

      <h3>Total avatars</h3>
      <p>
        Use the <code>total</code> prop to control the total number of avatars
      </p>
      <AvatarGroup total={13}>
        <Avatar alt="monkey">🙈</Avatar>
        <Avatar alt="monkey">🙉</Avatar>
        <Avatar alt="monkey">🙊</Avatar>
      </AvatarGroup>
      <CodeBlock>
        <Code>{`<AvatarGroup total={13}>
  <Avatar>🙈</Avatar>
  <Avatar>🙉</Avatar>
  <Avatar>🙊</Avatar>
</AvatarGroup>`}</Code>
      </CodeBlock>

      <h2>With Badge</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Badge variant="dot" color="red">
          <Avatar alt="avatar with badge">A</Avatar>
        </Badge>
        <Badge
          content={
            <Avatar size={20} alt="poo">
              💩
            </Avatar>
          }
        >
          <Avatar alt="Avatar with poo badge">B</Avatar>
        </Badge>
      </div>
      <CodeBlock>
        <Code>{`<Badge variant="dot" color="red">
  <Avatar>A</Avatar>
</Badge>
<Badge content={<Avatar size={20}>💩</Avatar>}>
  <Avatar>B</Avatar>
</Badge>`}</Code>
      </CodeBlock>

      <h2>Other Props</h2>

      <h3>Tooltip</h3>
      <p>
        <Code>{`tooltip = string | boolean`}</Code>
      </p>
      <p>
        The <code>tooltip</code> prop takes a string or boolean value. If
        boolean, the <code>alt</code> prop is used as the tooltip label.
      </p>
      <Avatar tooltip alt="foo">
        ✨
      </Avatar>

      <h3>Overload Element</h3>
      <p>
        <Code>{`as = string | Component`}</Code>
      </p>
      <p>
        Use the <code>as</code> prop to override the component root node with an
        HTML element (<code>string</code>) or another React Element.
      </p>
    </Layout>
  )
}

import { BiBell as BellIcon } from 'react-icons/bi'
import { IconButton, Badge, Avatar } from '../../../matterial/src/components'

import { COLORS } from '../../const'
import Code, { CodeBlock } from 'components/Code'
import Layout from 'components/Layout'

const SIZES = ['small', 'medium', 'large', 50]

export default function BadgeComponent() {
  return (
    <Layout>
      <h1>Badge</h1>
      <p>
        A small emblem to attach to avatars, icons, and other elements to
        generate notifications.
      </p>

      <h2>Basic Badge</h2>
      <Badge content={1}>
        <IconButton variant="contained" color="primary">
          <BellIcon />
        </IconButton>
      </Badge>
      <CodeBlock>
        <Code>{`<Badge content={1}><BellIcon /></Badge>`}</Code>
      </CodeBlock>

      <h2>Colored Badge</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        {COLORS.map(color => (
          <Badge key={color} content={99} color={color}>
            <Avatar alt={color}>{color.substring(0, 1).toUpperCase()}</Avatar>
          </Badge>
        ))}
      </div>
      <CodeBlock>
        <Code>
          {COLORS.map(
            color => `<Badge content={99} color="${color}"><Avatar /></Badge>
`
          )}
        </Code>
      </CodeBlock>
      {/* <h2>Sizes</h2>
      <div style={{ display: 'flex', gap: '1em' }}>
        {SIZES.map(size => (
          <Badge key={size} content={99}>
            <Avatar>{String(size).substring(0, 2).toUpperCase()}</Avatar>
          </Badge>
        ))}
      </div>
      {SIZES.map(size => (
        <p key={size}>
          <Code>{`<Badge content={99} size="${size}"><Avatar /></Badge>`}</Code>
        </p>
      ))} */}

      <h2>Dot Badge</h2>
      <p>
        The <code>dot</code> variant changes a badge into a small dot. This can
        be used as a notification that something has changed without giving a
        count.
      </p>
      <Badge variant="dot" color="secondary">
        <IconButton variant="contained">
          <BellIcon />
        </IconButton>
      </Badge>
      <CodeBlock>
        <Code>{`<Badge variant="dot" color="secondary"><BellIcon /></Badge>`}</Code>
      </CodeBlock>

      <h2>Maximum Content</h2>
      <p>
        Use the <code>max</code> prop to specify the maximum number in the
        badge.
      </p>
      <Badge color="red" max={99} content={100}>
        <IconButton variant="contained">
          <BellIcon />
        </IconButton>
      </Badge>
      <CodeBlock>
        <Code>{`<Badge color="red" max={99} content={100}><BellIcon /></Badge>`}</Code>
      </CodeBlock>

      <h2>Badge Visibility</h2>
      <p>
        The badge automatically hides when <code>content</code> is zero. You can
        override this with the <code>showZero</code> prop.
      </p>
      <div style={{ display: 'flex', gap: '1em' }}>
        <Badge color="red" content={0}>
          <IconButton variant="contained">
            <BellIcon />
          </IconButton>
        </Badge>
        <Badge color="red" content={0} showZero={true}>
          <IconButton variant="contained">
            <BellIcon />
          </IconButton>
        </Badge>
      </div>
      <CodeBlock>
        <Code>{`<Badge color="red" content={0}><BellIcon /></Badge>
<Badge color="red" content={0} showZero={true}><BellIcon /></Badge>`}</Code>
      </CodeBlock>
    </Layout>
  )
}

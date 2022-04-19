import classnames from '../lib/classnames'

const mapProps = (props: any): string => {
  if (!props) return ''
  let propString = ''
  for (const [key, value] of Object.entries(props)) {
    if (value === true) {
      propString += ` ${key}`
    } else if (typeof value === 'number') {
      propString += ` ${key}={${value}}`
    } else {
      propString += ` ${key}="${value}"`
    }
  }

  return propString
}

export function CodeBlock({
  className,
  style: naturalStyle,
  ...props
}: React.ComponentPropsWithoutRef<'pre'>) {
  return (
    <pre
      className={classnames(className, 'surface')}
      style={{
        overflow: 'auto',
        counterReset: 'linenumbers',
        lineHeight: 1,
        ...naturalStyle,
      }}
      {...props}
    />
  )
}

export type CodeType = {
  componentType?: string
  language?: string
  children?: React.ReactNode
} & React.ComponentPropsWithoutRef<'code'>

export function Code({
  componentType,
  language = 'react',
  children,
  ...props
}: CodeType) {
  if (!children) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)} /&gt;
      </code>
    )
  }

  if (componentType) {
    return (
      <code className={`language-${language}`}>
        &lt;{componentType}
        {mapProps(props)}&gt;
        {children}&lt;/{componentType}&gt;
      </code>
    )
  }

  return <code className={`language-${language}`}>{children}</code>
}

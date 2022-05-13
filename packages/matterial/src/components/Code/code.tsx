import classnames from '../../lib/classnames'

export type CommonCodeProps = {
  children: React.ReactNode
  className?: string
  language?: string
}

export type CodeProps = CommonCodeProps & React.ComponentPropsWithoutRef<'code'>

export function Code({
  children,
  className,
  language = 'react',
  ...props
}: CodeProps) {
  return (
    <code className={classnames(className, `language-${language}`)} {...props}>
      {children}
    </code>
  )
}

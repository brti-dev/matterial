import { Code, CommonCodeProps } from './code'
import classnames from '../../lib/classnames'
import classes from './code.module.scss'

export type CodeBlockProps = CommonCodeProps &
  React.ComponentPropsWithoutRef<'pre'>

export function CodeBlock({
  children,
  className,
  language = 'js',
  ...props
}: CodeBlockProps) {
  return (
    <pre className={classnames(className, classes.codeBlock)} {...props}>
      <Code language={language}>{children}</Code>
    </pre>
  )
}

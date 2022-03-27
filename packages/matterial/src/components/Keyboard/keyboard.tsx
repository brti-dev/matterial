import classnames from 'lib/classnames'
import classes from './keyboard.module.scss'

export type KeyboardProps = Omit<
  React.ComponentPropsWithoutRef<'span'>,
  'children'
> & {
  children: string
}

export default function Keyboard({
  children,
  className,
  ...rest
}: KeyboardProps) {
  return (
    <span className={classnames(className, classes.keyboard)} {...rest}>
      {children}
    </span>
  )
}

import classnames from '../../lib/classnames'
import classes from './form.module.scss'

type SubmitRowProps = React.ComponentPropsWithoutRef<'menu'> & {
  children: React.ReactNode
}

export function SubmitRow({ className, ...rest }: SubmitRowProps) {
  return <menu className={classnames(className, classes.submitRow)} {...rest} />
}

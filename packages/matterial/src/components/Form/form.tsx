import classnames from 'lib/classnames'
import classes from './form.module.scss'

export type FormProps = {
  children: React.ReactNode
  className?: string
} & React.ComponentPropsWithoutRef<'form'>

export function Form({ children, className, ...rest }: FormProps) {
  return (
    <form className={classnames(classes.form, className)} {...rest}>
      {children}
    </form>
  )
}

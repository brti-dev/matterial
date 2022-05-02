import { FormProps } from './form.types'
import classnames from '../../lib/classnames'
import classes from './form.module.scss'

export function Form({ children, className, ...rest }: FormProps) {
  return (
    <form className={classnames(classes.form, className)} {...rest}>
      {children}
    </form>
  )
}

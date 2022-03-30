import {
  OverloadedElement,
  OverloadedElementProps,
} from 'interfaces/OverloadedElement'
import classes from './check-button.module.scss'

export type CheckButtonGroupProps = OverloadedElementProps & {
  className?: string
  children: React.ReactNode
  orientation?: 'horizontal' | 'vertical'
}

export const CheckButtonGroup: OverloadedElement<CheckButtonGroupProps> = (
  props: CheckButtonGroupProps
) => {
  const {
    as: Component = 'div',
    className,
    orientation = 'horizontal',
    ...rest
  } = props

  const classNames = [className, classes.container]
  if (orientation === 'vertical') {
    classNames.push(classes.containerVertical)
  }
  const classNameString = classNames.filter(cn => !!cn).join(' ')

  return <Component className={classNameString} {...rest} />
}

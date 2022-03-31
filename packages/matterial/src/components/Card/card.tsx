import classnames from '../../lib/classnames'
import {
  OverloadedElement,
  OverloadedElementProps,
} from '../../interfaces/OverloadedElement'

export type CardProps = OverloadedElementProps & {
  children: React.ReactNode
  className?: string
}

export const CardGroup: OverloadedElement<CardProps> = ({
  as: Component = 'div',
  className,
  ...rest
}: CardProps) => {
  return <Component className={classnames(className, 'card')} {...rest} />
}

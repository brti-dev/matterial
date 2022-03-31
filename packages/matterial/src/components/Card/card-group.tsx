import classnames from '../../lib/classnames'
import 'card.scss'

export type CardGroupProps = {
  className?: string
  orientation?: 'horizontal' | 'vertical'
  wrap?: boolean
}

export function CardGroup({
  className,
  orientation = 'horizontal',
  wrap = true,
  ...rest
}: CardGroupProps) {
  const classNames = classnames(
    className,
    'cardgroup',
    `cardgroup__orientation--${orientation}`,
    `cardgroup__wrap--${!wrap ? 'nowrap' : 'wrap'}`
  )

  return <div className={classNames} {...rest} />
}

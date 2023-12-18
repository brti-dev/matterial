import { OverloadedElementProps } from '../../interfaces/OverloadedElement'
import { RequiredChildren } from '../../interfaces/children'

type VisuallyHiddenProps = RequiredChildren &
  OverloadedElementProps &
  React.ComponentPropsWithoutRef<'span'>

function VisuallyHidden(props: VisuallyHiddenProps) {
  const { as: Component = 'span', children, ...rest } = props
  return (
    <Component className="visually-hidden" {...rest}>
      {children}
    </Component>
  )
}

export type { VisuallyHiddenProps }
export { VisuallyHidden }

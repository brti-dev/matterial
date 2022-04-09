import classnames from '../../lib/classnames'
import { VisuallyHidden } from '../VisuallyHidden'
import { Button, CommonButtonProps } from '../Button'

export function CloseButton({
  className,
  onClick,
  size = 'large',
  ...props
}: Omit<CommonButtonProps, 'children'> & { onClick: () => void }) {
  return (
    <Button
      className={classnames('button__close', className)}
      shape="circle"
      size={size}
      onClick={onClick}
      {...props}
    >
      <VisuallyHidden>Close</VisuallyHidden>
      <span aria-hidden>{'\u00d7'}</span>
    </Button>
  )
}

import type { CommonButtonProps } from '../Button'
import classnames from '../../lib/classnames'
import { VisuallyHidden } from '../VisuallyHidden'
import { Button } from '../Button'
import classes from './dialog.module.scss'

export function CloseButton({
  className,
  onClick,
  size = 'large',
  ...props
}: Omit<CommonButtonProps, 'children'> & { onClick: () => void }) {
  return (
    <Button
      className={classnames(classes.closeButton, className)}
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

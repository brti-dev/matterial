import { Dialog as AriaDialog, DialogHeading } from '@ariakit/react'
import type { DialogProps } from './dialog'

function DialogWrapper({
  active,
  children,
  label,
  labelledBy,
  onDismiss,
  title,
  ...rest
}: Partial<DialogProps>): JSX.Element {
  if (!title) {
    if (label) rest['aria-label'] = label
    if (labelledBy) rest['aria-labelledby'] = labelledBy
  }
  return (
    <AriaDialog
      open={active}
      onClose={onDismiss}
      backdrop={<div className="overlay" />}
      {...rest}
    >
      {title && <DialogHeading>{title}</DialogHeading>}
      {children}
    </AriaDialog>
  )
}

export { DialogWrapper }

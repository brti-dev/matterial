import {
  Dialog as ReachDialog,
  DialogProps as ReachDialogProps,
} from '@reach/dialog'

import { AriaLabel, AriaLabelledBy } from '../../interfaces/other'
import useMediaQuery from '../../lib/use-media-query'
import { CloseButton } from './close-button'

type DialogProps_base = Omit<ReachDialogProps, 'isOpen'> & {
  /**
   * Indicates if the dialog is open/shown
   */
  active?: boolean
  /**
   * This seems to want to be explicitly typed
   */
  className?: string
  /**
   * If true, add a CloseButton with onDismiss callback when clicked
   */
  closable?: boolean
  /**
   * Expand the modal to the edges of the viewport; 'auto' by default:
   * fullscreen on mobile only
   */
  fullscreen?: boolean | 'auto'
  /**
   * Description of contextual information for the interactive controls inside
   * the dialog; Required if `labelledBy` is not specified
   */
  label?: string
  /**
   * Element ID within the dialog that describes contextual information for the
   * interactive controls inside the dialog; Required if `label` is not
   * specified
   */
  labelledBy?: string
  /**
   * Function called whenever the user hits "Escape" or clicks outside the
   * dialog; Used to close the dialog or check if conditions are met before
   * closing
   */
  onDismiss: () => void
}

export type DialogProps = DialogProps_base & (AriaLabelledBy | AriaLabel)

export function Dialog({
  active = false,
  children,
  closable = false,
  fullscreen = 'auto',
  label,
  labelledBy,
  ...rest
}: DialogProps) {
  const isScreenMobile = useMediaQuery('(max-width: 640px)')

  let isFullscreen: boolean
  if (!fullscreen) {
    isFullscreen = false
  } else {
    if (fullscreen === true) {
      isFullscreen = true
    } else {
      isFullscreen = isScreenMobile
    }
  }

  return (
    <ReachDialog
      isOpen={active}
      data-fullscreen={isFullscreen || undefined}
      aria-label={label || undefined}
      aria-labelledby={labelledBy || undefined}
      {...rest}
    >
      {closable && <CloseButton onClick={rest.onDismiss} />}
      {children}
    </ReachDialog>
  )
}

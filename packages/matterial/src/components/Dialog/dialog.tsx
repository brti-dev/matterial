import type { RequiredChildren } from '../../interfaces/children'
import type { AriaLabel, AriaLabelledBy } from '../../interfaces/other'
import classnames from '../../lib/classnames'
import useMediaQuery from '../../lib/use-media-query'
import { CloseButton } from './close-button'
import { DialogWrapper } from './dialog-wrapper'
import classes from './dialog.module.scss'

type DialogProps_base = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Indicates if the dialog is open/shown
   */
  active?: boolean

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
   * the dialog; Required if neither of `title` or `labelledBy` is specified
   */
  label?: string

  /**
   * Element ID within the dialog that describes contextual information for the
   * interactive controls inside the dialog; Required if neither of `label` or
   * `title` is specified
   */
  labelledBy?: string

  /**
   * Function called whenever the user hits "Escape" or clicks outside the
   * dialog; Used to close the dialog or check if conditions are met before
   * closing
   */
  onDismiss: () => void

  /**
   * Add a heading, also used as label
   */
  title?: string
} & RequiredChildren

type DialogLabel =
  | { title: Required<DialogProps_base['title']> }
  | AriaLabel
  | AriaLabelledBy

type DialogProps = DialogProps_base & DialogLabel

function Dialog({
  active = false,
  children,
  className,
  closable = false,
  fullscreen = 'auto',
  ...rest
}: DialogProps) {
  const isScreenMobile = useMediaQuery('(max-width: 640px)')

  let isFullscreen: boolean
  if (isScreenMobile || fullscreen === true) {
    isFullscreen = true
  } else {
    isFullscreen = false
  }

  return (
    <DialogWrapper
      active={active}
      className={classnames(className, 'surface', classes.dialog)}
      data-fullscreen={isFullscreen}
      {...rest}
    >
      {closable && <CloseButton onClick={rest.onDismiss} />}
      {children}
    </DialogWrapper>
  )
}

export type { DialogProps }
export { Dialog }

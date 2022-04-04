export type OverlayProps = {
  /**
   * Indicates if the overlay is open; Default: false
   */
  active: boolean
  /**
   * Callback when close is requested, eg. click the overlay container or press
   * Esc
   */
  onClose: () => void
} & React.ComponentPropsWithoutRef<'div'>

export function Overlay({
  active = false,
  onClose,
  ...rest
}: OverlayProps): JSX.Element {
  return (
    <div
      className="overlay"
      role="button"
      hidden={!active}
      onClick={onClose}
      aria-hidden={!active}
      aria-label="close"
      {...rest}
    />
  )
}

export type OverlayProps = {
  active: boolean
  onClose: any
} & React.HTMLAttributes<HTMLDivElement>

export function Overlay({ active = false, onClose }: OverlayProps) {
  return (
    <div
      className="overlay"
      role="button"
      hidden={!active}
      onClick={onClose}
      aria-hidden={!active}
      aria-label="close"
    />
  )
}

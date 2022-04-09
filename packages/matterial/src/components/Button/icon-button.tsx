import { Tooltip } from '../Tooltip'
import { Button, CommonButtonProps } from './button'

export interface IconButtonProps extends CommonButtonProps {
  tooltip?: string
}

/**
 * Sugar for icon buttons
 */
export function IconButton({ tooltip, ...rest }: IconButtonProps) {
  return (
    <>
      {tooltip ? (
        <Tooltip label={tooltip}>
          <IconButtonContent aria-label={tooltip} {...rest} />
        </Tooltip>
      ) : (
        <IconButtonContent {...rest} />
      )}
    </>
  )
}

function IconButtonContent({
  children,
  shape = 'circle',
  ...rest
}: IconButtonProps) {
  return (
    <Button shape={shape} {...rest}>
      {children}
    </Button>
  )
}

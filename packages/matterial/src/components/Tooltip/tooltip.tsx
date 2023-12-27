import type {
  TooltipProps as AriaTooltipProps,
  TooltipProviderProps as AriaTooltipProviderProps,
} from '@ariakit/react'
import { TooltipProvider, TooltipAnchor, Tooltip } from '@ariakit/react'
import classnames from '../../lib/classnames'
import classes from './tooltip.module.scss'

type SimpleTooltipProps = {
  label: React.ReactNode
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>
} & AriaTooltipProviderProps

function StyledTooltip(props: AriaTooltipProps) {
  return (
    <Tooltip
      {...props}
      className={classnames(classes.tooltip, props.className)}
    />
  )
}

function CustomTooltip(props: AriaTooltipProps | SimpleTooltipProps) {
  if ('label' in props) {
    const { label, children, ...rest } = props
    return (
      <TooltipProvider {...rest}>
        <TooltipAnchor render={children as SimpleTooltipProps['children']} />
        <StyledTooltip>{label}</StyledTooltip>
      </TooltipProvider>
    )
  }
  return <StyledTooltip {...(props as AriaTooltipProps)} />
}

export { TooltipProvider, TooltipAnchor, CustomTooltip as Tooltip }

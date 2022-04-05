import { isValidElement, cloneElement, useState } from 'react'
import ReachAlert from '@reach/alert'
import {
  BiErrorCircle as ErrorIcon,
  BiError as WarningIcon,
  BiCheckCircle as SuccessIcon,
  BiInfoCircle as InfoIcon,
} from 'react-icons/bi'

import { Severity, Variant } from '../../interfaces/theme'
import classnames from '../../lib/classnames'
import { Button } from '../Button'

import classes from './alert.module.scss'

const LABELS = {
  error: 'Error',
  warning: 'Warning',
  success: 'Success',
}
const ICONS = {
  error: <ErrorIcon />,
  warning: <WarningIcon />,
  success: <SuccessIcon />,
  info: <InfoIcon />,
}

type Icon = boolean | React.ReactElement

export type AlertDispatch = {
  /**
   * A button or other call to action
   */
  action?: string | React.ReactElement
  /**
   * Append an action to dismiss the alert; Overwritten by `action`
   */
  dismiss?: boolean
  /**
   * Display an icon; Differs by severity, or indicate custom; Default: false
   */
  icon?: Icon
  /**
   * Prefix a short phrase; Defaults to a phrase based on severity, or suppress with false
   */
  label?: boolean | string
  /**
   * A short message to show; Nullable for use in useAlert hook
   */
  message: string | null
  /**
   * Describes the type of alert
   */
  severity?: Severity
  /**
   * Controls whether the assistive technology should read immediately
   * ("assertive") or wait until the user is idle ("polite"); Default: 'polite'
   */
  type?: 'polite' | 'assertive'
  /**
   * Style variants
   */
  variant?: Variant
}

export type AlertProps = Partial<AlertDispatch> & {
  children?: React.ReactNode
  className?: string
}

/**
 * Regenerate a React element with the prop `size` small
 */
function shrink(component: string | React.ReactElement) {
  if (isValidElement(component)) {
    return cloneElement(component, { size: 'small' })
  }

  return component
}

export function Alert({
  action,
  children,
  className,
  dismiss = false,
  icon = false,
  label: naturalLabel = true,
  message: naturalMessage,
  severity,
  type,
  variant = 'outlined',
}: AlertProps) {
  const classNames = classnames(
    classes.alert,
    `variant--${variant}`,
    severity && `color--${severity}`,
    className
  )

  let [message, setMessage] = useState(children || naturalMessage)

  if (dismiss && !action) {
    action = (
      <Button
        variant="outlined"
        color={severity}
        onClick={() => setMessage(null)}
      >
        Dismiss
      </Button>
    )
  }

  if (!message) {
    return null
  }

  let label
  if (naturalLabel === true && severity && severity in LABELS) {
    label = LABELS[severity]
  } else if (typeof naturalLabel === 'string') {
    label = naturalLabel
  }

  return (
    <ReachAlert
      className={classNames}
      type={type}
      role="alert"
      // aria-label={label || severity || 'alert'}
      data-severity={severity}
    >
      <>
        {icon && <Icon icon={icon} severity={severity} />}
        <div className={classes.content}>
          <div className={classes.message}>
            {label && <strong className={classes.label}>{label}: </strong>}
            {message}
          </div>
          {action && <div className={classes.action}>{shrink(action)}</div>}
        </div>
      </>
    </ReachAlert>
  )
}

function Icon({
  icon,
  severity,
}: {
  icon: Icon
  severity?: Severity
}): JSX.Element | null {
  if (icon === true) {
    // Return icon by severity, or default icon
    if (!severity || !ICONS[severity]) {
      severity = 'info'
    }
    return (
      <div className={classes.icon} aria-hidden="true">
        {ICONS[severity]}
      </div>
    )
  }

  // Return custom icon
  return (
    <div className={classes.icon} aria-hidden="true">
      {icon}
    </div>
  )
}

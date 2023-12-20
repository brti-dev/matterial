import * as React from 'react'
import { OverloadedElementProps } from '../../interfaces/OverloadedElement'
import { OptionalChildren } from '../../interfaces/children'
import classes from './skip-nav.module.scss'

// The user may want to provide their own ID (maybe there are multiple nav
// menus on a page a use might want to skip at various points in tabbing?).
let DEFAULT_ID = 'reach-skip-nav'

type SkipNavLinkProps = {
  /**
   * An alternative ID for `SkipNavContent`. If used, the same value must be
   * provided to the `id` prop in `SkipNavContent`.
   */
  contentId?: string
} & Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> &
  OptionalChildren

type SkipNavContentProps = {
  /**
   * An alternative ID. If used, the same value must be provided to the
   * `contentId` prop in `SkipNavLink`.
   *
   * @see Docs https://reach.tech/skip-nav#skipnavcontent-id
   */
  id?: string
} & OverloadedElementProps &
  OptionalChildren

function SkipNavLink({
  children = 'Skip to content',
  contentId = DEFAULT_ID,
  ...props
}: SkipNavLinkProps): JSX.Element {
  return (
    <a href={`#${contentId}`} className={classes.skipNavLink} {...props}>
      {children}
    </a>
  )
}

const SkipNavContent = React.forwardRef<HTMLDivElement, SkipNavContentProps>(
  ({ as: Component = 'div', id = DEFAULT_ID, ...props }, forwardedRef) => {
    return <Component {...props} ref={forwardedRef} id={id} />
  }
)

export type { SkipNavContentProps, SkipNavLinkProps }
export { SkipNavLink, SkipNavContent }

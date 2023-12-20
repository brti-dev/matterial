'use client'

import { isValidElement, useContext } from 'react'

import type {
  OptionalChildren,
  RequiredChildren,
} from '../../interfaces/children'
import classes from './layout.module.scss'
import useMediaQuery from '../../lib/use-media-query'
import scrollToTop from '../../lib/scroll-to-top'
import { Button } from '../Button'
import { Dialog, useDialog } from '../Dialog'
import { Icon } from '../Icon'
import { SkipNavContent, SkipNavLink } from '../SkipNav'
import AppContext from '../../contexts/app-context'

export type BodyProps = React.ComponentPropsWithoutRef<'body'> &
  RequiredChildren
export type NavElement = React.ReactElement<typeof Nav> | NavMap
export type PageProps = {
  /**
   * Stretch the width of the layout to the full width of the viewport, otherwise a max-width will be imposed
   */
  fullWidth?: boolean

  /**
   * Include the given component as a navigation panel
   */
  nav?: NavElement

  /**
   * Don't display nav, including nav defined in Html config
   */
  noNav?: boolean
} & React.ComponentPropsWithoutRef<'div'> &
  RequiredChildren
type CustomLink = {
  href: string
  title: string
  isActive?: boolean
}
type LinkProps = CustomLink &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CustomLink>
type LinkList = Array<LinkProps | React.ReactElement>
export type NavMap = {
  /** Heading component */
  _heading?: React.ReactElement
  /** No heading for this group */
  _?: LinkList
  /** Insert a horizontal rule */
  _hr?: string
} & {
  [key: string]: LinkList | React.ReactElement | string
}

export function Body({ children, ...props }: BodyProps): JSX.Element {
  return <body {...props}>{children}</body>
}

function H5({ children }: RequiredChildren): JSX.Element {
  if (children === '_') {
    return <></>
  }
  if (children === '_hr') {
    return <hr />
  }
  return <h5>{children}</h5>
}

export function PageNav({ nav: navProp }: Pick<PageProps, 'nav'>): JSX.Element {
  const {
    appTitle,
    linkComponent: LinkComponent,
    navElement,
  } = useContext(AppContext)

  const nav = navProp || navElement // Prop takes precedence over config

  if (!nav) {
    return <></>
  }

  // It's a <Nav /> component
  if (isValidElement(nav)) {
    return nav
  }

  // It's a nav map
  const { _title, _heading, ...navMap } = nav

  return (
    <Nav>
      {_heading || (appTitle && <h1>{appTitle}</h1>)}
      {Object.entries(navMap).map(([menuKey, items]) => (
        <div key={menuKey}>
          <H5>{menuKey}</H5>
          {Array.isArray(items) && (
            <ul>
              {items.map((item, index) => {
                // React element
                if (isValidElement(item)) {
                  return <li key={index}>{item}</li>
                }

                // Link object
                const { href, title, ...linkItemProps } = item as LinkProps

                return (
                  <li key={index}>
                    <LinkComponent href={href} {...linkItemProps}>
                      {title}
                    </LinkComponent>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      ))}
    </Nav>
  )
}

export function Page({
  children,
  className,
  fullWidth,
  nav,
  noNav,
  ...props
}: PageProps): JSX.Element {
  const classNames = [className, classes.layout]
  if (fullWidth) {
    classNames.push(classes.fullWidth)
  }

  const Main = (): JSX.Element => (
    <SkipNavContent>
      <main className={classes.main}>{children}</main>
    </SkipNavContent>
  )

  return (
    <div className={classNames.join(' ')} {...props}>
      <SkipNavLink />
      <div className={classes.navContainer}>
        {!noNav && <PageNav nav={nav} />}
        <Main />
      </div>
    </div>
  )
}

export function Nav({ children }: RequiredChildren): JSX.Element {
  const isScreenMobile = useMediaQuery('(max-width: 680px)')
  const navContent = (
    <nav
      id="navigation__nav"
      aria-label="Main"
      className={`${classes.navigation} ${
        !isScreenMobile && classes.navigationScreen
      }`}
    >
      {children}
    </nav>
  )

  if (isScreenMobile) {
    return <DialogNav>{navContent}</DialogNav>
  }

  return navContent
}

function DialogNav({ children }: RequiredChildren) {
  const { active, open, close } = useDialog(false)

  return (
    <>
      <Button
        shape="circle"
        onClick={open}
        className={classes.menuButton}
        size={54}
      >
        <Icon icon="Menu" size={54} />
      </Button>
      <Dialog
        active={active}
        closable
        onDismiss={close}
        labelledBy="navigation__nav"
      >
        {children}
      </Dialog>
    </>
  )
}

export function Footer({ children }: OptionalChildren) {
  return (
    <footer className={classes.footer}>
      <Button
        shape="circle"
        className={classes.scrollToTop}
        onClick={scrollToTop}
      >
        <Icon icon="ArrowToTop" />
      </Button>
      {children ?? <>&nbsp;</>}
    </footer>
  )
}

'use client'

import { isValidElement, useContext } from 'react'

import type {
  OptionalChildren,
  RequiredChildren,
} from '../../interfaces/children'
import type { AppConfig } from '../../contexts/app-context'
import classes from './layout.module.scss'
import useMediaQuery from '../../lib/use-media-query'
import scrollToTop from '../../lib/scroll-to-top'
import { Button } from '../Button'
import { Dialog, useDialog } from '../Dialog'
import { Icon } from '../Icon'
import AppContext, { defaultAppConfig } from '../../contexts/app-context'

export type HtmlProps = {
  config?: AppConfig
} & React.ComponentPropsWithoutRef<'html'> &
  RequiredChildren
export type BodyProps = React.ComponentPropsWithoutRef<'body'> &
  RequiredChildren
export type PageProps = {
  /**
   * Stretch the width of the layout to the full width of the viewport, otherwise a max-width will be imposed
   */
  fullWidth?: boolean

  /**
   * Include the given component as a navigation panel
   */
  nav?: React.ReactElement<typeof Nav> | NavMap
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

export function Html({
  children,
  config = {},
  lang = 'en',
  ...props
}: HtmlProps): JSX.Element {
  const configComplete = { ...defaultAppConfig, ...config }

  return (
    <html lang={lang} {...props}>
      <AppContext.Provider value={configComplete}>
        {children}
      </AppContext.Provider>
    </html>
  )
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

export function Page({
  children,
  className,
  fullWidth,
  nav,
  ...props
}: PageProps): JSX.Element {
  const { appTitle, linkComponent: LinkComponent } = useContext(AppContext)
  const classNames = [className, classes.layout]
  if (fullWidth) classNames.push(classes.fullWidth)

  const PageNav = (): JSX.Element => {
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
  const Main = (): JSX.Element => (
    <main className={classes.main}>{children}</main>
  )

  return (
    <div className={classNames.join(' ')} {...props}>
      <div className={classes.navContainer}>
        <PageNav />
        <Main />
      </div>
    </div>
  )
}

export function Nav({ children }: RequiredChildren): JSX.Element {
  // const { pathname } = useRouter()
  // const pathnameRoot = pathname.split('/', 2).join('/')
  // const isCurrentPage = (link: string) => link === pathnameRoot

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

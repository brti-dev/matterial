'use client'

import { isValidElement } from 'react'
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

export type HtmlProps = React.ComponentPropsWithoutRef<'html'> &
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
export type NavMap = {
  /** Identify title for heading level-1 */
  _title?: string
  /** Heading component */
  _heading?: React.ReactElement
  /** No heading for this group */
  _?: React.ReactElement[]
  /** Insert a horizontal rule */
  _hr?: string
} & {
  [key: string]: React.ReactElement[] | React.ReactElement | string
}

export function Html({
  children,
  lang = 'en',
  ...props
}: HtmlProps): JSX.Element {
  return (
    <html lang={lang} {...props}>
      {children}
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
        {_title && <h1>{_title}</h1>}
        {_heading}
        {Object.entries(navMap).map(([menuKey, items]) => (
          <div key={menuKey}>
            <H5>{menuKey}</H5>
            {Array.isArray(items) && (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
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
      {/* <Heading />
      <ul>
        <li>
          <Link href="/">Homepage</Link>
        </li>
        <li>
          <Link href="/setup">Getting Started</Link>
        </li>
      </ul>
      <h5>Components</h5>
      <ul>
        {components.map(slug => (
          <li
            key={slug}
            className={isCurrentPage(slug) ? 'current' : undefined}
          >
            <Link href={`/components/${slug}`} legacyBehavior>
              {capitalize(unKebabCase(slug))}
            </Link>
          </li>
        ))}
      </ul> */}
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
      {children}
    </footer>
  )
}

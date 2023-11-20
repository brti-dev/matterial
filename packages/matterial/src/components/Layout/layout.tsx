'use client'

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

import '../../styles/global.scss'

export type HtmlProps = React.ComponentPropsWithoutRef<'html'> &
  RequiredChildren
export type BodyProps = React.ComponentPropsWithoutRef<'body'> &
  RequiredChildren
export type LayoutProps = {
  /**
   * Stretch the width of the layout to the full width of the viewport, otherwise a max-width will be imposed
   */
  fullWidth?: boolean

  /**
   * Include the given component as a navigation panel
   */
  nav?: React.ReactNode
} & React.ComponentPropsWithoutRef<'div'> &
  RequiredChildren

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

export function Layout({
  children,
  fullWidth,
  className,
  nav,
  ...props
}: LayoutProps): JSX.Element {
  const classNames = [className, classes.layout]
  if (fullWidth) classNames.push(classes.fullWidth)

  const Main = () => <main className={classes.main}>{children}</main>

  return (
    <div className={classNames.join(' ')} {...props}>
      {nav ? (
        <div className={classes.navLayoutContainer}>
          {nav}
          <Main />
        </div>
      ) : (
        <Main />
      )}
    </div>
  )
}

export function Nav({ children }: any): JSX.Element {
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

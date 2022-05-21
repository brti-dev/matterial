import {
  ArrowTopIcon,
  Button,
  Dialog,
  MenuIcon,
  useDialog,
} from '../../../../matterial/src'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

import { TITLE } from '../../../const'
import scrollToTop from 'lib/scroll-to-top'
import { capitalize, unKebabCase } from 'lib/string'
import useMediaQuery from 'lib/use-media-query'
import classes from './layout.module.scss'

type OptionalChildren = {
  children?: React.ReactNode
}

type RequiredChildren = {
  children: React.ReactNode
}

export type LayoutProps = {
  fullWidth?: boolean
} & RequiredChildren

export function Layout({ children, fullWidth = false }: LayoutProps) {
  return (
    <div className={classes.container}>
      {!fullWidth ? (
        <div className={classes.containerNav}>{children}</div>
      ) : (
        children
      )}
    </div>
  )
}

export function Header({
  children,
  title,
}: OptionalChildren & { title: string }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      {children && <header className={classes.header}>{children}</header>}
    </>
  )
}

export function Heading({ children = TITLE }: OptionalChildren) {
  return <h1 className={classes.heading}>{children}</h1>
}

export function Navigation({ components }: { components: string[] }) {
  const { pathname } = useRouter()
  const pathnameRoot = pathname.split('/', 2).join('/')

  const isCurrentPage = (link: string) => link === pathnameRoot

  const isScreenMobile = useMediaQuery('(max-width: 680px)')

  const navContent = (
    <nav
      id="navigation__nav"
      aria-label="Main"
      className={`${classes.navigation} ${
        isScreenMobile ? classes.navigationMobile : classes.navigationScreen
      }`}
    >
      <Heading />
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
            <Link href={`/components/${slug}`}>
              {capitalize(unKebabCase(slug))}
            </Link>
          </li>
        ))}
      </ul>
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
      <Button shape="circle" onClick={open}>
        <MenuIcon />
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

export function Main({ children }: RequiredChildren) {
  return <main className={classes.main}>{children}</main>
}

export function Footer({ children }: OptionalChildren) {
  return (
    <footer className={classes.footer}>
      <Button
        shape="circle"
        className={classes.scrollToTop}
        onClick={scrollToTop}
      >
        <ArrowTopIcon />
      </Button>
      {children}
    </footer>
  )
}

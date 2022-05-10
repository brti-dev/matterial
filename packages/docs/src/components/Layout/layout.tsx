import { ArrowTopIcon, MenuIcon, Button } from '../../../../matterial/src'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

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
  title?: string
} & RequiredChildren

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
      <header id="top" className={classes.header}>
        <div className="heading">
          <h1>{TITLE}</h1>
        </div>
        {children}
      </header>
    </>
  )
}

export function Navigation({ components }: { components: string[] }) {
  const { pathname } = useRouter()
  const pathnameRoot = pathname.split('/', 2).join('/')

  const isCurrentPage = (link: string) => link === pathnameRoot

  const isScreenMobile = useMediaQuery('(max-width: 680px)')

  const [menu, setMenu] = useState(isScreenMobile)
  const handleOpenMenu = () => setMenu(!menu)

  return (
    <>
      {isScreenMobile && (
        <Button shape="circle" onClick={handleOpenMenu}>
          <MenuIcon />
        </Button>
      )}
      <nav
        style={
          {
            display: menu || !isScreenMobile ? 'block' : 'none',
          } as React.CSSProperties
        }
        aria-label="Main"
      >
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

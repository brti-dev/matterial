import type { RequiredChildren } from '../../interfaces/children'
import classes from './layout.module.scss'

import '../../styles/global.scss'

export type HtmlProps = React.ComponentPropsWithoutRef<'html'> &
  RequiredChildren
export type BodyProps = React.ComponentPropsWithoutRef<'body'> &
  RequiredChildren
export type LayoutProps = {
  fullWidth?: boolean
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
  ...props
}: LayoutProps): JSX.Element {
  const classNames = [className, classes.layout]
  if (fullWidth) classNames.push(classes.fullWidth)

  return (
    <div className={classNames.join(' ')} {...props}>
      {!fullWidth ? (
        <div className={classes.containerNav}>{children}</div>
      ) : (
        children
      )}
    </div>
  )
}

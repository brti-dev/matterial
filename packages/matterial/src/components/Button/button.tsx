import { forwardRef } from 'react'

import { Color, Variant } from 'interfaces/theme'
import classnames from 'lib/classnames'
import Link from 'components/Link'

type Percent = `${number}%`

interface Props {
  // Stuff to put on the right side of children
  append?: React.ReactNode
  // Main content
  children: React.ReactNode
  className?: string
  color?: Color
  disabled?: boolean
  // Indicate if there is a loading process happening; Disables the button if true
  loading?: boolean
  // Stuff to put on the left side of children
  prepend?: React.ReactNode
  // Circle and square are ideal for icons or monograms
  shape?: 'default' | 'square' | 'circle'
  // Medium by default
  size?: 'small' | 'medium' | 'large'
  // A URL location; Changes the button into a hyperlink
  to?: string
  type?: 'button' | 'reset' | 'submit'
  variant?: Variant
  // Apply a fixed width
  width?: number | Percent
}

type NativeAttrs = Omit<React.ButtonHTMLAttributes<any>, keyof Props>

export type ButtonProps = Props & NativeAttrs

// export type ButtonProps =  & React.ComponentPropsWithRef<'button'> &
//   React.ComponentPropsWithRef<'a'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    append,
    children,
    className,
    color = 'default',
    disabled = false,
    loading = false,
    prepend,
    shape,
    size = 'medium',
    to,
    type = 'button',
    variant = 'default',
    width,
    ...rest
  } = props

  const style: React.CSSProperties = {}
  if (typeof width === 'number') {
    style.width = `${width}px`
  } else if (typeof width === 'string') {
    // Percent
    style.width = width
  }

  const classNameString = classnames(
    'button', // Give access to global button style shared with other inputs
    `color--${color}`,
    shape && `shape--${shape}`,
    `size--${size}`,
    `variant--${variant}`,
    !!to && 'no-hover',
    className
  )

  const content = (
    <>
      {prepend && (
        <span className="prepend-content" aria-hidden>
          {prepend}
        </span>
      )}
      <span className="main-content">{children}</span>
      {append && (
        <span className="append-content" aria-hidden>
          {append}
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <Link href={to}>
        <a className={classNameString} style={style} {...rest}>
          {content}
        </a>
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classNameString}
      disabled={disabled || loading ? true : undefined}
      data-loading={loading ? 'true' : undefined}
      style={style}
      ref={ref}
      {...rest}
    >
      {content}
    </button>
  )
})

export default Button

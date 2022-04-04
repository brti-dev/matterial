type Props = {
  children: React.ReactNode
  href: string
}

type NativeAttrs = Omit<React.ComponentPropsWithoutRef<'a'>, keyof Props>

export type LinkProps = Props & NativeAttrs

export function Link({ href, ...rest }: LinkProps): JSX.Element {
  return <a href={href} {...rest} />
}

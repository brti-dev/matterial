export type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  children: React.ReactNode
  flex?: number | string
  row?: boolean
  wrap?: boolean | 'reverse'
}

export function Container({
  children,
  flex,
  row = false,
  style: naturalStyle = {},
  wrap = true,
  ...rest
}: ContainerProps) {
  const style: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--gap)',
    flexDirection: row ? 'row' : 'column',
    flexWrap: !wrap ? 'nowrap' : wrap == 'reverse' ? 'wrap-reverse' : 'wrap',
    alignItems: 'flex-start',
    flex,
  }
  return (
    <div style={{ ...style, ...naturalStyle }} {...rest}>
      {children}
    </div>
  )
}

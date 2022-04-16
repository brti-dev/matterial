export type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Container contents
   */
  children: React.ReactNode
  /**
   * CSS flex properties
   */
  flex?: number | string
  /**
   * Orient content into rows; Default is columns
   */
  row?: boolean
  /**
   * Wrap content; Default is true
   */
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

'use client'

import ContainerContext from './container-context'

export type ContainerProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Align items in the center rather than at flex-start
   */
  center?: boolean

  /**
   * Container contents
   */
  children: React.ReactNode

  /**
   * CSS flex properties
   */
  flex?: number | string

  /**
   * The space between each child
   */
  gap?: number | string

  /**
   * Don't wrap contents
   */
  nowrap?: boolean

  /**
   * Orient content into rows; Default is columns
   */
  row?: boolean
}

export function Container({
  center = false,
  children,
  flex,
  gap: naturalGap,
  nowrap = false,
  row = false,
  style: naturalStyle = {},
  ...rest
}: ContainerProps) {
  let gap = '1em'
  if (typeof naturalGap === 'number') {
    gap = `${naturalGap}px`
  } else if (typeof naturalGap === 'string') {
    gap = naturalGap
  }
  const style: React.CSSProperties = {
    display: 'flex',
    gap,
    flexDirection: row ? 'row' : 'column',
    flexWrap: nowrap ? 'nowrap' : 'wrap',
    alignItems: center ? 'center' : 'flex-start',
    flex,
  }
  const orientation = row ? 'row' : 'column'

  return (
    <div style={{ ...style, ...naturalStyle }} {...rest}>
      <ContainerContext.Provider value={{ orientation }}>
        {children}
      </ContainerContext.Provider>
    </div>
  )
}

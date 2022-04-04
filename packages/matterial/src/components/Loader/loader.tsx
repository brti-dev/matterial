import { Color } from '../../interfaces/theme'
import cssColor from '../../lib/css-color'
import './loader.scss'

export type LoaderProps = React.ComponentPropsWithoutRef<'div'> & {
  /**
   * Thematic color or a CSS color string
   */
  color?: Color | string
  /**
   * Size in pixels; Default: 30
   */
  size?: number
}

export function Loader({
  color,
  size = 30,
  style: styleOverwrite = {},
  ...rest
}: LoaderProps): JSX.Element {
  const style = {
    '--size': `${size}px`,
    ...(color && { '--color': cssColor(color) }),
    ...styleOverwrite,
  }

  return (
    <div
      className="loader__container"
      style={style as React.CSSProperties}
      {...rest}
    >
      <div className="loader">
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
        <div className="loader__bar"></div>
      </div>
    </div>
  )
}

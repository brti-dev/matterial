import { Color } from 'interfaces/theme'
import cssColor from 'lib/css-color'
import './loader.scss'

export type LoaderProps = React.HTMLAttributes<HTMLDivElement> & {
  color?: Color | string
  size?: number
}

export function Loader({
  color,
  size = 30,
  style: styleOverwrite = {},
  ...rest
}: LoaderProps) {
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

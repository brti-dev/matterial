import { ColoredElement } from '../../interfaces/theme'
import useColor from '../../lib/use-color'
import './loader.scss'

export interface LoaderProps
  extends React.ComponentPropsWithoutRef<'div'>,
    ColoredElement {
  /**
   * Size in pixels; Default: 30
   */
  size?: number
}

export function Loader({
  color: naturalColor,
  size = 30,
  style: naturalStyle = {},
  ...rest
}: LoaderProps): JSX.Element {
  const color = useColor(naturalColor)

  const style = {
    '--size': `${size}px`,
    ...color.style,
    ...naturalStyle,
  }

  return (
    <div className="loader__container" style={style} {...rest}>
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

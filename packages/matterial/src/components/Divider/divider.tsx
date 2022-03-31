import classnames from '../../lib/classnames'

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

export function Divider(props: DividerProps) {
  return <hr {...props} className={classnames('divider', props.className)} />
}

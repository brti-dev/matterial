import classnames from 'lib/classnames'

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

export function Divider(props: DividerProps) {
  return <hr className={classnames('divider', props.className)} {...props} />
}

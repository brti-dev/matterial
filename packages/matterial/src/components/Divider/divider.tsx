import classnames from '../../lib/classnames'

export type DividerProps = React.ComponentPropsWithoutRef<'hr'>

export function Divider(props: DividerProps): JSX.Element {
  return <hr {...props} className={classnames('divider', props.className)} />
}

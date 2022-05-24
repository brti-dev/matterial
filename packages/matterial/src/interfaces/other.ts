export type DateTimeType = Date | string | number

/**
 * Component with aria label
 * @usage type Props = Props_base & (AriaLabelledBy | AriaLabel)
 */
export type AriaLabel = {
  label: string
  labelledBy?: never
}
export type AriaLabelledBy = {
  labelledBy: string
  label?: never
}

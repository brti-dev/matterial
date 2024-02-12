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

export type InsertContent = {
  /**
   * Content to put on the RIGHT side of children/main content
   */
  append?: React.ReactNode

  /**
   * Content to put on the LEFT side of children/main content
   */
  prepend?: React.ReactNode
}

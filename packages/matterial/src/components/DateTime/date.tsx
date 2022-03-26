// Old methods
// import parseISO from 'date-fns/parseISO'
// import format from 'date-fns/format'

import { DateTimeType } from 'interfaces/other'

export type DateTimeProps = React.HTMLAttributes<HTMLTimeElement> & {
  date: DateTimeType
  format?: 'default' | 'yy-MM-dd'
}

export default function DateTime({ date, format, ...rest }: DateTimeProps) {
  const dateStr = date.toString()
  const dateParsed = date instanceof Date ? date : new Date(date)
  let dateOut: string

  if (format === 'yy-MM-dd') {
    dateOut = `${dateParsed.getFullYear().toString().substring(2)}-${
      dateParsed.getMonth() + 1
    }-${dateParsed.getDate()}`
  } else {
    dateOut = dateParsed.toDateString()
  }

  return (
    <time dateTime={dateStr} {...rest}>
      {dateOut}
    </time>
  )
}

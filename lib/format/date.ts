import 'intl'
import 'intl/locale-data/jsonp/en'

export const toHumanReadableDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(date)
}

export function convertTimeStringToMinutes(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number) // map(Number) = map(item => Number(item))

  return hours * 60 + minutes
}

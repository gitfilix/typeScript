// utility date conversion
export const dateStringToDate = (dateString: string): Date => {
  // 28/11/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => {
      return parseInt(value)
    })

  // new date Format: year, month -1 (jan: 0), day  
  return new Date(dateParts[2], dateParts[1] -1, dateParts[0])
}
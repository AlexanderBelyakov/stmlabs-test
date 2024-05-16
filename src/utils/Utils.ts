export function transformDate(dateString: string) {
  // const date = dateString.split('T')[0]
  // const res = dateString.split('T')[0].split('-').reverse().join('.')
  return dateString.split("T")[0].split("-").reverse().join(".");
}

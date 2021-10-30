export function addDays(date: Date, days: number) {
  const newDate = new Date(date.getTime());
  newDate.setDate(date.getDate() + days);

  return newDate;
}

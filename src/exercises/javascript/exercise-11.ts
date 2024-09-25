/**
 * Implement a function that takes two date strings (in the format "YYYY-MM-DD") and returns
 * the number of days between them.
 *
 * Input: "2024-08-14", "2024-08-20"
 * Output: 6
 */

export const exercise11 = (date1: string, date2: string): number => {
  const firstDate = new Date(date1);
  const secondDate = new Date(date2);

  const differenceInTime = Math.abs(secondDate.getTime() - firstDate.getTime());

  const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

  return differenceInDays;
};

/**
 * Implement a function that takes a string of space separated numbers,
 * and returns a string with the highest and lowest number separated by space.
 *
 * Input: "1 2 -3 4 16"
 * Output: "16 -3"
 */

export const exercise1 = (input: string): string => {
  const numArray = input.trim().split(" ").map(Number);

  numArray.sort((a, b) => a - b);

  const min = numArray[0];
  const max = numArray[numArray.length - 1];

  return `${max} ${min}`;
};

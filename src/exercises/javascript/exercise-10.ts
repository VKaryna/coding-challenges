/**
 * Implement a function that takes an array of asynchronous functions (each returning a promise)
 * and executes them one after another, passing the result of each function to the next in the sequence.
 * Each asynchronous function accepts a number as a parameter and also returns a number.
 * If any function throws an error, the value passed to the next function should be `0`.
 * The function should return a promise that resolves with the final result.
 *
 * Input: [asyncFunc1, asyncFunc2, asyncFunc3]
 * Output: A promise that resolves with the final result.
 */

export const exercise10 = (
  input: ((arg: number) => Promise<number>)[]
): Promise<number> => {
  return input.reduce(async (inputPromise, currentPromise) => {
    try {
      const result = await inputPromise;
      return await currentPromise(result);
    } catch {
      return 0;
    }
  }, Promise.resolve(0));
};

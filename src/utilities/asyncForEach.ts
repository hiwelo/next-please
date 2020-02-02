/**
 * Loops over the provided array with an async function and wait each time for
 * the callback to return a result
 */
async function asyncForEach<T>(
  array: T[],
  callback: (item: T, index: number, array: T[]) => void,
): Promise<void> {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

export default asyncForEach;

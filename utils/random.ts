/**
 * Returns a random subset of 3 items from the given array.
 * @param {Array} array - The array to select items from.
 * @returns {Array} A random subset of 3 items from the array.
 */
export const getRandomItems = (array: string[]) => {
  if (array.length < 3) {
    throw new Error("Array must contain at least 3 items.");
  }

  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

/**
 * Returns random items from an array.
 * @param {Array} array - The array to select items from.
 * @param {number} count - The number of items to select.
 * @returns {Array} - The selected items.
 */
export const getRandomItems = (array: string[], count = 3) => {
  if (array.length < 1) {
    throw new Error("Array must contain at least 1 items.");
  }

  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

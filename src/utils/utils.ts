/**
 * https://stackoverflow.com/a/12646864
 * @function shuffleArray
 * @param {Array} array any type items array
 * @returns {Array} shuffled array
 */
export const shuffleArray = (array: any[]) => {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

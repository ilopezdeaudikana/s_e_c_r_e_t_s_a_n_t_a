/**
 * @function shuffleArray
 * @param {Array} array any type items array
 * @returns {Array} shuffled array
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const mutated = [...array]
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mutated[i], mutated[j]] = [mutated[j], mutated[i]];
  }
  return mutated;
};


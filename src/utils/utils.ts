import secureRandomInRange from 'random-number-csprng';

/**
 * https://stackoverflow.com/a/12646864
 * @function shuffleArray
 * @param {Array} array any type items array
 * @returns {Array} shuffled array
 */
export const shuffleArray = (array: any[], randomNumbers: number[]): any[] => {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    const j = randomNumbers[length - i - 1]; 
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * https://stackoverflow.com/questions/49003363/cryptographically-secure-array-shuffle
 * @function secureShuffle
 * @param {Array} array any type items array
 * @returns {Array} shuffled array
 */

export const secureShuffle = async (array: any[]) : Promise<any[]> => {
  const promises = [];

  // asynchronously generate an array of random numbers using a CSPRNG
  for (let i = array.length - 1; i > 0; i--) {
    promises.push(secureRandomInRange(0, i));
  }

  const randomNumbers = await Promise.all(promises);

  // apply durstenfeld shuffle with previously generated random numbers
  return shuffleArray(array, randomNumbers);
}

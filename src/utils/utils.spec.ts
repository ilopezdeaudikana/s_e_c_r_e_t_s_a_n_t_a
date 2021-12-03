import { secureShuffle } from './utils';

describe('secureShuffle', () => {
  it('should shuffle an array', () => {
    const numbersArray = [1, 2, 3, 4, 5, 6, 7];
    secureShuffle(numbersArray);
    expect(numbersArray.length).toBe(7);
    for (let index = 1; index <= numbersArray.length; index++) {
      expect(numbersArray.includes(index)).toBe(true);
    }
  });
});

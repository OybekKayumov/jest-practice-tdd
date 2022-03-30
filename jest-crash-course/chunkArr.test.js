const chunkArr = require('./chunkArr.js')

// check if the function is exist (1)
test('chunkArr function exist', () => {
  expect(chunkArr).toBeDefined();
});

test('chunk an array of 10 values with length of 2', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  const chunkedArr = chunkArr(numbers, len);

  // expect(chunkedArr).toBe([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);  //! error
  expect(chunkedArr).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk an array of 3 values with length of 1', () => {
  const numbers = [11, 22, 33];
  const len = 1;
  const chunkedArr = chunkArr(numbers, len);

  expect(chunkedArr).toEqual([[11], [22], [33]]);
});
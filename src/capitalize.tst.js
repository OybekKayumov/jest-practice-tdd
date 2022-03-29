const capitalize = require('./capitalize.js');

describe('capitalize', () => {
  test('given string', () => {
    expect(capitalize('test')).toBe('Test');
  })

  test('given empty string', () => {
    expect(() => capitalize(''))
        .toThrow('empty string exception');
  })

  test('given alphabetic-numeric string', () => {
    expect(() => capitalize('2test5test'))
        .toThrow('string has non-alphabetic characters');
  })

})



const capitalize = require('./capitalize');

describe('capitalize', () => {
  test('given string', () => { 
    expect(capitalize('hello')).toBe('Hello');
  })

  test('given empty string', () => { 
    expect(() => capitalize('')).toThrow('empty string...');
  })

  test('given alphabetic-numeric string', () => { 
    expect(() => capitalize('1hello5how3are8you'))
      .toThrow('string has non-alphabetic characters');
  })
})
const Calculator = require('./calculator.js');

const calculator1 = new Calculator();

describe('add()', () => {
  test('given two numbers', () => {
    expect(calculator1.add(1,2)).toBe(3)
  })

  test('given two numbers', () => {
    expect(calculator1.add(-1,-2)).toBe(-3)
  })

  test('given two numbers', () => {
    expect(calculator1.add(3,4)).toBe(7)
  })
})

describe('subtract()', () => {
  test('given two numbers', () => {
    expect(calculator1.subtract(1,2)).toBe(-1)
  })

  test('given two numbers', () => {
    expect(calculator1.subtract(-1,-2)).toBe(1)
  })

  test('given two numbers', () => {
    expect(calculator1.subtract(3,4)).toBe(-1)
  })
})

describe('multiply()', () => {
  test('given two numbers', () => {
    expect(calculator1.multiply(1,2)).toBe(2)
  })

  test('given two numbers', () => {
    expect(calculator1.multiply(-1,-2)).toBe(2)
  })

  test('given two numbers', () => {
    expect(calculator1.multiply(3,4)).toBe(12)
  })
})

describe('divide()', () => {
  test('given two numbers', () => {
    expect(calculator1.divide(8,2)).toBe(4)
  })

  test('given two numbers', () => {
    expect(calculator1.divide(-6,-2)).toBe(3)
  })

  test('given two numbers', () => {
    expect(() => calculator1.divide(3, 0))
          .toThrow('divide by zero exception')
  })
})

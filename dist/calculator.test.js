const Calculator = require('./calculator.js')

const calculator = new Calculator();

describe('add()', () => {
  test('given 2 numbers', () => {
    expect(calculator.add(2, 8)).toBe(10)
  })

  test('given 2 numbers', () => {
    expect(calculator.add(-2, -8)).toBe(-10)
  })

  test('given 2 numbers', () => {
    expect(calculator.add(-2, 8)).toBe(6)
  })
})

describe('subtract()', () => {
  test('given 2 numbers', () => {
    expect(calculator.subtract(2, 8)).toBe(-6)
  })

  test('given 2 numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1)
  })

  test('given 2 numbers', () => {
    expect(calculator.subtract(4, -5)).toBe(9)
  })
})

describe('multiply()', () => {
  test('given 2 numbers', () => {
    expect(calculator.multiply(2, 8)).toBe(16)
  })

  test('given 2 numbers', () => {
    expect(calculator.multiply(-1, -2)).toBe(2)
  })

  test('given 2 numbers', () => {
    expect(calculator.multiply(4, -5)).toBe(-20)
  })
})

describe('divide()', () => {
  test('given 2 numbers', () => {
    expect(calculator.divide(-6, -2)).toBe(3)
  })

  test('given 2 numbers', () => {
    expect(calculator.divide(-8, -2)).toBe(4)
  })

  test('given 2 numbers', () => {
    expect(() => calculator.divide(4, 0))
      .toThrow('divide by zero')
  })
})

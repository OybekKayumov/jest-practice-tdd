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



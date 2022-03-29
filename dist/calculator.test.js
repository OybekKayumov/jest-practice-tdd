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




const functions = require('./functions');

test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

//CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
test('should be null', () => {
  expect(functions.isNull()).toBeNull()
})

// falsy null
test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

// falsy zero
test('should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy()
})

// falsy undefined
test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
})
const isAnagram = require('./anagram')

// check for function (2)
test('isAnagram function exist', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});
const isAnagram = require('./anagram')

// check for function (2)
test('isAnagram function exist', () => {
  expect(typeof isAnagram).toEqual('function');
});

test('cinema is an anagram of iceman', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

// spaces, uppercases, characters
test(' "Dormitory" is an anagram of "dirty room#!*" ', () => {
  expect(isAnagram('Dormitory', 'dirty room#!* ')).toBeTruthy();
});

test(' "Hello" is NOT  an anagram of "Aloha" ', () => {
  expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});
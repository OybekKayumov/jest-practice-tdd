const reverseStr = require('./reverseStr.js')

// check if the function is exist
test('reversStr function exist', () => {
  expect(reverseStr).toBeDefined();
});

test('string reverses', () => {
  // expect(reverseStr('hello')).toEqual('olleh');   //* test is ok
  expect(reverseStr('freesync')).toBe('cnyseerf');
});

// check if the str has a UpperCase
test('string reverses with uppercase', () => {  
  expect(reverseStr('FreeSync')).toEqual('cnyseerf');
});
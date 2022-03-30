const reverseStr = require('./reverseStr.js')

// check if the function is exist
test('reversStr function exist', () => {
  expect(reverseStr).toBeDefined();
});

test('string reverses', () => {
  // expect(reverseStr('hello')).toEqual('olleh');   //* test is ok
  expect(reverseStr('freesync')).toBe('cnyseerf');
});

test('string reverses with uppercase', () => {  
  expect(reverseStr('FreeSync')).toEqual('cnyseerf');
});
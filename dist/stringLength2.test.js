const stringLength = require('./stringLength2.js')
// const sum = require('./stringLength2.js')

it('string length', () => {
  expect(stringLength('myString')).toBe(8);
})

it('string length out of bound', () => {
  expect(() => stringLength("myString-11"))
    .toThrow('length is out of range (1-10)');
  expect(() => stringLength(""))
    .toThrow('length is out of range (1-10)');
});

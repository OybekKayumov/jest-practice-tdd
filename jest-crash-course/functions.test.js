const functions = require('./functions');

//todo run before and after each test in this file
beforeEach(() => initDataBase());
afterEach(() => closeDataBase());

const initDataBase = () => console.log('DataBase Initialized...');
const closeDataBase = () => console.log('DataBase Closed...');




//todo toBe

test('adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4)
});


//todo not

test('adds 2 + 2 to NOT equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5)
});

//? CHECK FOR TRUTHY & FALSY VALUES
//todo toBeNull matches only null

test('should be null', () => {
  expect(functions.isNull()).toBeNull()
});


//todo falsy null

test('should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
});


//todo falsy zero

test('should be falsy', () => {
  expect(functions.checkValue(0)).toBeFalsy()
});


//todo falsy undefined

test('should be falsy', () => {
  expect(functions.checkValue(undefined)).toBeFalsy()
});


//todo use toEqual to test objects or an arrays, not use toBe

test('user should be Bob Bilan object', () => {
  //! error:
// expect(functions.createUser()).toBe({ firstName: 'Bob', lastName: "Bilan"});
  expect(functions.createUser()).toEqual({ firstName: 'Bob', lastName: "Bilan"});
});


//todo less than and greater than

test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// toBeLessThanOrEqual
test('should be under 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});


//todo Regex

test('there is bo I in team', () => {
  expect('team').not.toMatch(/I/);  //* teamI will fail
});

// key sensitive
test('there is bo I in team', () => {
  expect('team').not.toMatch(/I/i); //* teamIi will fail
});


//todo Arrays
// toContain

test('Admin should be in usernames', () => {
  usernames = ['john', 'karen', 'admin', 'susan']
  expect(usernames).toContain('admin');
});


//todo run: npm i axios
//fetch, working wih async data

// test('user fetched name should be Leanne Graham', () => {
//   expect.assertions(1);
//   return functions.fetchUser().then(data => {
//       expect(data.name).toEqual('Leanne Graham');
//     });
// });

// test('user fetched name should be Leanne Graham', async () => {
//   expect.assertions(1);
//   const data = await functions.fetchUser();
//   expect(data.name).toEqual('Leanne Graham');  
// });

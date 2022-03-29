const functions = {
  add: (num1 , num2) => num1 + num2,
  // add: function(num1, num2) {
  //   return num1 + num2;
  // }
  isNull: () => null,  //! => undefined returns Error
  checkValue: x => x,
  createUser: () => {
    const user = { firstName: 'Bob'};
    user['lastName'] = 'Bilan';
    return user;
  }
};

module.exports = functions;
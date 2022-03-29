const capitalize = (string) => {

  if (string.length === 0)
      throw new Error('empty string exception');
  
  if (!(/[a-zA-Z]/).test(string.charAt(0)))
  throw new Error('string has non-alphabetic characters');

  return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = capitalize;
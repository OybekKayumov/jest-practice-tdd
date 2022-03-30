const reverseStr  = (str) => {
  return str
    .toLowerCase()
    .split('')
    .reverse()
    .join('');  
}

module.exports = reverseStr;

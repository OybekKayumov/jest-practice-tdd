const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) 
    throw new Error('length is out of range (1-10)');
    return string.length;    
}

module.exports = stringLength;
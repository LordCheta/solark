const notEmpty = (inputValue) => {
  if (typeof inputValue != 'undefined') {
    if (typeof inputValue == 'string') {
      inputValue = inputValue.trim();
    }
    return inputValue.length !== 0;
  }else{
    return 'undefined';
  }
}

module.exports = {
  notEmpty
}

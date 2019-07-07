const notEmpty = (inputValue) => {
  inputValue = inputValue.trim()
  if(!inputValue) return false
  return true
}

module.exports = {
  notEmpty
}

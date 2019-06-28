module.exports = function veryLongInput() {
  return [...Array(2000)].map(_ => 'a').join('b')
}

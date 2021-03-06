// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;


// function reverseInt(n) {
//   let arr = n.toString().split('')
//   if (Math.sign(n) === -1) {
//     arr.shift()
//     arr.reverse().unshift('-')
//     return parseInt(arr.join(''))
//   } else {
//     return parseInt(arr.reverse().join(''))
//   }
// }
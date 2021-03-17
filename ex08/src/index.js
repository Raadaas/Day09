//Only change code below this line
function logicalOrOperators(num) {
  if (num < 20 || num > 30) {
    return "Out";
  }
  return "In";
}
console.log(logicalOrOperators(0));
console.log(logicalOrOperators(9));
console.log(logicalOrOperators(20));
console.log(logicalOrOperators(23));
console.log(logicalOrOperators(30));
console.log(logicalOrOperators(31));
console.log(logicalOrOperators(105));
//Only change code above this line
module.exports = logicalOrOperators;

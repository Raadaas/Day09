//Only change code below this line
function logicalAndOperators(num) {
  if (num >= 40 && num <= 80) {
    return "Yes";
  }
  return "No";
}
console.log(logicalAndOperators(0));
console.log(logicalAndOperators(24));
console.log(logicalAndOperators(45));
console.log(logicalAndOperators(57));
console.log(logicalAndOperators(100));
//Only change code above this line
module.exports = logicalAndOperators;

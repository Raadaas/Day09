//Only change code below this line
function myForLoop1() {
  var evenNumbers = "0";
  for(var i = 2; i <= 8; i+= 2){
evenNumbers += ", " + i;
  }
return evenNumbers;
}
function myForLoop2() {
  var evenInverseNumbers = "8";
  for(var i = 6; i>=0; i-=2){
    evenInverseNumbers += "; " + i;
  }
  return evenInverseNumbers;

}
myForLoop1();
myForLoop2();
console.log(myForLoop1());
console.log(myForLoop2());
//Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2,
};

function feetToInch(number){
  let feet = number;
  let inch = feet * 12;
  return inch;
}
let myFeet = 100;
let inch = feetToInch(myFeet);
console.log(myFeet,'Feet is', inch,'Inch');

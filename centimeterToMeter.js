function centimeterToMeter (number){
  let centimeter = number;
  let meter = centimeter / 100;
  return meter;
}

let myCentimeter = 1000;
let myMeter = centimeterToMeter(myCentimeter);
console.log(myCentimeter, 'Centimeter is:', myMeter);
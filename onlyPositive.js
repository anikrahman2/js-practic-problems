let numbers = [20, 22, 25, 40, 34, 30, 45, 56, 100, 45, -45, 22, 20, 40, 30];
function onlyPositive(numbers) {
  let onlyPositiveNumbers = []
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number >= 0) {
      onlyPositiveNumbers.push(number);
    }
    else {
      break;
    }
  }
  return onlyPositiveNumbers;
}

let onlyPositiveArray = onlyPositive(numbers);
console.log(onlyPositiveArray);
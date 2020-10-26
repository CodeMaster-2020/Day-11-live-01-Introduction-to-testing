// This function should return true if numberToCheck
// is multiple of targetNumber otherwise false
function isMultiple(targetNumber, numberToCheck) {
  return numberToCheck % targetNumber === 0;
}

function printNumber(num) {
  if (isMultiple(3, num) && isMultiple(5, num)) {
    return "FizzBuzz";
  } else if (isMultiple(3, num)) {
    return "Fizz";
  } else if (isMultiple(5, num)) {
    return "Buzz";
  } else {
    return num.toString();
  }
}

function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    console.log(printNumber(i));
  }
}

module.exports = {
  isMultiple: isMultiple,
  printNumber: printNumber,
  fizzBuzz: fizzBuzz
};

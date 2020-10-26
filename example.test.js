const isMultiple = require("./example").isMultiple;
const fizzBuzz = require("./example").fizzBuzz;
const printNumber = require("./example").printNumber;

test("10 is multiple of 5", () => {
  expect(isMultiple(5, 10)).toBe(true);
});

test("10 is not multiple of 7", () => {
  expect(isMultiple(7, 10)).toBe(false);
});

test("3 should be Fizz", () => {
  expect(printNumber(3)).toBe("Fizz");
});

test("5 should be Buzz", () => {
  expect(printNumber(5)).toBe("Buzz");
});

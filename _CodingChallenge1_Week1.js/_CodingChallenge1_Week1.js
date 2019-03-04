// challenge 1

var ch1;

function FizzBuzzDivison(ch1) {
  // positive int
  if (ch1 % 3 === 0 && ch1 % 5 === 0) {
    return 'Fizz Buzz';
  } else if (ch1 % 3 === 0) {
    return 'Fizz';
  } else if (ch1 % 5 === 0) {
    return 'Buzz';
  } else return ch1.toString();
}

// challenege test
// console.log(FizzBuzzDivison(7));
// console.log(FizzBuzzDivison(14));

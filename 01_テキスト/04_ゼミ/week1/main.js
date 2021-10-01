const fizzBuss = function(number) {
  for (let n = 0; n < number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      // n を 3 で割ったあまりが 0
      console.log("Fizz")
    } else if (n % 5 === 0) {
      // n を 5 で割ったあまりが 0
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}

fizzBuss(100)

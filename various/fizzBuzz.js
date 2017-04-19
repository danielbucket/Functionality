  const fizzBuzz = (input) => {
  for(i = 0; i < input; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
      return "FizzBuzz";
    };

    if ( i % 3 === 0) {
      return "Fizz";
    };

    if (i % 5 === 0) {
      return "Buzz";
    };

  };
};

fizzBuzz(3)

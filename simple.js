let isPrime = number => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function cacheble(fun) {
  let numberArr = [];
  let resultArr = [];
  let innerFunction = number => {
    // console.log(number);
    numberArr.push(number);
    for (let i = 0; i <= numberArr.length; i++) {
      if (numberArr.length === 1) {
        // console.log("if");
        resultArr.push(fun(number));
        return fun(number);
      } else {
        if (numberArr[i] === number) {
          //   console.log("if in else");
          return resultArr[i];
        } else {
          //   console.log("else in else");
          resultArr.push(fun(number));
          return fun(number);
        }
      }
    }
    // console.log(fun(number));
  };

  return innerFunction;
}

isPrime = cacheble(isPrime);

console.log(isPrime(5)); //it will call actual is prime internally and save result
console.log(isPrime(13)); //it will call actual is prime internally and save result
console.log(isPrime(5)); //it will return old result and not call isPrime internally

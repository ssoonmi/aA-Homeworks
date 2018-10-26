function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");

function fizzbuzz(array) {
  var new_arr = [];
  array.forEach ( function (el){
    if ((el % 3 == 0 || el % 5 == 0) && !(el % 3 == 0 && el % 5 == 0)) {
      new_arr.push(el);
    }
  } )
  console.log(new_arr);
}

fizzbuzz([1,2,3,4,5,15]);

function isPrime(num) {
  n = num - 1;
  while (n > 1) {
    if (num % n == 0 ){
      return false;
    }
    n--;
  }
  return true;
}

console.log(isPrime(2));

console.log(isPrime(4));

console.log(isPrime(15485863));

console.log(isPrime(3548563));

function sumOfNPrimes(n) {
  function firstNPrimes(n) {
    if (n < 1) {
      return [];
    }
    let arr = [];
    let num = 2;
    while (n > 0) {
      while (!isPrime(num)) {
        num++;
      }
      arr.push(num);
      num++;
      n--;
    }
    return arr;
  }

  return firstNPrimes(n).reduce((total, el) => {return total + el;}, 0);
}

console.log(sumOfNPrimes(0));
console.log(sumOfNPrimes(1));
console.log(sumOfNPrimes(2));
console.log(sumOfNPrimes(3));
console.log(sumOfNPrimes(4));

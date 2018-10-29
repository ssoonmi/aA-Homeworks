function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

// madLib('make', 'best', 'guac');

function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
}

// isSubstring("time to program", "time");
// isSubstring("Jump for joy", "joys");

function fizzbuzz(array) {
  var new_arr = [];
  array.forEach ( function (el){
    if ((el % 3 == 0 || el % 5 == 0) && !(el % 3 == 0 && el % 5 == 0)) {
      new_arr.push(el);
    }
  } )
  console.log(new_arr);
}

// fizzbuzz([1,2,3,4,5,15]);

function isPrime(num) {
  let n = num - 1;
  while (n > 1) {
    if (num % n == 0 ){
      return false;
    }
    n--;
  }
  return true;
}

// console.log(isPrime(2));
//
// console.log(isPrime(4));
//
// console.log(isPrime(15485863));
//
// console.log(isPrime(3548563));

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

// console.log(sumOfNPrimes(0));
// console.log(sumOfNPrimes(1));
// console.log(sumOfNPrimes(2));
// console.log(sumOfNPrimes(3));
// console.log(sumOfNPrimes(4));



// Part II
function titleize(arr, callback) {
  let newArr = arr.map((name) => {
    return `Mx. ${name} Jingleheimer Schmidt`
  });
  callback(newArr);
}

function printCallback(printEl) {
  console.log(printEl);
}


// titleize(["Mary", "Brian", "Leo"], printCallback);
//
// function Elephant(name, height, tricks){
//   this.name = name;
//   this.height = height;
//   this.tricks = tricks;
// }
//
// Elephant.prototype.trumpet = function(){
//   console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
// }
//
// Elephant.prototype.grow = function() {
//   this.height += 12;
// }
//
// Elephant.prototype.addTrick = function(trick) {
//   this.tricks.push(trick);
// }
//
// Elephant.prototype.play = function(){
//   let printTricks = this.tricks.map((trick) => {
//     return `${this.name} ${trick}`
//   });
//   printTricks.forEach(printCallback);
// }
//
// Elephant.paradeHelper = function(elephant) {
//   console.log(`${elephant.name} is trotting by!`);
// }

class Elephant {
  constructor(name, height, tricks){
    this.name = name;
    this.height = height;
    this.tricks = tricks;
  }
  trumpet() {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
  }
  grow(){
    this.height += 12;
  }
  addTrick(trick){
    this.tricks.push(trick);
  }
  play(){
    let printTricks = this.tricks.map((trick) => {
      return `${this.name} ${trick}`
    });
    printTricks.forEach(printCallback);
  }
  static paradeHelper(elephant) {
    console.log(`${elephant.name} is trotting by!`);
  }
}

// const dumbo = new Elephant('Dumbo',42,['loves peanuts']);
// dumbo.trumpet();
// dumbo.grow();
// dumbo.addTrick('balances ball');
// dumbo.play();
//
// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);
//
// let herd = [ellie, charlie, kate, micah];
// herd.forEach(Elephant.paradeHelper)

function dinerBreakfast() {
  let order = 'I\'d like cheesy scrambled eggs';
  const orderFood = (food) => {
    if (food) {
      order+= ` and ${food}`;
    }
    console.log(order+' please');
  };
  orderFood();
  return orderFood;
}

let bfastOrder = dinerBreakfast();
bfastOrder('chocolate chip pancakes');
bfastOrder('grits');

// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// reader.question("What is your name?\n> ", function (answer) {
//   console.log(`Hello ${answer}!`);
//
//   // Close the reader, which will allow the program to end because it
//   // is no longer waiting for any events.
//   reader.close();
// });

// console.log("Last program line");

//
// const readline = require('readline');
//
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// function addTwoNumbers(callback) {
//   // Notice how nowhere do I return anything here! You never return in
//   // async code. Since the caller will not wait for the result, you
//   // can't return anything to them.
//
//   reader.question("Enter #1: ", function (numString1) {
//     reader.question("Enter #2: ", function (numString2) {
//       const num1 = parseInt(numString1);
//       const num2 = parseInt(numString2);
//
//
//       console.log(`The result is: ${num1+num2}`);
//       reader.close()
//     });
//   });
// }
//
// addTwoNumbers(function (result) {
//   console.log(`The result as;ldifals is: ${result}`);
//   reader.close();
// });

// functionName('hello',1,anotherFunction)

function absurdTimes(numTimes, fn) {
  let i = 0;

  function loopStep() {
    if (i == numTimes) {
      // we're done, stop looping
      return;
    }

    fn();

    i++;
    // recursively call loopStep
    loopStep();
  }

  loopStep();
}

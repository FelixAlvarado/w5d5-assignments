
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback){
  if  (numsLeft > 0) {
    reader.question('What number would you like to add?', (res) => {
    let number = parseInt(res);
    sum += number;
    console.log(`The current sum is ${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });
  }
  if (numsLeft === 0) { completionCallback(sum);}
  
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
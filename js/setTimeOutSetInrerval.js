console.log('1');
console.log('2');

setTimeout(() => {
  console.log('timeout ');
}, 3000);

console.log('4');
console.log('5');
console.log('6');

setTimeout(timeOut, 4000);

console.log('8');

function timeOut() {
  console.log('7');
}

// set interval similar to set time out---------

// normal setInterval use
setInterval(() => {
  console.log('number count ');
}, 3000);

// use function with parameters
let num = 0;
const clockInterval = setInterval(() => {
  num++;
  console.log('I love you ', num);

  if (num >= 10) {
    clearInterval(clockInterval);
  }
}, 2000);

# Javascript

## Promise

__Basic__

``` js
let cleanRoom = function() {
  return new Promise(function(resolve, reject) {
    let isClean = true

    if (isClean) {
      resolve('Cleaned');
    } else {
      reject('Not Clean')
    }
  })
}
```

__Promise All__

Wait for all promises finished

``` js
Promise.all([
  step1(),
  step2(),
  step3()
]).then(function() {
  console.log('all finished')
})
```

__Promise Race__

Wait for one of them finished

``` js
Promise.race([
  step1(),
  step2(),
  step3()
]).then(function() {
  console.log('one of them finished')
})
```

## Callback

__Basic Example__

``` js
let x = function() {
  console.log('i am called from inside a function');
};

let y = function(callback) {
  console.log('do something');
  callback();
};

y(x);
```

__More about callback__

``` js
let multiply = function(a, b) {
  return a * b;
}

let add = function(a, b) {
  return a + b;
}

let sub = function(a, b) {
  return a - b;
}

let calc = function(num1, num2, callback) {
  if (typeof callback !== 'function') {
    return;
  }

  return callback(num1, num2);
}

console.log(calc(2, 3, multiply));  // function expression

console.log(calc(2, 3, function() { // anonymous function
  return a / b;
}));
```
function fibo(num) {
  return num <= 1 ? num : fibo(num - 1) + fibo(num - 2);
}

let timers = {};

function timeDecorator(f, timer) {
  return function() {
    let start = performance.now()
    let result = f.apply(this, arguments);

    if(!timers[timer]) timers[timer] = 0;
    timers[timer] += performance.now() - start;
    return result;

  }
}

fibonacci = timeDecorator(fibo, 'fibo');
console.log(fibonacci(7));
console.log(timers.fibo);


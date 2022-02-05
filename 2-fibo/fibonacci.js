function fibo(num) {
  return num <= 1 ? num : fibo(num - 1) + fibo(num - 2);
}

function decorator(func) {
  let cache = new Map();
  return function(x) {
    if(cache.has(x)) {
      return cache.get(x);
    }
    let result = func(x);
    cache.set(x, result);
    return result;
  }
}

fibo = decorator(fibo);
console.log('first evocation result: ' + fibo(7));
console.log('result got from cache: ' + fibo(7));


function time (foo, arg) {
  console.time('time')
  foo(arg);
  console.timeEnd('time')
}
time(fibo, 10)

function fibo(num) {
  return num <= 1 ? num : fibo(num - 1) + fibo(num - 2);
}

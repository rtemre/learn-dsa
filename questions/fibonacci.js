// Check Fibonacci Number is valid or not

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 5

var fibonacciSeries = function (n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
};

console.log(fibonacciSeries(5)); // [0, 1, 1, 2, 3] 
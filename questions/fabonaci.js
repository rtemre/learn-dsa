function fabonaci(n) {
  if (n <= 1) return n;
  return fabonaci(n - 1) + fabonaci(n - 2);
}

console.log(fabonaci(5));
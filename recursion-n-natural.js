function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
  }
  
  console.log(sum(5));
  
  // Output: 15 (5 + 4 + 3 + 2 + 1)
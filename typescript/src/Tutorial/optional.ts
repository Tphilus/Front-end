function sum(message: string, ...numbers: number[]): string {
  const double = numbers.map((num) => num * 2);
  console.log(double);

  let total = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return `${message}${total} `;
}

const result = sum("Hello, Tphilus: ", 1,2,3,4,5,6);
console.log(result);


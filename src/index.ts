require('source-map-support').install();

export function multiply(a: number, b: number) {
  // throw new Error('error');
  return a * b;
}

console.log(multiply(2, 3));

// src/function_types.ts
function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

const subtract = (a: number, b: number): number => {
  const result = a - b;
  return result;
};

console.log(`Součet: ${add(1, 24)}`);
console.log(`Odečet: ${subtract(5, 2)}`);

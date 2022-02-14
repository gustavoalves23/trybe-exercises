const greeter = (name) => `Olá ${name}`;
const personAge = (name, age) => `${name} tem ${age} anos!`;
const add = (x, y) => x + y;
const sumArray = (numbers) => numbers.reduce(add, 0);
const triangle = (b, h) => (b * h) / 2;
const square = (l) => l ** 2;
const rectangle = (b, h) => b * h;
export { greeter, personAge, add, sumArray, triangle, square, rectangle };

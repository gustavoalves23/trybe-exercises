const greeter = (name: string):string => `Olá ${name}`;

const personAge = (name:string, age:number):string => `${name} tem ${age} anos!`;

const add  = (x:number, y:number):number => x + y;

const sumArray = (numbers: number[]):number => numbers.reduce(add, 0);

const triangle = (b:number, h:number):number => (b*h)/2;

const square = (l:number):number => l ** 2;

const rectangle = (b:number, h:number) => b * h;

export {greeter, personAge, add, sumArray, triangle, square, rectangle};
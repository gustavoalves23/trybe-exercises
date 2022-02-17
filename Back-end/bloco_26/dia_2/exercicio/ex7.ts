import { Pizza, slices } from './ex6';

type Common = 'Calabreza'|'Frango'|'Pepperoni';
type Veg = 'Marguerita'|'Palmito'|'Cogumelo';
type Sweet = 'Nutela'|'Goiabada com Queijo'|'Marshmallow';

interface PizzaComum extends Pizza {
  flavor: Common,
}

interface PizzaVeg extends Pizza {
  flavor: Veg
}

interface PizzaDoce extends Pizza {
  flavor: Sweet,
  slices: 4
}

const calabresa: PizzaComum = {
  flavor: "Calabreza",
  slices: 6
}

console.log(calabresa);

const frango: PizzaComum = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaComum = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVeg = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVeg = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaDoce = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);
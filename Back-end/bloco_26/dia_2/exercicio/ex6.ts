export type slices = 4|6|8;

export interface Pizza {
  flavor:string,
  slices: slices,
}

const Calabreza:Pizza = {
  flavor: 'Calabreza',
  slices: 8
}
const Marguerita:Pizza = {
  flavor: 'Marguerita',
  slices: 6
}
const Nutela:Pizza = {
  flavor: 'Nutela',
  slices: 4
}

console.log(Calabreza);

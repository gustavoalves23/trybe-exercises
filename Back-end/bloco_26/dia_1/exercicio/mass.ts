import * as utils from "./utils/convert";
import { exec } from "./utils/exec";

const values = [
  'kg',
  'hg',
  'dag',
  'g',
  'dg',
  'cg',
  'mg'
];

const convert = (valor:number, unidadeBase: string, unidadeParaConversao: string) => utils.convert(values, valor, unidadeBase, unidadeParaConversao);

exec(convert);

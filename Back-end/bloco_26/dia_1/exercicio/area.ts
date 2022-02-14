import * as utils from "./utils/convert";
import { exec } from "./utils/exec";

const values = [
  'km²',
  'hm²',
  'dam²',
  'm²',
  'dm²',
  'cm²',
  'mm²'
];

const convert = (valor:number, unidadeBase: string, unidadeParaConversao: string) => utils.convert(values, valor, unidadeBase, unidadeParaConversao);

exec(convert);
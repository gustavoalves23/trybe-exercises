import * as utils from "./utils/convert";
import { exec } from "./utils/exec";

const values = [
  'km³',
  'hm³',
  'dam³',
  'm³',
  'dm³',
  'cm³',
  'mm³'
];

const convert = (valor:number, unidadeBase: string, unidadeParaConversao: string) => utils.convert(values, valor, unidadeBase, unidadeParaConversao);

exec(convert);
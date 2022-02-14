import * as utils from "./utils/convert";
import { exec } from "./utils/exec";

const values = [
  'km',
  'hm',
  'dam',
  'm',
  'dm',
  'cm',
  'mm'
];

const convert = (valor:number, unidadeBase: string, unidadeParaConversao: string) => utils.convert(values, valor, unidadeBase, unidadeParaConversao);

exec(convert);
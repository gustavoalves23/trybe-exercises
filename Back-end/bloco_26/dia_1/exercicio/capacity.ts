import * as utils from "./utils/convert";
import { exec } from "./utils/exec";

const values = [
  'kl',
  'hl',
  'dal',
  'l',
  'dl',
  'cl',
  'ml'
];

const convert = (valor:number, unidadeBase: string, unidadeParaConversao: string) => utils.convert(values, valor, unidadeBase, unidadeParaConversao);

exec(convert);
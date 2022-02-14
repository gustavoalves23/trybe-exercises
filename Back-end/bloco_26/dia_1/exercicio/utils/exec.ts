import { getValues } from "./getValues";

export const exec = (convert:CallableFunction):void => {
  const { valor, unidadeBase, unidadeParaConversao } = getValues();
  console.log(convert(valor, unidadeBase, unidadeParaConversao));
}
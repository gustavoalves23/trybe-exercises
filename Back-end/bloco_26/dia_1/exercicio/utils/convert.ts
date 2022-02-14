export const convert = (values: string[],valor:number, unidadeBase: string, unidadeParaConversao: string) => {
  const baseValue = values.indexOf(unidadeBase);
  const conversionValue = values.indexOf(unidadeParaConversao);
  const value = valor * (10 ** (conversionValue - baseValue));
  return `${valor}${unidadeBase} é igual a ${value}${unidadeParaConversao}`
}
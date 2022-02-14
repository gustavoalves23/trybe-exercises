import readline from 'readline-sync';

type values = {
  valor: number;
  unidadeBase: string;
  unidadeParaConversao: string;
}

export const getValues = ():values => {
  const valor = readline.questionInt('Digite o valor: ');
  const unidadeBase = readline.question('Digite a unidade base: ');
  const unidadeParaConversao = readline.question('Digite a unidade para conversão: ');

  return {valor, unidadeBase, unidadeParaConversao};
} 
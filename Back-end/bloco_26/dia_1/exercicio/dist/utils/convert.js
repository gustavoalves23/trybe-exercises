"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const convert = (values, valor, unidadeBase, unidadeParaConversao) => {
    const baseValue = values.indexOf(unidadeBase);
    const conversionValue = values.indexOf(unidadeParaConversao);
    const value = valor * (Math.pow(10, (conversionValue - baseValue)));
    return `${valor}${unidadeBase} é igual a ${value}${unidadeParaConversao}`;
};
exports.convert = convert;

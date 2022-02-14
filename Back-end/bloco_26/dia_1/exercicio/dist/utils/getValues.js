"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValues = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const getValues = () => {
    const valor = readline_sync_1.default.questionInt('Digite o valor: ');
    const unidadeBase = readline_sync_1.default.question('Digite a unidade base: ');
    const unidadeParaConversao = readline_sync_1.default.question('Digite a unidade para conversão: ');
    return { valor, unidadeBase, unidadeParaConversao };
};
exports.getValues = getValues;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = void 0;
const getValues_1 = require("./getValues");
const exec = (convert) => {
    const { valor, unidadeBase, unidadeParaConversao } = (0, getValues_1.getValues)();
    console.log(convert(valor, unidadeBase, unidadeParaConversao));
};
exports.exec = exec;

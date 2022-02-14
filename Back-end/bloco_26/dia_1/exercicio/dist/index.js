"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const availableScripts = ['area', 'capacity', 'characters', 'length', 'mass'];
console.log('Scripts disponiveis:');
availableScripts.forEach((value, index) => console.log(`${index} - ${value}`));
const script = availableScripts[readline_sync_1.default.questionInt('Selectione o script: ')];
require(`./${script}`);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estudante {
    constructor(matricula, nome, notasDeProva, notasDeTrabalho) {
        this._matricula = matricula;
        this._name = nome;
        this._notasDeProva = notasDeProva;
        this._notasDeTrabalho = notasDeTrabalho;
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(mat) {
        if (mat) {
            this._matricula = mat;
        }
        else {
            console.log('invalid');
        }
    }
    get name() {
        return this._name;
    }
    set name(nam) {
        if (nam) {
            this._name = nam;
        }
        else {
            console.log('invalid');
        }
    }
    get sum() {
        const provaSum = this._notasDeProva.reduce((acc, act) => acc + act, 0);
        const trabalhosSum = this._notasDeTrabalho.reduce((acc, act) => acc + act, 0);
        const totalSum = provaSum + trabalhosSum;
        return totalSum;
    }
    get average() {
        return this.sum / 6;
    }
}
exports.default = Estudante;
const student1 = new Estudante('matricula1', 'Gustavo', [1, 2, 3, 4], [1, 2]);
console.log(student1.sum);
console.log(student1.average);

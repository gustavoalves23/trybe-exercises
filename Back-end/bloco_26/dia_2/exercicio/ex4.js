"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directions = exports.Doors = exports.Colors = void 0;
var Colors;
(function (Colors) {
    Colors["BLACK"] = "Preta";
    Colors["WHITE"] = "Branca";
    Colors["RED"] = "Vermelha";
    Colors["SILVER"] = "Prata";
})(Colors = exports.Colors || (exports.Colors = {}));
var Doors;
(function (Doors) {
    Doors["DRIVER"] = "Da pessoa motorista";
    Doors["RIDE"] = "Da pessoa carona";
    Doors["BEHIND_DRIVER"] = "De tr\u00E1s da pessoa motorista";
    Doors["BEHIND_RIDE"] = "De tr\u00E1s da pessoa carona";
})(Doors = exports.Doors || (exports.Doors = {}));
var Directions;
(function (Directions) {
    Directions["RIGHT"] = "Direita";
    Directions["LEFT"] = "Esquerda";
})(Directions = exports.Directions || (exports.Directions = {}));
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._door = doors;
    }
    honk() {
        console.log('Buzina');
    }
    openTheDoor(porta) {
        console.log(`Abrindo a porta ${porta}`);
    }
    closeTheDoor(porta) {
        console.log(`Fechando a porta ${porta}`);
    }
    turnOn() {
        console.log('Ligando o carro');
    }
    turnOff() {
        console.log('Desligando o carro');
    }
    speedUp() {
        console.log('Acelerando');
    }
    speedDown() {
        console.log('Desacelerando');
    }
    stop() {
        console.log('Parando o carro');
    }
    turn(Direction) {
        console.log(`Virando o carro para a ${Direction}`);
    }
}
exports.default = Car;

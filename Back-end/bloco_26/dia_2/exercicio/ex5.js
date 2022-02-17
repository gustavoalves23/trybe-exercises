"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ex4_1 = __importStar(require("./ex4"));
const car = new ex4_1.default('FIAT', ex4_1.Colors.BLACK, 4);
car.openTheDoor(ex4_1.Doors.DRIVER);
car.closeTheDoor(ex4_1.Doors.DRIVER);
car.turnOn();
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.LEFT);
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.RIGHT);
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.RIGHT);
car.speedDown();
car.stop();
car.openTheDoor(ex4_1.Doors.BEHIND_RIDE);
car.closeTheDoor(ex4_1.Doors.BEHIND_RIDE);
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.RIGHT);
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.LEFT);
car.speedUp();
car.speedDown();
car.turn(ex4_1.Directions.RIGHT);
car.speedDown();
car.stop();
car.openTheDoor(ex4_1.Doors.BEHIND_RIDE);
car.closeTheDoor(ex4_1.Doors.BEHIND_RIDE);
car.speedUp();

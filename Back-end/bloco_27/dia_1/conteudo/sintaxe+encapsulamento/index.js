"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tv {
    constructor(size, resolution, connections) {
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        this._connectedTo = '';
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(connection) {
        if (this._connections.some((existentConnections) => existentConnections = connection)) {
            this._connectedTo = connection;
            console.log(this._connectedTo);
        }
        else {
            console.log('Sorry, connection unavailable!');
        }
    }
    turnOn() {
        console.log(`
      Ligando TV de ${this._size} polegadas, resolução de ${this._resolution.width} por ${this._resolution.height} e com as seguintes conexões: 
      ${this._connections.reduce((acc, act) => acc + `${act}, `, '')}
    `);
    }
}
exports.default = Tv;
const tv = new Tv(32, { width: 1920, height: 1080 }, ['HDMI', 'DisplayPort']);
tv.connectedTo = 'HDMI';

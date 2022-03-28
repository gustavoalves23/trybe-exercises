type resolution =  {
  width: number
  height: number
}

export default class Tv {
  private _size: number;
  private _resolution: resolution;
  private _connections: string[];
  private _connectedTo: string;

  constructor(size: number, resolution: resolution, connections: string[]) {
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = ''
  }

  public get connectedTo():string {
    return this._connectedTo;
  }

  public set connectedTo(connection: string) {
    if (this._connections.some((existentConnections) => existentConnections = connection)) {
      this._connectedTo = connection;
      console.log(this._connectedTo);
    } else {
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

const tv = new Tv(32, {width: 1920, height: 1080}, ['HDMI', 'DisplayPort']);



tv.connectedTo = 'HDMI'
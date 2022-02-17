export enum Colors {
  BLACK = "Preta",
  WHITE = "Branca",
  RED = "Vermelha",
  SILVER = "Prata"
}

export enum Doors {
  DRIVER = "Da pessoa motorista",
  RIDE = "Da pessoa carona",
  BEHIND_DRIVER = "De trás da pessoa motorista",
  BEHIND_RIDE = "De trás da pessoa carona"
}

export enum Directions {
  RIGHT = 'Direita',
  LEFT = 'Esquerda'
}

interface Car {
  _brand: string,
  _color: string,
  _door: number
}

class Car {
  constructor(brand:string, color: Colors, doors:number ) {
    this._brand = brand;
    this._color = color;
    this._door = doors;
  }

  honk():void {
    console.log('Buzina');
  }

  openTheDoor(porta: Doors):void {
    console.log(`Abrindo a porta ${porta}`);
  }

  closeTheDoor(porta: Doors):void {
    console.log(`Fechando a porta ${porta}`);
  }

  turnOn():void {
    console.log('Ligando o carro');
  }

  turnOff():void {
    console.log('Desligando o carro');
  }

  speedUp():void {
    console.log('Acelerando');
  }

  speedDown():void {
    console.log('Desacelerando');
  }

  stop():void {
    console.log('Parando o carro'); 
  }

  turn(Direction: Directions):void {
    console.log(`Virando o carro para a ${Direction}`);
  }
}

export default Car;
export default class Estudante {
  private _matricula: string;
  private _name: string;
  private _notasDeProva: number[];
  private _notasDeTrabalho: number[];
  

  constructor(matricula: string, nome: string, notasDeProva: number[], notasDeTrabalho:number[] ) {
    this._matricula = matricula;
    this._name = nome;
    this._notasDeProva = notasDeProva;
    this._notasDeTrabalho = notasDeTrabalho;
  }

  public get matricula():string {
    return this._matricula;
  }

  public set matricula(mat:string) {
    if (mat) {
      this._matricula = mat;
    } else {
      console.log('invalid');
      
    }
  }

  public get name():string {
    return this._name;
  }

  public set name(nam:string) {
    if (nam) {
      this._name = nam;
    } else {
      console.log('invalid');
      
    }
  }

  public get sum():number {
    const provaSum = this._notasDeProva.reduce((acc, act) => acc + act, 0);
    const trabalhosSum = this._notasDeTrabalho.reduce((acc, act) => acc + act, 0);
    const totalSum = provaSum + trabalhosSum;
    return totalSum;
  }

  public get average():number {
    return this.sum / 6;
  }
}

const student1 = new Estudante('matricula1', 'Gustavo', [1,2,3,4], [1,2]);

console.log(student1.sum);

console.log(student1.average);


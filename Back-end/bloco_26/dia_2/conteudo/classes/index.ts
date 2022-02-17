class Dog {
  name: string;
  age: number;
  color: string;
  sex: 'male'|'female';
  weight: number;

  constructor(name:string, age:number, color:string, sex: 'male'|'female', weight: number) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.sex = sex;
    this.weight = weight;
  }

  woof = (word?: string) => {
    console.log(`${this.name} is woofing ${word || ''}!`);
  }

  eat = ():void => {
    this.weight += 1;
    console.log(`${this.name} eat, it new weight is ${this.weight}`);
    
  }
}

const dog = new Dog('André', 10, 'brown', 'male', 5);

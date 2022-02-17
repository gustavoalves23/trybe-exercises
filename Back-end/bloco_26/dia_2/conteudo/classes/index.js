"use strict";
class Dog {
    constructor(name, age, color, sex, weight) {
        this.woof = (word) => {
            console.log(`${this.name} is woofing ${word || ''}!`);
        };
        this.eat = () => {
            this.weight += 1;
            console.log(`${this.name} eat, it new weight is ${this.weight}`);
        };
        this.name = name;
        this.age = age;
        this.color = color;
        this.sex = sex;
        this.weight = weight;
    }
}
const dog = new Dog('André', 10, 'brown', 'male', 5);

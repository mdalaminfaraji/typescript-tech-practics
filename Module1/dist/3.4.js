"use strict";
{
    // Type guard using instance of
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        makeSound() {
            console.log("this is Animal sound");
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        makeBark() {
            console.log("this dog Bark");
        }
    }
    class Cat extends Animal {
        constructor(name, age) {
            super(name, age);
        }
        makeMaow() {
            console.log("this cat mao");
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMaow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('mr dog', 345);
    const cat = new Cat('mr cat', 435);
}

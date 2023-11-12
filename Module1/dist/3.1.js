"use strict";
{
    class Animal {
        // public name:string;
        // public Age:number;
        // public sound:string;
        constructor(name, Age, sound) {
            this.name = name;
            this.Age = Age;
            this.sound = sound;
            // this.name=name;
            // this.Age=Age;
            // this.sound=sound;
        }
        makeSound() {
            console.log(`this sound ${this.sound}`);
        }
    }
    const dog = new Animal('tom', 34, 'geo');
    dog.makeSound();
}

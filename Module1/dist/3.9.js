"use strict";
{
    //      implement
    class Car1 {
        startEngine() {
            console.log('hello I am startEngine');
        }
        stopEngine() {
            console.log("now i ma stop");
        }
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        area() {
            return this.height * this.width;
        }
    }
    const toy = new Car1(54, 345);
    const rectangle = toy.area();
    console.log(rectangle);
    class Vehicle2 {
    }
    class ToyotaCar extends Vehicle2 {
        startCar() {
            console.log('i ama abstract');
        }
        stopCar() {
            console.log("I am implement");
        }
    }
}

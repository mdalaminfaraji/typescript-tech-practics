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
}

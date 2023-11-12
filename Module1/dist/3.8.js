"use strict";
{
    // polymorphism
    class Person {
        getSleep() {
            console.log('8 hours per day');
        }
    }
    class Student extends Person {
        getSleep() {
            console.log("7 hours per day");
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("6 hours per day");
        }
    }
    function getSleepingPer(Params) {
        Params.getSleep();
    }
    const person1 = new Student();
    const person2 = new Developer();
    getSleepingPer(person1);
    getSleepingPer(person2);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(radius) {
            super();
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const areaShape = (param) => {
        console.log(param.getArea());
    };
    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(34, 54);
    const a = shape1.getArea();
    console.log(a);
    shape2.getArea();
    shape3.getArea();
    areaShape(shape1);
    areaShape(shape2);
    areaShape(shape3);
}

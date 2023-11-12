"use strict";
{
    //inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numofHours) {
            console.log(`${this.name} will sleep for ${numofHours}`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numofHours) {
            console.log(`${this.name} will take ${numofHours}`);
        }
    }
    const student1 = new Student("ala", 345, "dhaka");
    student1.getSleep(45);
    const teacher = new Teacher("ahmed", 345, "dhaka", "bsc");
    teacher.takeClass(3456);
}

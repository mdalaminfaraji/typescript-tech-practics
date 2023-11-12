{
  //inheritance

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numofHours: number) {
      console.log(`${this.name} will sleep for ${numofHours}`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
        super(name, age, address);
      this.designation = designation;
    }


    takeClass(numofHours: number) {
      console.log(`${this.name} will take ${numofHours}`);
    }
  }

  const student1 = new Student("ala", 345, "dhaka");
  student1.getSleep(45);

  const teacher = new Teacher("ahmed", 345, "dhaka", "bsc");
  teacher.takeClass(3456);
}

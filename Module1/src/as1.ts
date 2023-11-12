{
  // problem 1
  //  const useUnion =(Param:string|number)=>{
  //         if(typeof Param==='number'){
  //                 return Param*Param ;
  //         }
  //         else{
  //                 return Param.length;
  //         }
  //  }

  function useUnion(param: string | number): number {
    if (typeof param === "number") {
      return param ** 2;
    } else {
      return param.length;
    }
  }

  console.log(useUnion(10));

  //   problem2

  interface Person {
    name: string;
    age: number;
    phone?: number;
    address?: {
      city: string;
      street: string;
    };
  }

  function getAddressCity(param: Person): string | undefined {
    return param?.address?.city;
  }
  const person1: Person = {
    name: "alamin",
    age: 29,
    phone: 1701079350,
    address: {
      city: "kushtia",
      street: "kalishokpur",
    },
  };
  const city: string | undefined = getAddressCity(person1);
  console.log(city);

  // Problem3
  class Cat {
    name: string;
    age: string;
    constructor(name: string, age: string) {
      this.age = age;
      this.name = name;
    }
  }

  function isCat(param: Cat): param is Cat {
    return param instanceof Cat;
  }

  function checkCat(param: any) {
    if (isCat(param)) {
      console.log("yes, it's a cat");
    } else {
      console.log("no, it's not a cat");
    }
  }

  const cat1: Cat = new Cat("menu", "2 years");
  checkCat(cat1);

  // Problem 4

  function Total(param: (string | number)[]): number {
    let count: number = 0;
    for (let val of param) {
      if (typeof val === "number") {
        count = count + val;
      }
    }
    return count;
  }
  const mixedData: (string | number)[] = [1, "two", 3, "four", 5];

  const total = Total(mixedData) as number;
  console.log(total);

  // problem 5

  interface Car {
    make: string;

    model: string;
    year: number;
  }

  interface Driver {
    name: string;
    licenseNumber: string;
  }

  function CombineTwoObject<T, U>(car: T, driver: U): T & U {
    return { ...car, ...driver };
  }

  const car: Car = {
    make: "Toyata",
    model: "D-954",
    year: 2022,
  };
  const driver: Driver = {
    name: "alamin",
    licenseNumber: "a-89453",
  };
  const combineObject: Car & Driver = CombineTwoObject(car, driver);
  console.log(combineObject);

  // problem 6

  // function CalculateNumber(param:unknown){
  //         if(typeof param==number[])
  // }

  // problem 7

  function findFirstOccurrence<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
  }
  const numbers: number[] = [1, 2, 3, 4, 5, 2];
  const strings: string[] = ["apple", "banana",  "date", "apple"];
  const targetNumber = 2;
  const targetString = "cherry";

  const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
  const indexInStrings = findFirstOccurrence(strings, targetString);

  console.log(indexInNumbers); // Output: 1
  console.log(indexInStrings); // Output: 2


        // problem 8

        interface Product{
                name:string;
                price:number;
                quantity:number;
        }

        const arrayOfObject:Product[]=[
                {
                        name:"Fan",
                        price:545,
                        quantity:1,
                },
                {
                        name:"Light",
                        price:45,
                        quantity:1,  
                }
        ]

        function TotalCostOfProduct(param:Product[]):number{
                const totalCost=param.reduce((price, product)=>price +product.price,0);
                return totalCost;
        }

        console.log(TotalCostOfProduct(arrayOfObject));




}

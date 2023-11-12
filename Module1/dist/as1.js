"use strict";
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
    function useUnion(param) {
        if (typeof param === "number") {
            return param ** 2;
        }
        else {
            return param.length;
        }
    }
    console.log(useUnion(10));
    function getAddressCity(param) {
        var _a;
        return (_a = param === null || param === void 0 ? void 0 : param.address) === null || _a === void 0 ? void 0 : _a.city;
    }
    const person1 = {
        name: "alamin",
        age: 29,
        phone: 1701079350,
        address: {
            city: "kushtia",
            street: "kalishokpur",
        },
    };
    const city = getAddressCity(person1);
    console.log(city);
    // Problem3
    class Cat {
        constructor(name, age) {
            this.age = age;
            this.name = name;
        }
    }
    function isCat(param) {
        return param instanceof Cat;
    }
    function checkCat(param) {
        if (isCat(param)) {
            console.log("yes, it's a cat");
        }
        else {
            console.log("no, it's not a cat");
        }
    }
    const cat1 = new Cat("menu", "2 years");
    checkCat(cat1);
    // Problem 4
    function Total(param) {
        let count = 0;
        for (let val of param) {
            if (typeof val === "number") {
                count = count + val;
            }
        }
        return count;
    }
    const mixedData = [1, "two", 3, "four", 5];
    const total = Total(mixedData);
    console.log(total);
    function CombineTwoObject(car, driver) {
        return Object.assign(Object.assign({}, car), driver);
    }
    const car = {
        make: "Toyata",
        model: "D-954",
        year: 2022,
    };
    const driver = {
        name: "alamin",
        licenseNumber: "a-89453",
    };
    const combineObject = CombineTwoObject(car, driver);
    console.log(combineObject);
    // problem 6
    // function CalculateNumber(param:unknown){
    //         if(typeof param==number[])
    // }
    // problem 7
    function findFirstOccurrence(arr, target) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
    const numbers = [1, 2, 3, 4, 5, 2];
    const strings = ["apple", "banana", "date", "apple"];
    const targetNumber = 2;
    const targetString = "cherry";
    const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
    const indexInStrings = findFirstOccurrence(strings, targetString);
    console.log(indexInNumbers); // Output: 1
    console.log(indexInStrings); // Output: 2
    const arrayOfObject = [
        {
            name: "Fan",
            price: 545,
            quantity: 1,
        },
        {
            name: "Light",
            price: 45,
            quantity: 1,
        }
    ];
    function TotalCostOfProduct(param) {
        const totalCost = param.reduce((price, product) => price + product.price, 0);
        return totalCost;
    }
    console.log(TotalCostOfProduct(arrayOfObject));
}

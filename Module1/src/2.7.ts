{
        // Generic constraint with keyof

        type Vehicle ={
                bike:string;
                car:string;
                ship:string;
        }

        type Owner = "bike" | "Car" | "ship" ;//manually

        type Owner2 =keyof Vehicle;

        const person:Owner2="bike";
        // extends "name"|"age"
        const getPropertyValue=<X, Y extends keyof X>(obj:X, key:Y)=>{
                return obj[key]


        }
        const user={
                name:'l',
                age:34
        }


        const result1=getPropertyValue(user, "name");

}
"use strict";
{
    const add = (num1, num2) => {
        if (typeof num1 === 'number' && typeof num2 === "number") {
            return num1 + num2;
        }
        else {
            return num1.toString() + num2.toString();
        }
    };
    const val = add("34", 34);
    console.log(val);
    const login = (user) => {
        if ("role" in user) {
            console.log(`${user.role}`);
        }
        else {
            console.log(`${user.name}`);
        }
    };
}

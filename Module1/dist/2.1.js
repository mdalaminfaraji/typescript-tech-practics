"use strict";
{
    let anything;
    anything = "toy";
    anything = 345;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            return `The value is ${parseFloat(value) + 345}`;
        }
        if (typeof value == "number") {
            return value;
        }
    };
    const result1 = kgToGm(3453);
    const result2 = kgToGm("34");
    console.log(result1, result2);
}

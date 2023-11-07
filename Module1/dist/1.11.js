"use strict";
var _a;
{
    // ternary operator
    const age = 30;
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult);
    //nullish coalescing operator
    //null/undefined --->decision making
    const isAuthenticated = null;
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log(result1);
    const user = {
        name: "alamin",
        address: {
            location: "kushtia",
            houseNo: 678,
            permanentAddaress: "Narai",
            address: "lo"
        }
    };
    console.log((_a = user.address.address) !== null && _a !== void 0 ? _a : "No address");
}

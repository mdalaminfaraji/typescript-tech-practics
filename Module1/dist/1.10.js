"use strict";
{
    const userName = "Mostafizur";
    const age = "tweenty";
    const age1 = 20;
    const age3 = undefined;
    let user = null;
    user = {
        name: "Mostafiuzr",
        gender: "male",
        bloodGroup: "B+",
    };
    let user1 = null;
    user1 = {
        name: "mukta",
        gender: "female",
        bloodGroup: "B+",
    };
    console.log(user, user1);
    const owl = {
        eyes: 2,
        wings: 2,
        legs: 2,
        fly: () => {
            console.log("flying ......");
        },
        eat: () => {
            console.log("eating ..............");
        },
    };
    console.log(owl);
    owl.fly();
    owl.eat();
}

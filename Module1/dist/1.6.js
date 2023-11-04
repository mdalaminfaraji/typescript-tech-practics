"use strict";
{
    const poorUser = {
        name: "alamin",
        balance: 0,
        addBalance(balance) {
            return `my balance ${this.balance + balance}`;
        },
    };
    const arr = [1, 2, 3];
    const newArray = arr.map((elem) => elem * elem);
    console.log(newArray);
}

"use strict";
{
    const person = "bike";
    // extends "name"|"age"
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: 'l',
        age: 34
    };
    const result1 = getPropertyValue(user, "name");
}

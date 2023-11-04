"use strict";
{
    const user = {
        id: 45,
        name: {
            firstName: "ala",
            MiddleName: 'min',
            lastName: 'faraji',
        },
        contactName: 389457389
    };
    const { id, name: { firstName } } = user;
    console.log(id, firstName);
    const myFriend = ['a', 'b', 'c', 'd', 'e', 'f'];
    const [, , tomal, ...rest] = myFriend;
    console.log(rest);
}

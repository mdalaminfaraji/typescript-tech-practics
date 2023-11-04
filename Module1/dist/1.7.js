"use strict";
{
    const course1 = ["db", "py", "c++"];
    const course2 = ["db1", "py1", "c++1"];
    const total = [...course1, ...course2];
    console.log(total);
    //spreed operator
    //rest operator
    function myfun(...name) {
        name.forEach((n) => console.log(n));
    }
    myfun('tamim', 'tanin', 'tnajid');
}

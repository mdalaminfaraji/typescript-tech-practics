"use strict";
{
    //constraints
    const addCourseToStuedent = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStuedent({ id: 234, name: 'x', email: "a@", dev: "akl" });
}

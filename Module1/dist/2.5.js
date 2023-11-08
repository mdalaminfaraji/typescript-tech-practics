"use strict";
{
    // function with Generic
    const createArray = (param) => {
        return [param];
    };
    // const createArrayWithGeneric = <T>(param:T):T[]=>{
    //         return [param];
    // }
    // const res1=createArray("ban");
    // type user={name:string; email:string}
    // const resGenericObj=createArrayWithGeneric<user>({name:'al', email:"ala"})
    // const resGeneric=createArrayWithGeneric<string>("ksdfj")
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res1 = createArray("ban");
    const resGenericObj = createArrayWithTuple({ name: 'al', email: "ala" }, "ala");
    const addCourseToStuedent = (student) => {
        const course = "next level";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStuedent({ name: 'x', email: "a@", dev: "akl" });
}

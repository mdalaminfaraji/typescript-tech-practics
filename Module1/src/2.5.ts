{
        // function with Generic
        const createArray = (param:string):string[]=>{
                return [param];
        }
        // const createArrayWithGeneric = <T>(param:T):T[]=>{
        //         return [param];
        // }



        // const res1=createArray("ban");
        // type user={name:string; email:string}

        // const resGenericObj=createArrayWithGeneric<user>({name:'al', email:"ala"})
        // const resGeneric=createArrayWithGeneric<string>("ksdfj")
        const createArrayWithTuple = <T, Q>(param1:T, param2:Q):[T, Q]=>{
                return [param1, param2];
        }

        



        const res1=createArray("ban");
        type user={name:string; email:string}

        const resGenericObj=createArrayWithTuple<user, string>({name:'al', email:"ala"}, "ala");

        const addCourseToStuedent=<T>(student:T)=>{
                const course="next level"

                return {
                        ...student,
                        course
                }
        }

        const student1=addCourseToStuedent({name:'x', email:"a@", dev:"akl"})
        
}
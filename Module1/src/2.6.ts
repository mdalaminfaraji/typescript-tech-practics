{
        //constraints

        const addCourseToStuedent=<T extends {id:number, name:string, email:string}>(student:T)=>{
                const course="next level"

                return {
                        ...student,
                        course
                }
        }
        interface st {
                id: number;
                name: string;
                email: string;
                dev: string;
            }
        const student1=addCourseToStuedent<st>({id:234, name:'x', email:"a@", dev:"akl"})
}
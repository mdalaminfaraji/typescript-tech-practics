{
        //utility Types
        //pick

        type Person ={
                name:string;
                age:number;
                email?:string;
                contact: string;
        }

        type NameAge=Pick<Person, "age" |"contact">;

        type ContactInfo = Omit<Person, "name" |"age">;


        type PersonRequired=Required<Person>


        type PersonPartial= Partial<Person>
        type PersonReadOnly=Readonly<Person>
        const person1: PersonReadOnly={
                name:'x',
                age:234,
                contact:'345345'
        }

        // person1.age=3454;

        // type MyObj ={
        //         a:string,
        //         b:string
        // }
        type MyObj=Record<string, string>

        const obj1:MyObj ={
                a:"aa",
                b:"bb"
        }

        const EmptyObj: Record<string, unknown>={};

}
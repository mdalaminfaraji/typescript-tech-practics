{
        type User1={
                name:string,
                age:number
        }

        interface User2 {
                name: string,
                age:number
        }

        type UserWithRole1 = User1& {role :string};
        interface UserWithRole2 extends User2 {
                role2:string,
        }

        const user:UserWithRole2={
                name:"ala",
                age:34,
                role2:"admin"
        }

        // array->object interface->object
        type Roll =number[];

        // interface Roll2 {
        //         [index:number[]]:number
        // }
        const rollNumber1: Roll=[1, 2, 3];

        type Add=(num1:number, num2:number)=>number;
        interface Add1 {
                (num1:number, num2:number):number  
        }
        const add:Add=(num1, num2)=>num1+num2;




}
{

        // amra type alise ar madhome korchi

        // type GenericArray<param>=Array<param>
        type GenericArray<T>=Array<T>
        // amra reusable korte partechi

        
        // const rollNumbers:number[]=[3, 4, 5];
        const rollNumbers:GenericArray<number>=[3, 4, 5];
        // const montors:string[]=["mr", 'x'];
        const montors:GenericArray<string>=["mr", 'x'];
        // const boolArray:boolean[]=[true, false, true];
        const boolArray:GenericArray<boolean>=[true, false, true];

        // type Person={
        //         name:string,
        //         age:number
        // }
        interface Person{
                name:string,
                age:number
        }

        const user:GenericArray<Person> =[
                {
                        name:"Mezba",
                        age:100
                },
                {
                        name:"alamin",
                        age:234
                },
        ]

        const add =(x:number, y:number)=>x+y;

        // generic tuple
        type GenericTupple<X, Y>=[X, Y];
        const manush:GenericTupple<string, number>=['mrx', 345];
        const UserWithID: GenericTupple<number, {name:string, Age:number, role:string}>=[34, {name:'alamin', Age:234, role:"admin"}];




}
{
       type user={
                name:string;
                age:Number;
                contact:number;
                isMarid:boolean;
        }

        const Rohim:user={
                name:"rohim",
                age:20,
                contact:3845793,
                isMarid:true
        }
        console.log(Rohim);




        type Add =(num1:number, num2:number)=>number;
        
        const add:Add=(num1, num2)=>num1+num2;
}
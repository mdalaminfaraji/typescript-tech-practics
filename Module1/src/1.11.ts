{
        // ternary operator
        const age=30;
     const isAdult=age>=18? "adult":"not adult";   
     console.log(isAdult)



     //nullish coalescing operator
     //null/undefined --->decision making
     const isAuthenticated=null;
     const result1= isAuthenticated ?? "Guest";
     console.log(result1)

     type User={
        name:string,
        address:{
                location:string,
                houseNo:number,
                address?:string,//optional chaien
                permanentAddaress:string
        }
     }

     const user:User={
        name:"alamin",
        address:{
                location:"kushtia",
                houseNo:678,
                permanentAddaress:"Narai",
                address:"lo"
        }
     }

     console.log(user.address.address?? "No address")
}
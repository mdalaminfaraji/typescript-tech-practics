{
        //type guards

        type num=Number|string;
        const add=(num1:num, num2:num):num=>{
                if(typeof num1==='number' && typeof num2==="number"){
                        return num1+num2;
                }else{
                        return num1.toString()+ num2.toString();
                }
        }

        const val=add("34", 34);
        console.log(val);


        // guard in

        type normalUser={
                name:string,
                
        }
        type AdminUser={
                name:string,
                role:string

        }

        const login=(user:normalUser |AdminUser)=>{
                if("role" in user){
                        console.log(`${user.role}`)
                }else{
                        console.log(`${user.name}`)
                }
        }



}
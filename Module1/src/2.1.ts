{
        let anything:any;
        anything="toy";
        anything=345;
        (anything as string)

        const kgToGm=(value:string | number):string | number |undefined =>{
                if(typeof value==="string"){
                        return`The value is ${parseFloat(value)+345}`;
                }
                if(typeof value=="number"){
                        return value;
                }
        }

        const result1=kgToGm(3453) as number;
        const result2=kgToGm("34") as string;
        console.log(result1, result2);
}
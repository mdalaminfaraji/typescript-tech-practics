{
        // conditional type
        type a1 =number;
        type b1= undefined;
        type z=a1 extends null? true:false;
        type x = a1 extends null?true:b1 extends undefined?undefined:any;


        type Sheikh ={
                bike:string;
                car:string;
        }

        type checkVehicle<T>=T extends keyof Sheikh?true: false;

        type hasBike= checkVehicle<"bike">;
        
}
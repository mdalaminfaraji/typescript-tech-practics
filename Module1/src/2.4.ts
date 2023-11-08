{
        // amra interface ar maddhome GenericType use korbo

        interface Developer<T, X=null> {
                name:string;
                computer:{
                        brand:string;
                        model:string;
                        releaseYear:number
                }
                smartWatch: T;
                bike?:X;
        }  

        interface watch{
                name:string;
                brand:string;
                isActive:boolean;
                sleepTrack?:boolean,
        }

        interface smartBike {
                brand:string;
                age:number;
        }

        const poorDeveloper: Developer<watch>={
                name:'person',
                computer:{
                        brand:"s",
                        model:'4-x',
                        releaseYear:234,
                },
                smartWatch:{
                        name:'dha',
                        brand:"apple",
                        isActive:false,
                }
        }
        const richDeveloper: Developer<watch, smartBike>={
                name:'person',
                computer:{
                        brand:"s",
                        model:'4-x',
                        releaseYear:234,
                },
                smartWatch:{
                        name:'dha',
                        brand:"apple",
                        isActive:false,
                        sleepTrack:true,
                },
                bike:{
                        brand:'x',
                        age:42,
                }
        }
}
{
        // mapped typed

        const arrayOfNumbers :number[]=[1, 2, 3];

        const arrOfString:string[]=arrayOfNumbers.map((num)=>num.toString());
        console.log(arrOfString);

        type areaNumber={
                width:number;
                height:number;
        }
        type height=areaNumber["height"]//look of type
        type AreaSring={
                [key in keyof areaNumber]:string;
        }

        type AreaString<T> ={
                [key in keyof T]: T[key];
        }

        const area1: AreaString<{height:string; width:number}>={
                height:"100",
                width:50
        }

}
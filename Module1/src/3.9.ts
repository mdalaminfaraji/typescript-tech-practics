{
        // abstraction 1. interface 2. abstract
        // Idea
        interface Vehicle1{
                startEngine():void;
                stopEngine():void;
        }
//      implement
        class Car1 implements Vehicle1{
                startEngine(): void {
                        console.log('hello I am startEngine')
                }

                stopEngine(): void {
                        console.log("now i ma stop")
                }
                height:number;
                width:number;
                constructor(height:number, width:number){
                        this.height=height;
                        this.width=width;
                }

                area():number{
                        return this.height*this.width;
                }
        }


        const toy=new Car1(54, 345);
       const rectangle= toy.area();
       console.log(rectangle);


       abstract class Vehicle2{
         abstract startCar():void;
         abstract stopCar():void;

       }

       class ToyotaCar extends Vehicle2{
         startCar(): void {
                 console.log('i ama abstract')
         }
         stopCar(): void {
                 console.log("I am implement")
         }
       }
 



}
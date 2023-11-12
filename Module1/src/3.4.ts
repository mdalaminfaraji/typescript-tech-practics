{
        // Type guard using instance of


        class Animal {
                name:string;
                age:number;
                constructor(name:string, age:number){
                        this.name=name;
                        this.age=age;
                }
                makeSound(){
                        console.log("this is Animal sound");
                }

        }

        class Dog extends Animal{
                constructor(name:string, age:number){
                        super(name, age);
                }

                makeBark(){
                        console.log("this dog Bark")
                }
        }

        class Cat extends Animal{

                constructor(name:string, age:number){
                        super(name, age);
                }

                makeMaow(){
                        console.log("this cat mao")
                }
        }

        const isDog =(animal:Animal):animal is Dog =>{
                return animal instanceof Dog
        }
        const isCat =(animal:Animal):animal is Cat =>{
                return animal instanceof Cat
        }

        const getAnimal=(animal:Animal)=>{
                if(isDog(animal)){
                        animal.makeBark();
                }
                else if(isCat(animal)){
                        animal.makeMaow();
                }
                else{
                        animal.makeSound();
                }
        }

        const dog=new Dog('mr dog', 345);
        const cat =new Cat('mr cat', 435);
        
}
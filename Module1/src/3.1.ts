{
        class Animal{
                // public name:string;
                // public Age:number;
                // public sound:string;

                constructor(public name:string,public Age:number,public sound:string){
                        // this.name=name;
                        // this.Age=Age;
                        // this.sound=sound;
                }

                makeSound(){
                        console.log(`this sound ${this.sound}`);
                }
        }

        const dog=new Animal('tom', 34, 'geo');
        dog.makeSound();

}
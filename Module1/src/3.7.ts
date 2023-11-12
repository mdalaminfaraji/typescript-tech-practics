{
        // static opp

        class Counter{
                 static count:number=0;
                increment(){
                      return  Counter.count=Counter.count+1;
                 }


        }


        const incre=new Counter();
        incre.increment();
        incre.increment();
        incre.increment();
        console.log( incre.increment());

        const incre1=new Counter();
        incre1.increment();
        incre1.increment();
        // incre.increment();
        console.log(incre1.increment());
}
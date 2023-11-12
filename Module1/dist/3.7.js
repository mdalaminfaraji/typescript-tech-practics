"use strict";
{
    // static opp
    class Counter {
        increment() {
            return Counter.count = Counter.count + 1;
        }
    }
    Counter.count = 0;
    const incre = new Counter();
    incre.increment();
    incre.increment();
    incre.increment();
    console.log(incre.increment());
    const incre1 = new Counter();
    incre1.increment();
    incre1.increment();
    // incre.increment();
    console.log(incre1.increment());
}

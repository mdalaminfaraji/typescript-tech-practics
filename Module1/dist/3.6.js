"use strict";
{
    // Access Modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        // deposit(amount:number){
        //         this.balance=this.balance+ amount;
        // }
        set deposit(amount) {
            this.balance = this.balance + amount;
        }
        // showBalance(){
        //         return this.balance
        // }
        // getter
        get Balance() {
            return this.balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
    }
    const Ahmdaullah = new BankAccount(234, "ahamadullah", 345343453);
    Ahmdaullah.deposit = 984593;
    console.log("dks amount", Ahmdaullah.Balance);
    // getter kaj kore function ar moto kore kintu use kori property ar moto kore
}

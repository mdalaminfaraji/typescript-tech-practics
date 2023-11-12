"use strict";
{
    // Access Modifier
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this.balance = balance;
        }
        deposit(amount) {
            this.balance = this.balance + amount;
        }
        showBalance() {
            return this.balance;
        }
    }
    class StudentAccount extends BankAccount {
        test() {
            this.balance;
        }
    }
    const Ahmdaullah = new BankAccount(234, "ahamadullah", 345343453);
    Ahmdaullah.deposit(234234);
    console.log("dks", Ahmdaullah.showBalance());
}

{
        // Access Modifier


        class BankAccount {
               public readonly id:number;
               public name:string;
               protected balance:number;

                constructor(id:number, name:string, balance:number){
                        this.id=id;
                        this.name=name;
                        this.balance=balance;
                }

                deposit(amount:number){
                        this.balance=this.balance+ amount;
                }


                showBalance(){
                        return this.balance
                }



        }


        class StudentAccount extends BankAccount{
                test(){
                       this.balance
                }
        }


        const Ahmdaullah=new BankAccount(234, "ahamadullah", 345343453);
        Ahmdaullah.deposit(234234);
        console.log("dks",Ahmdaullah.showBalance());
}
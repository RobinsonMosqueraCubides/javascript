class BankAccount{
    constructor(number, balance){
        this.nomber = number;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
        console.log(`Deposited: ${amount} on the account: ${this.nomber}, New Balance: ${this.balance}`);
    }
    withdraw(amount){
        if(amount > this.balance){
            console.log('Insufficient funds');
            return;
        }
        else{
        this.balance -= amount;
        console.log(`Withdrawn: ${amount} on ${this.nomber}, New Balance: ${this.balance}`);
    }
    }
}
const account1 = new BankAccount(123456789, 1000);
const account2 = new BankAccount(743532423, 3000);

account1.deposit(1000);
account2.deposit(1000);

account1.withdraw(2000);
account2.withdraw(2000);
class Customer{
    id;
    name;
    account;
    toString(){
        return "Id is " + this.id + " Name is " + this.name + " account details: " + this.account;
    }
    constructor(id, name, account){
        this.id = id;
        this.name = name;
        this.account = account;
    }
}
class Account{
    balance;
    toString(){
        return  this.balance;
    }
    constructor(balance){
        this.balance = balance;
    }

}
class PrimeAccount extends Account{
    supercoins;
    toString(){
        return "Balance is " + super.toString() + " Supercoins earned is " + this.supercoins;
    }
    constructor(balance, supercoins){
        super(balance);
        this.supercoins = supercoins;
    }
}
let account1 = new Account(150.0);
let account2 = new Account(250.5);
let primeAccount1 = new PrimeAccount(150.0, 30);
let primeAccount2 = new PrimeAccount(250.5, 50);
let customer1 = new Customer(11, "Aravind", account1);
let customer2 = new Customer(45, "Amrutha", account2);
let customer3 = new Customer(31, "abhishek", primeAccount1);
let customer4 = new Customer(61, "harshith", primeAccount2);
let customers = [customer1, customer2, customer3, customer4];
for(let i=0; i<customers.length; i++){
    console.log(customers[i].toString());
}
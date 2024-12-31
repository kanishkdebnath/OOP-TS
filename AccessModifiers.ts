// Access Modifiers (public, private, protected) control visibility and access.
// TypeScript adds strong typing, parameter properties, and static members to make classes more robust and scalable.

class BankAccount {
  public accountNumber: string;
  private balance: number;
  readonly accountHolderName: string;
  static bankName: string = "HDFC";
  protected transactionLimit: number;
  static validateAccountNumber(accountNumber: string) {
    return accountNumber.length === 5;
  }
  
  constructor(accountNumber: string, balance: number, accountHolderName: string, transactionLimit: number) {
    if (!BankAccount.validateAccountNumber(accountNumber)) {
      throw new Error("Invalid Account number!")
    }
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
    this.transactionLimit = transactionLimit;
  }
  
  private logTransaction(type: string, amount: number) {
    console.log(`${type} : ${amount}`);
  }
  
  public deposit(amount: number) {
    this.logTransaction("CREDIT", amount);
    this.balance += amount;
  }
  
  public withdraw(amount: number) {
    if (amount > this.transactionLimit) {
      throw new Error(`Cannot transact more than ${this.transactionLimit}`)
    }
    this.logTransaction("DEBIT", amount);
    this.balance -= amount;
  }

  public getBalance() {
    return this.balance;
  }
}

const b1 = new BankAccount("12345", 1000, "Kanishk", 1000);
console.log(b1.getBalance())
b1.deposit(200);
b1.deposit(300);
console.log(b1.getBalance())
b1.withdraw(100);
console.log(b1.getBalance())
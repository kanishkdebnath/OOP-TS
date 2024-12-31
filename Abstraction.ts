// 1.	Abstract Class: Acts as a blueprint for subclasses, defining abstract and concrete methods.
// 2.	Abstract Method: Declared but not implemented; subclasses must provide their specific implementation.
// 3.	Concrete Method: Shared functionality for all subclasses, implemented in the abstract class.

abstract class Payment {
  protected amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  protected abstract validateDetails(): void;
  protected abstract authorizePayment(): void;
  protected abstract processPayment(): void;

  private generateReceipt(): void {
    console.log(`Receipt: Payment of ₹${this.amount} processed successfully.`);
  }

  public executePayment(): void {
    this.validateDetails();
    this.authorizePayment();
    this.processPayment();
    this.generateReceipt();
  }
}

class CreditCardPayment extends Payment {
  validateDetails(): void {
    console.log("Validating credit card details ...");
    
  }
  authorizePayment(): void {
    console.log("Authorizing credit card payment ...");
  }
  processPayment(): void {
    console.log("Processing credit card payment ...");
  }
  
}

class DebitCardPayment extends Payment {
  validateDetails(): void {
    console.log("Validating debit card details ...");
  }
  authorizePayment(): void {
    console.log("Authorizing debit card payment ...");
  }
  processPayment(): void {
    console.log("Processing debit card payment ...");
  }
}

class UpiPayment extends Payment {
  validateDetails(): void {
    console.log("Validating UPI ID and PIN ...");
  }
  authorizePayment(): void {
    console.log("Authorizing UPI payment ...");
  }
  processPayment(): void {
    console.log("Processing UPI payment ...");
  }
}

class PaymentGateway {
  public static initiatePayment(payment: Payment) {
    payment.executePayment();
  }
}

const creditPayment: Payment = new CreditCardPayment(1000);
const debitPayment: Payment = new DebitCardPayment(2000);
const upiPayment: Payment = new UpiPayment(3000);

// Credit
console.log("-----------------");
PaymentGateway.initiatePayment(creditPayment);


// Debit
console.log("-----------------");
PaymentGateway.initiatePayment(debitPayment);



// UPI
console.log("-----------------");
PaymentGateway.initiatePayment(upiPayment);

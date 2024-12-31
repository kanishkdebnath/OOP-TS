class PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Processing base payment of amount : ${amount}`);
  }
}

class CreditCard extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Validating Credit card details ...`);
    console.log(`Processing credit card payment : ${amount}`);
  }
}

class Paypal extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Validating Paypal ID and PIN ...`);
    console.log(`Processing Paypal payment : ${amount}`);
  }
}

class BankTransfer extends PaymentMethod {
  processPayment(amount: number): void {
    console.log(`Validating Bank Account details ... `);
    console.log(`Processing Bank payment : ${amount}`);
  }
}

const credit: PaymentMethod = new CreditCard();
credit.processPayment(1000);

const paypal: PaymentMethod = new Paypal();
paypal.processPayment(2000);

const bankTransfer: PaymentMethod = new BankTransfer();
bankTransfer.processPayment(3000);
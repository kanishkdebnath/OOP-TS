class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public getDetails(): void {
    console.log(`Product : ${this.name} of $${this.price}`);
  }

  public getPrice() {
    return this.price;
  }
}

class OrderItem {
  private product: Product;
  private quantity: number;

  constructor(product: Product, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
  
  public getOrderItemDetails() {
    console.log("-----------------");
    this.product.getDetails();
    console.log(`Quantity : ${this.quantity}`);
    console.log("-----------------");
  }

  public getTotalPrice(): number {
    return this.product.getPrice() * this.quantity;
  }
}

class Order {
  private orderItems: OrderItem[] = [];
  
  public addOrderItem(orderItem: OrderItem) {
    this.orderItems.push(orderItem);
  }
  
  public removeOrderItem(orderItem: OrderItem) {
    console.log(`Removing order item ...`);
    orderItem.getOrderItemDetails();
    this.orderItems = this.orderItems.filter((order) => order !== orderItem);
    console.log(`Order item removed`);
  }

  public viewOrderDetails(): void {
    this.orderItems.forEach((orderItem) => orderItem.getOrderItemDetails());
  }

  public deleteOrder(): void {
    this.orderItems = [];
    console.log("Deleting all order items!");
  }

  public getOrderTotalPrice() {
    return this.orderItems.reduce((total, orderItem) => orderItem.getTotalPrice() + total, 0)
  }
  
}

class Customer {
  private name: string;
  private orders: Order[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addOrder(order: Order) {
    this.orders.push(order);
  }

  private getTotal() {
    return this.orders.reduce((total, order) => order.getOrderTotalPrice() + total, 0);
  }
  public viewOrder() {
    console.log("+-----------------+");
    console.log(`Orders for ${this.name}`);
    console.log("+-----------------+");
    this.orders.forEach((order, index) => {
      console.log(`Order #${index + 1}`);
      order.viewOrderDetails()
    });
    console.log("+-----------------+");
    console.log(`Total : ${this.getTotal()}`);
  }

  public removeOrder(orderToRemove: Order) {
    console.log(`Removing order ...`);
    orderToRemove.viewOrderDetails();
    this.orders = this.orders.filter((order) => order !== orderToRemove);
    console.log(`Order removed`);
  }
}


const product1 = new Product("Macbook Pro 16 inch", 2499);
const product2 = new Product("iPhone Pro", 999);
const product3 = new Product("Mac mini", 599);
const product4 = new Product("iPad", 899);
const product5 = new Product("Air Pods Pro", 299);
const product6 = new Product("Apple watch", 499);

const orderItem1 = new OrderItem(product1, 1);
const orderItem2 = new OrderItem(product2, 3);
const orderItem3 = new OrderItem(product3, 1);

const orderItem4 = new OrderItem(product4, 2);
const orderItem5 = new OrderItem(product5, 5);
const orderItem6 = new OrderItem(product6, 10);

const order1 = new Order();
order1.addOrderItem(orderItem1);
order1.addOrderItem(orderItem2);
order1.addOrderItem(orderItem3);

const order2 = new Order();
order2.addOrderItem(orderItem4);
order2.addOrderItem(orderItem5);
order2.addOrderItem(orderItem6);

const customer = new Customer("Kanishk");
customer.addOrder(order1);
customer.addOrder(order2);

customer.viewOrder();

order2.removeOrderItem(orderItem5);

customer.viewOrder();

customer.removeOrder(order1);

customer.viewOrder();
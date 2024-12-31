class Vehicle {
  registrationNumber: string;
  fuelLevel: number;


  constructor(registrationNumber: string, fuelLevel: number) {
    this.registrationNumber = registrationNumber;
    this.fuelLevel = fuelLevel;
  }

  startEngine(): void {
    console.log(`${this.registrationNumber} :  Starting Engine!`);
  }

  stopEngine(): void {
    console.log(`${this.registrationNumber} : Stopping Engine!`);
  }

  refuel(amount: number) {
    this.fuelLevel += amount;
    console.log(`${this.registrationNumber} : Adding ${amount}L fuel. Now total fuel capacity is ${this.fuelLevel}L`);
  }
}

class Car extends Vehicle {
  passengerCapacity: number;

  constructor(registrationNumber: string, fuelCapacity: number, passengerCapacity: number) {
    super(registrationNumber, fuelCapacity);
    this.passengerCapacity = passengerCapacity;
  }

  openTrunk(): void {
    console.log(`${this.registrationNumber} : Opening Trunk of the Car`);
  }
}

class Truck extends Vehicle {
  cargoCapacity: number;

  constructor(registrationNumber: string, fuelCapacity: number, cargoCapacity: number) {
    super(registrationNumber, fuelCapacity);
    this.cargoCapacity = cargoCapacity;
  }

  loadCargo(amount: number): void {
    console.log(`${this.registrationNumber} : Loading ${amount}Kgs cargo`);
  }
}

class Motorcycle extends Vehicle {
  hasSideCar: boolean;

  constructor(registrationNumber: string, fuelCapacity: number, hasSideCar: boolean) {
    super(registrationNumber, fuelCapacity);
    this.hasSideCar = hasSideCar;
  }

  popWheelie(): void {
    console.log(`${this.registrationNumber} : Performing wheelie like crazy!`);
  }
}

const car = new Car("ABC123", 33, 5);
const truck = new Truck("PQR456", 33, 500);
const motorcycle = new Motorcycle("XYZ789", 33, true);

console.log(car);
car.startEngine();
car.stopEngine();
car.openTrunk();
car.refuel(5);

console.log(truck);
truck.loadCargo(200);
truck.refuel(10);

console.log(motorcycle);
motorcycle.popWheelie();
motorcycle.refuel(3);

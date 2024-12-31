// Class
// A class is a blueprint or template for creating objects. It encapsulates data (properties) and behavior (methods) related to that data.
// Key Features
// 	1.	Properties: Variables declared in a class.
// 	2.	Methods: Functions defined in a class.
// 	3.	Constructor: A special method used for initializing objects.
// 	4.	Access Modifiers: Control access to the class members.
// 	•	public (default): Accessible everywhere.
// 	•	private: Accessible only within the class.
// 	•	protected: Accessible within the class and its subclasses.

// Object
// An object is an instance of a class. It represents a specific entity created using the class blueprint.

class Person {
  name: string;
  age: number;
  hobbies: string[];

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  greet() {
    console.log(`Hi I am ${this.name} and I am ${this.age} years old and my hobbies are : ${this.hobbies}`);
    
  }
}

const p1 = new Person("Kanishk", 27, ["code", "gym", "art"])
const p2 = new Person("Rohan", 27, ["eat", "sleep", "trek"])

console.log(p1);
console.log(p2);

p1.greet();
p2.greet();



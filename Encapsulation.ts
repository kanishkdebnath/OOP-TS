class Employee {
  private name: string;
  private salary: number;

  protected id: string;

  public designation: string;

  constructor(name: string, salary: number, id: string, designation: string) {
    this.name = name;
    this.salary = salary;
    this.id = id;
    this.designation = designation;
  }


  public getName() {
    return this.name;
  }

  public getSalary(user: Employee) {
    if (this.validateUser(user)) {
      return this.salary;
    }
    console.error("Unauthorized!");    
  }
  
  public setSalary(user:Employee, amount: number) {
    if (this.validateUser(user)) {
      this.salary = amount;
      console.log(`Salary updated to ${amount} for ${this.name}`);
      return;
    }
    console.log("Unauthorized!");    
  } 
  
  public updateDesignation(newDesignation: string) {
    this.designation = newDesignation;
    console.log(`Designation updated to ${newDesignation} for ${this.name}`);
  }

  private validateUser(user: Employee) {
    return user.designation === 'HR';
  }
}

const hr = new Employee("Hardik", 70000, "HR101", "HR");
const swe = new Employee("Kanishk", 100000, "FE101", "SWE1");

console.log(swe.getName());
console.log(swe.getSalary(hr));
console.log(swe.designation);
swe.setSalary(hr, 120000);
console.log(swe.getSalary(hr));
swe.updateDesignation("SWE2")
console.log(swe);

